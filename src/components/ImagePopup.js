import React from 'react';

function ImagePopup(props) {

  function clickOnOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) { props.onClick() }
  }

  return (
    <div className={`${props.card.link !== '' ? 'popup_opened' : ''}  popup popup_dart-bg`} id="photoPopup" onClick={(evt) => clickOnOverlay(evt)}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={props.onClick}></button>
        <img className="popup__image" src={props.card !== '' ? props.card.link : ''} alt={props.card.name} />
        <h3 className="popup__image-name">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;

