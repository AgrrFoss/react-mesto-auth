import React from 'react';

function Login() {
  return (
    <section className="auth">
        <form className="auth-form">
            <h3 className="auth-form__title">Вход</h3>
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
            <button type="submit" className="auth-form__submit">Войти</button>
        </form>
    </section>
  );
}

export default Login;