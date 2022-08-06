import React from 'react';
import { Link } from 'react-router-dom'

function Register() {
  return (
    <section className="auth">
        <form className="auth-form">
            <h3 className="auth-form__title">Регистрация</h3>
            <input
                type="email"
                className="auth-form__input"
                id='email'
                name="email"
                placeholder="email"
                minLength="2"
                maxLength="30"
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
                required
              />
              <span className="placeNameInput-error"></span>
            <button type="submit" className="auth-form__submit">Зарегистрироваться</button>
            <p className="auth-form__text">Уже зарегистрированы? <Link to="/sing-in" className="auth-form__text">Войти</Link></p>
        </form>
    </section>
  );
}

export default Register;