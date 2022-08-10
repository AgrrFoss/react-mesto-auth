import React, { Button } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as mestoAuth from '../mestoAuth'


class Register extends React.Component {
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
    const { email, password } = this.state;
    this.props.handleRegister(email, password);
  }

  render() {
    return (
      <section className="auth">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <h3 className="auth-form__title">Регистрация</h3>
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
          <button type="submit" className="auth-form__submit">Зарегистрироваться</button>
          <p className="auth-form__text">Уже зарегистрированы? <Link to="/sing-in" className="auth-form__text">Войти</Link></p>
        </form>
      </section>
    )
  }
}



export default withRouter(Register);