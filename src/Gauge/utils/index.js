import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";

export const backgroundArc = arc()
  .innerRadius(0.65)
  .outerRadius(1)
  .startAngle(-Math.PI / 2)
  .endAngle(Math.PI / 2)
  .cornerRadius(1)();

export const angleScale = scaleLinear()
  .domain([0, 1])
  .range([-Math.PI / 2, Math.PI / 2])
  .clamp(true);

export const getFilledArc = (angle) => {
  return arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)();
};
export const getColorScale = (startColor, endColor) => {
  return scaleLinear().domain([0, 1]).range([startColor, endColor]);
};
export const getPercentScale = (min, max) => {
  return scaleLinear().domain([min, max]).range([0, 1]);
};

export const getCoordsOnArc = (angle, offset = 10) => [
  Math.cos(angle - Math.PI / 2) * offset,
  Math.sin(angle - Math.PI / 2) * offset,
];
