import React from 'react';
import ReactDOM from 'react-dom';
import compiler from 'mson/lib/compiler';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CustomComponent from './components/mson-def/CustomComponent';
import CustomComponentUI from './components/CustomComponent';
import uiComponents from 'mson-react/lib/components';

compiler.registerComponent(CustomComponent.name, CustomComponent);
uiComponents.CustomComponent = CustomComponentUI;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
