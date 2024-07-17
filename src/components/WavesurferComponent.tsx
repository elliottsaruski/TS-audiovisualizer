import { useRef, useState, ChangeEvent } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { AiFillSound } from "react-icons/ai";
import { PiSpeedometerFill } from "react-icons/pi";
import { TiUpload } from "react-icons/ti";
import { BsPlayFill } from "react-icons/bs";

const WavesurferComponent = () => {
  const [uploadError, setUploadError] = useState("");
  const uploadRef = useRef<HTMLInputElement>(null);
  const waveSurferRef = useRef<HTMLDivElement>(null);
  const [trackTitle, setTrackTitle] = useState("");


  const [volumeSliderOpen, setVolumeSliderOpen] = useState(false);
  const [volume, setVolume] = useState(1);

  const [rateSelectOpen, setRateSelectOpen] = useState(false);
  const [rate, setRate] = useState(1);

  const { wavesurfer } = useWavesurfer({
    container: waveSurferRef,
    height: 100,
    waveColor: "black",
    progressColor: "red",
    barWidth: 3,
    barGap: 1,
    dragToSeek: true,
    audioRate: 1,
  });

  //HANDLE PLAY AND PAUSE
  const onPlayPause = () => {
    if (wavesurfer !== null) {
      wavesurfer.playPause();
    }
  };
  //HANDLE PLAY AND PAUSE
  const onVolumeClicked = () => {
    if (wavesurfer !== null) {
      setVolumeSliderOpen(!volumeSliderOpen);
    }
  };

  const handleSpeedChange = (speed: number) => {
    wavesurfer?.setPlaybackRate(speed, false);
  };

  //HANDLE UPLOAD
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];

    if (file) {
      if (file.type !== "audio/wav") {
        setUploadError("Please upload a .wav file");
      }

      // SET FILE NAME STATE
      setTrackTitle(file.name);

      const fileReader = new FileReader();

      fileReader.onload = (event: ProgressEvent<FileReader>) => {
        const contents = event?.target?.result;

        if (wavesurfer && contents) {
          const blob = new window.Blob(
            [new Uint8Array(contents as ArrayBuffer)],
            {
              type: "audio/wav",
            }
          );
          wavesurfer.loadBlob(blob);
        }
      };

      e.target.value = "";
      fileReader.readAsArrayBuffer(file);
    } else {
      setUploadError("File could not be uploaded. Please try again.");
    }
  };

  return (
    <div id="wavesurfer_WRAPPER">
      {/* ---------- UPLOAD BUTTON ----------- */}
      <button onClick={() => uploadRef.current?.click()}>
        <TiUpload />
      </button>
      {/*------------------INPUT ELEMENT FOR FILE-------- */}
      <input
        type="file"
        accept="audio/wav"
        ref={uploadRef}
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      {/* --------------UPLOAD ERROR--------------- */}
      {uploadError ? <p>{uploadError}</p> : null}
      {/* ------------------WAVESURFER REF---------- */}
      {/* <div id="spectrogram" ref={spectrogramRef}></div> */}

      <div ref={waveSurferRef}></div>
      <h2>{trackTitle}</h2>
      <div id="controls-wrapper">
        {/* <div> */}
        <input
          className={
            volumeSliderOpen ? "volume-slider-open" : "volume-slider-closed"
          }
          type="range"
          min={0.005}
          max={1}
          defaultValue={volume}
          step={0.05}
          onChange={(e) => {
            if (wavesurfer !== undefined) {
              setVolume(parseFloat(e.target.value));
              wavesurfer?.setVolume(parseFloat(e.target.value));
            }
          }}
        />
        <button onClick={onVolumeClicked} id="sound-button">
          <AiFillSound />
          {/* {volume} */}
        </button>
        {/* </div> */}
        <button id="play-button" onClick={onPlayPause}>
          <BsPlayFill />
        </button>
        <button
          onClick={() => {
            setRateSelectOpen(!rateSelectOpen);
          }}>
          <PiSpeedometerFill />
        </button>
        <select
          value={rate}
          name="speed"
          onChange={(e) => {
            handleSpeedChange(parseFloat(e.target.value));
            setRate(parseFloat(e.target.value));
          }}
          id="speed"
          className={
            rateSelectOpen ? "rate-select-open" : "rate-select-closed"
          }>
          <option value={2}>2x</option>
          <option value={1.5}>1.5x</option>
          <option value={1}>1x</option>
          <option value={0.75}>.75x</option>
          <option value={0.5}>.5x</option>
          <option value={0.25}>.25x</option>
        </select>
      </div>
    </div>
  );
};

export default WavesurferComponent;
