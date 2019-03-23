import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ selected }) =>
  <div className={(selected) ? "star selected" : "star"}>
  </div>

Star.propTypes = {
  selected: PropTypes.bool
}

Star.defaultProps = {
  selected: false
}

export default Star;
