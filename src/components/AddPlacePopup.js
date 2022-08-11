import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  React.useEffect(() => {
    setName('')
    setLink('')
  },
    [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    })
  }

  return (
    <PopupWithForm name="add-place" title="Новое место" buttonText="Добавить"
      isOpen={props.isOpen} onClick={props.onClick} onSubmit={handleSubmit}>
      <input
        type="text"
        className="popup__input"
        id='placeNameInput'
        name="placeName"
        value={name}
        onChange={handleNameChange}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="placeNameInput-error"></span>
      <input
        type="url"
        className="popup__input"
        id='placeLinkInput'
        name="link"
        value={link}
        onChange={handleLinkChange}
        placeholder="Ссылка на картинку"
        required />
      <span className="placeLinkInput-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup