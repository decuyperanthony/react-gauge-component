import React from "react";

import Gauge from "./Gauge";

const App = () => {
  return (
    <div className="App">
      <Gauge
        value={50}
        min={0}
        max={100}
        label="Gauge"
        colorStartScale="#dbdbe7"
        colorEndScale="#4834d4"
      />
    </div>
  );
};

export default App;
