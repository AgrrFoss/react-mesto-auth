import React from 'react';
import successUnionPath from '../images/success.png';
import errorUnionPath from '../images/error.png';

function InfoTooltip(props) {

  function clickOnOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) { props.onClick() }
  }


  return (
    <div className={`${props.isOpen ? 'popup_opened' : ''} popup popup_type_${props.name}`} id="popupEdit" onClick={(evt) => clickOnOverlay(evt)}>
      <div className="popup__container">
        <form className="popup__form" name={`${props.name}-form`} onSubmit={props.onSubmit}>
          <button className="popup__close" type="button" onClick={props.onClick}></button>
          <img className="popup__icon" src={props.typeError ? errorUnionPath : successUnionPath} alt="галочка" />
          <h3 className="popup__title popup__title_center">{props.typeError ? 'Что-то пошло не так! Попробуйте еще раз' : 'Вы успешно зарегистрировались'}</h3>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;