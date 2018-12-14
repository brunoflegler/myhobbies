import React, { Fragment } from 'react';

import './config/reacttotron';
import GlobalStyle from './styles/globals';
import Routes from './routes';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;
