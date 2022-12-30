import React from "react";
import { useState, useMemo, useEffect } from "react";
import * as d3 from "d3";

const Axes = () => {
    useEffect(() => {
        let scale = d3.scaleLinear().domain([0, 100]).range([0, 400]);
        let axisLeft = d3.axisLeft(scale);
        let axisRight = d3.axisRight(scale);
        let axisTop = d3.axisTop(scale);
        let axisBottom = d3.axisBottom(scale);

d3.select('#left').call(axisLeft);
d3.select('#right').call(axisRight);
d3.select('#top').call(axisTop);
d3.select('#bottom').call(axisBottom);
    }, []);
  return (
    <svg width="500" height="500">
        <g id="left" transform="translate(30, 40)"></g>
        <g id="right" transform="translate(450, 40)"></g>
        <g id="top" transform="translate(40, 30)"></g>
        <g id="bottom" transform="translate(40, 450)"></g>
    </svg>
  );
};
export default Axes;
