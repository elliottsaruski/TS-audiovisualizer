import { IoSettingsSharp } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";

function SettingsScreen({
  visualControlsOpen,
  setVisualControlsOpen,
  visualPreset,
  setVisualPreset,
}) {
  return (
    <div id="settings-and-info-buttons-wrapper">
      <button
        onClick={() => {
          setVisualControlsOpen(!visualControlsOpen);
        }}>
        <IoSettingsSharp />
      </button>
      <div
        id="visual-controls"
        className={
          visualControlsOpen ? "visual-controls-open" : "visual-controls-closed"
        }>
        <select
          name="main"
          id="media-switch"
          value={visualPreset}
          onChange={(e) => {
            setVisualPreset(e.target.value);
            // console.log(e.target.value);
          }}>
          <option value="DEFAULT">default</option>
          <option value="CAM">cam</option>
          <option value="THREE_D">visualizer</option>
        </select>
      </div>
      <button>
        <IoMdInformationCircle />
      </button>
    </div>
  );
}

export default SettingsScreen;

{
  /* <select name="cam-presets" id="preset-switch">
  <option value="default">default</option>
  <option value="reactive">reactive</option>
  <option value="tilt">tiltshift</option>
</select>
<select name="visualizer-presets" id="preset-switch">
  <option value="points">points</option>
  <option value="spectrum">spectrum</option>
  <option value="abstract">abstract</option>
</select> */
}
