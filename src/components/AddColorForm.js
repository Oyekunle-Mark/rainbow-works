import React from 'react';
import PropTypes from 'prop-types';

const AddColorForm = ({ addNewColor }) => {
  let _title, _color, _rating;

  const submit = e => {
    e.preventDefault()
    addNewColor(_title.value, _color.value, _rating.value);
    _title.value = '';
    _color.value = '#000000';
    _rating.value = 0;
    _title.focus();
  }

  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input} type="text" placeholder="color name..." required />
      <input ref={input => _color = input} type="color" required />
      <input ref={input => _rating = input} type="number" max="5" placeholder="rate color..." required />
      <button>Add Color</button>
    </form>
  )
}

AddColorForm.propTypes = {
  addNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
  addNewColor: f => f
}

export default AddColorForm;
