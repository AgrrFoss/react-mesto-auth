import React, { Button } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as mestoAuth from '../mestoAuth'


class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this);
    this.kandleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    console.log(name, value)
    this.setState({
      [name]: value 
    });
    console.log(this.state)
  }

    handleSubmit(e) {
      e.preventDefault()
      if (!this.state.email || !this.state.password){
        return;
      }
      mestoAuth.authorize(this.state.email, this.state.password)
      .then((data) => {
        if (data.token){
          this.setState({email: "", password: ""}), () => {
            this.props.handleLogin(); //вызывем из пропсов фунцию меняющую loggedIn на True
            this.props.history.push('/'); //переходим на страницу с карточками
          }
        }
      })
      .catch(err => console.log(err))
    }

    render () {
      return (
        <section className="auth">
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <h3 className="auth-form__title">Вход</h3>
            <input
                type="email"
                className="auth-form__input"
                id='email'
                name="email"
                placeholder="email"
                minLength="2"
                maxLength="30"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <span className="placeNameInput-error"></span>
              <input
                type="password"
                className="auth-form__input"
                id='password'
                name="password"
                placeholder="Пароль"
                minLength="2"
                maxLength="30"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <span className="placeNameInput-error"></span>
              <button type="submit" className="auth-form__submit">Войти</button>
            <p className="auth-form__text">Уже зарегистрированы? <Link to="/sing-in" className="auth-form__text">Войти</Link></p>
          </form>
    </section>
      )
    }
  }

export default withRouter(Login);