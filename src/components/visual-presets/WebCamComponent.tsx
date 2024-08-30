import { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  // width: 750,
  // height: 750,
  facingMode: "user",
};

function WebCamComponent() {
  const webcam = useRef<Webcam>(null);

  return (
    <Webcam
      id="webcam"
      audio={false}
      ref={webcam}
      videoConstraints={videoConstraints}
    />
  );
}

export default WebCamComponent;
