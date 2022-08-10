import React from 'react';

function PopupWithForm(props) {

  function clickOnOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) { props.onClick() }
  }

  return (
    <div className={`${props.isOpen ? 'popup_opened' : ''} popup popup_type_${props.name}`} id="popupEdit" onClick={(evt) => clickOnOverlay(evt)}>
      <div className="popup__container">
        <form className="popup__form" name={`${props.name}-form`} onSubmit={props.onSubmit}>
          <button className="popup__close" type="button" onClick={props.onClick}></button>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button type="submit" className="popup__submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;