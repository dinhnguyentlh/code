import { useState } from "react";
import { Range } from "react-range";

const RangeSlider = () => {
  const [values, setValues] = useState([10, 80]);
  const videoDuration = 200; // Video duration in seconds (3 minutes 20 seconds)

  // Convert seconds to a "mm:ss" format
  const secondsToTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ margin: "50px" }}>
      <Range
        step={1}
        min={0}
        max={videoDuration}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "400px",
              backgroundColor: "#56c2e6",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#56e2c6",
              position: "relative",
            }}
          >
            <div className="tooltip">{secondsToTime(values[index])}</div>
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
