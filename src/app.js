import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import './style/style.scss';
import 'normalize.css/normalize.css';

const element=document.getElementById('app');
ReactDOM.render(<IndecisionApp/>,element);