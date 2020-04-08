import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Headers from './components/header';

ReactDOM.render(
  <Headers/>, document.getElementById('root'));
registerServiceWorker();
