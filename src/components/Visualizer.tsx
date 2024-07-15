import { useState } from "react";
import WebCamComponent from "./visual-presets/WebCamComponent";

function Visualizer() {
  const [visualControlsOpen, setVisualControlsOpen] = useState(true);
  return (
    <div id="visualizer-wrapper">
      <div id="visualizer">
        <WebCamComponent />
      </div>
      <button
        onClick={() => {
          setVisualControlsOpen(!visualControlsOpen);
        }}>
        min
      </button>
      <div
        id="visual-controls"
        className={
          visualControlsOpen ? "visual-controls-open" : "visual-controls-closed"
        }>
        <select name="main" id="media-switch">
          <option value="logo">logo</option>
          <option value="cam">cam</option>
          <option value="visualizer">visualizer</option>
        </select>
        <select name="cam-presets" id="preset-switch">
          <option value="default">default</option>
          <option value="reactive">reactive</option>
          <option value="tilt">tiltshift</option>
        </select>
        <select name="visualizer-presets" id="preset-switch">
          <option value="points">points</option>
          <option value="spectrum">spectrum</option>
          <option value="abstract">abstract</option>
        </select>
      </div>
    </div>
  );
}

export default Visualizer;
