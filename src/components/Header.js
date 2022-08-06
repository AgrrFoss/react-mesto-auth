import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header() {
  return (
    <Switch>
        <Route exact path='/'>
          <header className="header">
            <img className="header__logo" src={logoPath}  alt="логотип" />
            <div className="header__text-block">
              <p className="header__text">email@email.ru</p>
              <p className="header__text header__text_gray">Выйти</p>

            </div>
          </header>        
        </Route>
        <Route exact path='/sing-up'>
        <header className="header">
          <img className="header__logo" src={logoPath}  alt="логотип" />
          <div className="header__text-block">
            <Link to="/sing-in" className="header__text">Войти</Link>

          </div>
        </header>        
      </Route>
      <Route exact path='/sing-in'>
      <header className="header">
        <img className="header__logo" src={logoPath}  alt="логотип" />
        <div className="header__text-block">
          <Link to="/sing-up" className="header__text">Регистрация</Link>

        </div>
      </header>        
    </Route>
</Switch>




    
  );
}

export default Header;