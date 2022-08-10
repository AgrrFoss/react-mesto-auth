import React, { Button } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as mestoAuth from '../mestoAuth'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.email || !this.state.password) {
      return;
    }
    this.props.handleLogin(this.state.email, this.state.password)
/*
    mestoAuth.authorize(this.state.email, this.state.password)
      .then((data) => {
        if (data.token) {
          this.setState({ email: '', password: '' }, () => {
            this.props.handleLogin(); //вызывем из пропсов фунцию меняющую loggedIn на True
            this.props.history.push('./');; //переходим на страницу с карточками
          }
          )
        }
      })
      .catch((err) => {
        console.log(err)
        this.props.openInfoTooltip()
      })
      */
  }

  render() {
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
        </form>
      </section>
    )
  }
}

export default withRouter(Login);