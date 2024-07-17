import DefaultVisualComponent from "./visual-presets/DefaultVisualComponent";
import ThreeDVisualComponent from "./visual-presets/ThreeDVisualComponent";
import WebCamComponent from "./visual-presets/WebCamComponent";

function Visualizer({ visualPreset }) {
  console.log(visualPreset);
  if (visualPreset === "CAM") {
    return (
      <div id="visualizer">
        <WebCamComponent />
      </div>
    );
  } else if (visualPreset === "DEFAULT") {
    return (
      <div id="visualizer">
        <DefaultVisualComponent />
      </div>
    );
  } else if (visualPreset === "THREE_D") {
    return (
      <div id="visualizer">
        <ThreeDVisualComponent />
      </div>
    );
  }
}

export default Visualizer;
