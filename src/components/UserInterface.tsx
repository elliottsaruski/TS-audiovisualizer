import SettingsScreen from "./SettingsScreen";
import Visualizer from "./Visualizer";
import WavesurferComponent from "./WavesurferComponent";
import { useState } from "react";

interface SettingsScreen {
  visualControlsOpen: boolean;
  setVisualControlsOpen: (value: boolean) => void;
}

function UserInterface() {
  const [visualControlsOpen, setVisualControlsOpen] = useState(false);
  const [visualPreset, setVisualPreset] = useState("DEFAULT");

  return (
    <div id="User-interface">
      <Visualizer visualPreset={visualPreset} />
      <WavesurferComponent />
      <SettingsScreen
        visualControlsOpen={visualControlsOpen}
        setVisualControlsOpen={setVisualControlsOpen}
        visualPreset={visualPreset}
        setVisualPreset={setVisualPreset}
      />
    </div>
  );
}

export default UserInterface;
