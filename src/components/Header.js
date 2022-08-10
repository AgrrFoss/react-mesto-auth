import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header(props) {
  const history = useHistory();
  function singOut() {
    localStorage.removeItem('token');
    history.push('/sing-in');
  }
  return (
    <Switch>
      <Route exact path='/'>
        <header className="header">
          <img className="header__logo" src={logoPath} alt="логотип" />
          <div className="header__text-block">
            <p className="header__text">{props.email}</p>
            <button className="header__button" onClick={singOut}>Выйти</button>

          </div>
        </header>
      </Route>
      <Route exact path='/sing-up'>
        <header className="header">
          <img className="header__logo" src={logoPath} alt="логотип" />
          <div className="header__text-block">
            <Link to="/sing-in" className="header__text">Войти</Link>

          </div>
        </header>
      </Route>
      <Route exact path='/sing-in'>
        <header className="header">
          <img className="header__logo" src={logoPath} alt="логотип" />
          <div className="header__text-block">
            <Link to="/sing-up" className="header__text">Регистрация</Link>

          </div>
        </header>
      </Route>
    </Switch>





  );
}

export default Header;