import React from "react";
import { Route } from 'react-router-dom';

import ChoroplethMap from './ChoroplethMap';
import EventsList from './EventsList';

// Desktop Home Page Wrapper Containing the Choropleth Map and the List of Events
const DesktopHomeWrapper = () => {
  return (
    <div className="desktophome">
      <Route path="/" exact component={ChoroplethMap} />
      <Route path="/" exact component={EventsList} />
    </div>
  );
};
export default DesktopHomeWrapper;
