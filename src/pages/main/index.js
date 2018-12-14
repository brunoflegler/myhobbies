import React, { Component, Fragment } from 'react';

import Header from '../../components/header';
import Bar from '../../components/bar';
import TaskBar from '../../components/taskbar';
import ListEvents from '../../components/event';

class Main extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <Bar />
        <TaskBar />
        <ListEvents />
      </Fragment>
    );
  }
}

export default Main;
