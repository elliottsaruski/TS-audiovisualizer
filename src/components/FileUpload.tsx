import { useRef, useState, ChangeEvent } from "react";
import { useWavesurfer } from "@wavesurfer/react";

const UploadButton = () => {
  const [uploadError, setUploadError] = useState("");
  const uploadRef = useRef<HTMLInputElement>(null);
  const waveSurferRef = useRef<HTMLDivElement>(null);

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: waveSurferRef,
    height: 100, // or any number value
    waveColor: "black",
    progressColor: "white",
    barWidth: 3,
    barGap: 1,
    dragToSeek: true,
    audioRate: 1,
    mediaControls: true,
  });

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
    <>
      <button onClick={() => uploadRef.current?.click()}>Upload</button>

      <input
        type="file"
        accept="audio/wav"
        ref={uploadRef}
        onChange={handleUpload}
        style={{ display: "none" }}
      />

      {uploadError ? <p>{uploadError}</p> : null}
      <div ref={waveSurferRef}></div>
    </>
  );
};

export default UploadButton;
