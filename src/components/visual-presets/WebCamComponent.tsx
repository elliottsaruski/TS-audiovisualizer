import { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

function WebCamComponent() {
  const webcam = useRef<Webcam>(null);

  return (
    <div id="webcam-wrapper">
      <Webcam audio={false} ref={webcam} videoConstraints={videoConstraints} />
    </div>
  );
}

export default WebCamComponent;
