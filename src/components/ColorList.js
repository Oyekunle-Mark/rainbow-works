import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

const ColorList = ({ colors, removeColor }) =>
  <div className="classList">
    {
      (colors.length === 0) ?
        <p>No Colors Listed. <small>(Add a Color)</small></p> :
        colors.map(color => 
          <Color key={color.id} {...color} removeColor={() => removeColor(color.id)} />
        )
    }
  </div>

ColorList.propTypes = {
  colors: PropTypes.array,
  removeColor: PropTypes.func
}

ColorList.defaultProps = {
  colors: [],
  removeColor: f => f
}

export default ColorList;
