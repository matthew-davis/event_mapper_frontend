import React, { Component } from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import d3 from 'd3';
import WorldJson from './World.topo.json';

class ChoroplethMapSetup extends Component {
    componentDidMount() {
        let dataset = {};

        // We need to colorize every country based on "numberOfWhatever"
        let onlyValues = this.props.data.map(function (obj) { return obj[1]; });
        let minValue = Math.min.apply(null, onlyValues),
            maxValue = Math.max.apply(null, onlyValues);

        // create color palette function
        let paletteScale = d3.scale.linear()
            .domain([minValue, maxValue])
            .range(["#EFEFFF", "#02386F"]); // blue color

        // fill dataset in appropriate format
        this.props.data.forEach(function (item) { //
            let iso = item[0],
                value = item[1];
            dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
        });

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
                    // don't show tooltip if country don't present in dataset
                    if (!data) { return; }
                    // tooltip content
                    return ['<div class="hoverinfo">',
                        '<strong>', geo.properties.name, '</strong>',
                        '<br>Count: <strong>', data.numberOfThings, '</strong>',
                        '</div>'].join('');
                }
            },
            fills: {
                HIGH: '#afafaf',
                LOW: '#123456',
                MEDIUM: 'blue',
                UNKNOWN: 'rgb(0,0,0)',
                defaultFill: '#eee'
            },
            data: dataset,
            setProjection: function (element) {
                var projection = d3.geo.mercator()
                    .center([0.0, 0.0]) // always in [East Latitude, North Longitude]
                    .scale(150)
                    .translate([element.offsetWidth / 2, element.offsetHeight / 1.5]);

                var path = d3.geo.path().projection(projection);
                return { path: path, projection: projection };
            }
        });
    }
    render() {
        return (
            <div id="choropleth_map" style={{
                height: "100%",
                width: "calc(100% - 40px)",
            }}></div>
        );
    }
}

export default ChoroplethMapSetup;
