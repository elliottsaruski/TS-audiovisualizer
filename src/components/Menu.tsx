import FileUpload from "./FileUpload";


function TrackScrub() {
  return (
    <div id="track-scrub">
      <div className="scrub-wrapper">scrub</div>
      <div className="scrub-buttons">
        <button>vol</button>
        <button>prev</button>
        <button>play</button>
        <button>next</button>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div id="menu">
      <h1>es-ts-av</h1>
      <FileUpload />
      <TrackScrub />
    </div>
  );
}

export default Menu;
