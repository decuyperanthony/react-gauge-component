import React from "react";

import Gauge from "./Gauge";
import Slider from "./Slider";

const App = () => {
  const purple = "#4834d4";
  const [value, setValue] = React.useState(50);
  return (
    <div className="App">
      <Gauge
        value={value}
        // value={50}
        min={0}
        max={100}
        label="Gauge"
        colorStartScale="#dbdbe7"
        colorEndScale={purple}
      />
      <Slider value={value} min={0} max={100} setValue={setValue} />
    </div>
  );
};

export default App;
