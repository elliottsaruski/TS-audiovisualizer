import { ChangeEvent, useRef, useState } from "react";

function FileUpload() {
  const [song, setSong] = useState<File | null>(null);
  const InputRef = useRef<HTMLInputElement>(null);

  function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const audioContext = new AudioContext();

    const file = InputRef.current?.files?.[0];
    const reader = new FileReader();

    if (file) {
      setSong(file);
      reader.readAsArrayBuffer(file);
    }

    reader.onloadend = () => {
      const myArrayBuffer = reader.result;

      console.log(myArrayBuffer);
      audioContext.decodeAudioData(
        myArrayBuffer,
        (audioBuffer) => {
          // Do something with audioBuffer
          console.log(audioBuffer);
          
        }
      );
    };

    reader.onerror = (evt: ProgressEvent<FileReader>) => {
      console.log("error loading file" + evt.target?.result);
      reader.abort();
    };
  }

  return (
    <>
      <input
        aria-label="Upload Audio"
        type={"file"}
        id="file"
        name="file"
        accept=".wav"
        multiple={false}
        ref={InputRef}
        onChange={(e) => handleFileUpload(e)}
      />
      <div id="file-label">open file</div>
      <section className="waveform-wrapper">
        {song && <audio controls src={URL.createObjectURL(song)}></audio>}
      </section>
    </>
  );
}

export default FileUpload;
