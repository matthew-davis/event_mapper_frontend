import React, { Component } from 'react';
import EventsService from './EventsService';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import d3 from 'd3';
import WorldJson from './World.topo.json';

const eventsService = new EventsService();

class ChoroplethMap extends Component {

  state = {
    update: true
  };

  componentDidMount() {
    var self = this;
    self.timer = setInterval(function() {
      self.getMapData();
      self.setState(prevState => ({ update: !prevState.update}));
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  };

  getMapData() {
    eventsService.getEventMap('date').then(function (result) {
      let dataset = {};
      let onlyValues = result.blue.map(function (obj) { return obj[1]; });
      let minValue = Math.min.apply(null, onlyValues), maxValue = Math.max.apply(null, onlyValues);
      let paletteScale = d3.scale.linear().domain([minValue, maxValue]).range(["#7fcdbb", "#2c7fb8"]);
      result.blue.forEach(function (item) {
          let iso = item[0], value = item[1];
          dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
      });
      result.orange.forEach(function (item) {
        if (item[0] in dataset) {
          dataset[item[0]]['fillColor'] = '#f57c00';
        };
      });
      document.getElementById('choropleth_map').innerHTML = '';
      new Datamap({
        element: document.getElementById('choropleth_map'),
        scope: 'world',
        geographyConfig: {
          popupOnHover: false,
          highlightOnHover: true,
          highlightFillColor: '#f57c00',
          borderColor: '#444',
          highlightBorderWidth: 1,
          borderWidth: 0.5,
          dataJson: WorldJson,
          popupTemplate: function (geo, data) {
            if (!data) { return; }
            return ['<div class="hoverinfo">', '<strong>', geo.properties.name, '</strong>', '<br>Count: <strong>', data.numberOfThings, '</strong>', '</div>'].join('');
          },
        },
        fills: {HIGH: '#afafaf', LOW: '#123456', MEDIUM: 'blue', UNKNOWN: 'rgb(0,0,0)', defaultFill: '#eee'},
        data: dataset,
        setProjection: function (element) {
          var projection = d3.geo.mercator().center([0.0, 0.0]).scale(150).translate([element.offsetWidth / 2, element.offsetHeight / 1.5]);
          var path = d3.geo.path().projection(projection);
          return { path: path, projection: projection };
        }
      })
    });
  };

  render() {
    return (
      <div className="rendered-datamap" style={{height:"660px", width: "100%"}}>
        <div id="choropleth_map" style={{height: "100%", width: "calc(100% - 40px)"}}></div>
      </div>
    );
  };
};
export default ChoroplethMap;
