import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import colors from './data/colors';

render(<App colors={colors} />, document.getElementById('root'));
