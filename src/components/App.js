import React, { Component } from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import { v4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color, rating) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating
      }
    ]
    this.setState({ colors })
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color =>
      color.id !== id
    )
    this.setState({ colors })
  }

  render() {
    const { addColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm addNewColor={addColor} />
        <ColorList colors={colors} removeColor={removeColor} />
      </div>
    )
  }
}

export default App;
