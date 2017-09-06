import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// import './Visualizer/Visualizer.css';
// import './App/App.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
