import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const inputRef = React.useRef('')

  React.useEffect(() => {
    inputRef.current.value = ''
  },
    [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm name="edit-ava" title="Обновить аватар" buttonText="Сохранить"
      isOpen={props.isOpen} onClick={props.onClick} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="url"
        className="popup__input"
        id='avaLink'
        name="avaLink"
        placeholder="Ссылка на картинку"
        required />
      <span className="avaLink-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup