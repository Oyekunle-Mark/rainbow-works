import React, { Component } from 'react';
import PropTypes from 'prop-types'
import StarRating from './StarRating';

const Color = ({ title, color, rating, removeColor }) =>
  <section className="color">
    <h1>{title}</h1>
    <button onClick={removeColor}>X</button>
    <div className="color" style={{ backgroundColor: color }}>
    </div>
    <div>
      <StarRating starsSelected={rating} />
    </div>
  </section>

Color.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  rating: PropTypes.string,
  removeColor: PropTypes.func,
}

Color.defaultProps = {
  id: '',
  title: '',
  color: '',
  rating: '0',
  removeColor: f => f
}

export default Color;
