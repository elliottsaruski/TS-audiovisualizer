import { useRef, useState, ChangeEvent } from "react";
import { useWavesurfer } from "@wavesurfer/react";

const WavesurferComponent = () => {
  const [uploadError, setUploadError] = useState("");
  const uploadRef = useRef<HTMLInputElement>(null);
  const waveSurferRef = useRef<HTMLDivElement>(null);

  const { wavesurfer } = useWavesurfer({
    container: waveSurferRef,
    height: 100, // or any number value
    waveColor: "black",
    progressColor: "red",
    barWidth: 3,
    barGap: 1,
    dragToSeek: true,
    audioRate: 1,
  });

  const onPlayPause = () => {
    if (wavesurfer !== null) {
      wavesurfer.playPause();
    }
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];

    if (file) {
      if (file.type !== "audio/wav") {
        setUploadError("Please upload a .wav file");
      }

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
      <button onClick={() => uploadRef.current?.click()}>Upload</button>
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
      <div ref={waveSurferRef}></div>
      <h2>title</h2>
      <div id="controls-wrapper">
        <button>vol</button>
        <button id="play-button" onClick={onPlayPause}>
          play
        </button>
        <button>speed</button>
      </div>
    </div>
  );
};

export default WavesurferComponent;
