import React from "react";
import { Route, Switch } from 'react-router-dom';

import DesktopHomeWrapper from './DesktopHomeWrapper';
import EventCreateUpdate from './EventCreateUpdate';
import Error from './Error';

// Dividing the content and routes between dektop and mobile platforms
const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={DesktopHomeWrapper} />
        <Route path="/event/" exact component={EventCreateUpdate} />
        <Route path="/event/:pk" component={EventCreateUpdate} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};
export default Content;
