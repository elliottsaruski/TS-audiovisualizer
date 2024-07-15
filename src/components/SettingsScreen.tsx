import { IoSettingsSharp } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
// import { useState } from "react";
// import { FaCaretDown } from "react-icons/fa";

function SettingsScreen() {
  //   const [visualControlsOpen, setVisualControlsOpen] = useState(true);

  return (
    <div>
      <button>
        <IoSettingsSharp />
      </button>
      {/* PUT THESE OPTIONS ON VISUALIZER SCREEN WHEN CLICKED */}
      {/* <div>
        <button
          onClick={() => {
            setVisualControlsOpen(!visualControlsOpen);
          }}>
          <FaCaretDown />
        </button>
        <div
          id="visual-controls"
          className={
            visualControlsOpen
              ? "visual-controls-open"
              : "visual-controls-closed"
          }>
          <select name="main" id="media-switch">
            <option value="logo">default</option>
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
      </div> */}
      <button>
        <IoMdInformationCircle />
      </button>
    </div>
  );
}

export default SettingsScreen;
