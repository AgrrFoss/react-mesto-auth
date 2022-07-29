import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
    return (props.card)
  }
  function handleLikeClick () {
    props.onCardLike(props.card);
  }
  function handleDeleteClick () {
    props.onCardDelete(props.card);
  }

  const userInfo = React.useContext(CurrentUserContext)
  const isOwn = props.card.owner._id === userInfo._id;
  const isLiked = props.card.likes.some(i => i._id === userInfo._id);

  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__delete' : 'element__delete_hidden'}`
  ); 
  const cardLikeButtonClassName = (`${isLiked ? 'element__like element__like_active' : 'element__like'}`); 

  return (
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className={cardDeleteButtonClassName} onClick={handleDeleteClick}></div>
      <div className="element__name-block">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;