import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({ starsSelected }) => 
  <div className="starRating">
    {[...Array(5)].map((n, i) =>
      <Star key={i} selected={i < starsSelected} />
    )}
    <p>{starsSelected} of 5 stars</p>
  </div>

StarRating.propTypes = {
  starsSelected: PropTypes.string
}

StarRating.defaultProps = {
  starsSelected: '0'
}

export default StarRating;
