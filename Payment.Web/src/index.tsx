import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './views/App';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';

ReactDOM.render(<App />, document.querySelector('.app'));
