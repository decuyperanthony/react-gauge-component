import React from "react";
import PropTypes from "prop-types";

const Slider = ({ min, max, value, setValue }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        onChange={(_event) => setValue(Number(_event.target.value))}
        type="range"
        id="sliderGauge"
        name="sliderGauge"
        value={value}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
