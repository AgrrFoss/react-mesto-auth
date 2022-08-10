import React from 'react';
import api from '../utils/Api';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onLikeCard, onDeleteCard }) {

  const userInfo = React.useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__ava-block">
          <img className="profile__ava" src={userInfo.avatar} alt="Аватар пользователя" />
          <div className="profile__ava-edit" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__name">
          <h1 className="profile__title">{userInfo.name}</h1>
          <button type="button" onClick={onEditProfile} className="profile__edit" aria-label="редактировать профиль"></button>
        </div>
        <p className="profile__desc">{userInfo.about}</p>
        <button type="button" onClick={onAddPlace} className="profile__add-button" aria-label="добавить фото"></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={onCardClick}
                onCardLike={onLikeCard}
                onCardDelete={onDeleteCard}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;