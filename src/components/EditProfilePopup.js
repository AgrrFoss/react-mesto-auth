import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const userInfo = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(userInfo.name)
    setDescription(userInfo.about)
  },
    [userInfo, props.isOpen])

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleDescriptionCange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    })
  }

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить"
      isOpen={props.isOpen} onClick={props.onClick} onSubmit={handleSubmit}>
      <input
        type="text"
        className="popup__input"
        id='nameInput'
        name="name"
        value={name || ''}
        onChange={handleNameChange}
        placeholder="Имя пользователя"
        minLength="2"
        maxLength="40"
        required />
      <span className="nameInput-error"></span>
      <input
        type="text"
        className="popup__input"
        id='jobInput'
        name="job"
        value={description || ''}
        onChange={handleDescriptionCange}
        placeholder="Род деятельности"
        minLength="2"
        maxLength="200"
        required />
      <span className="jobInput-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup