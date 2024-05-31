interface Trackprops {
  songName: string;
  src: URL;
  album: string;
  date: Date;
  length: string;
  buffer: string;
}

const SongListData: Trackprops[] = [
  {
    songName: "ht2",
    src: new URL("http://example.com/ht2"),
    album: "heds tapes",
    date: new Date("2022-05-18T14:15:09"),
    length: "3:45",
    buffer: "buffer data",
  },
  {
    songName: "ht3",
    src: new URL("http://example.com/ht3"),
    album: "heds tapes",
    date: new Date("2022-05-10T23:29:24"),
    length: "4:05",
    buffer: "buffer data",
  },
  {
    songName: "ht4",
    src: new URL("http://example.com/ht4"),
    album: "heds tapes",
    date: new Date("2021-12-29T05:56:31"),
    length: "3:25",
    buffer: "buffer data",
  },
  {
    songName: "ht5",
    src: new URL("http://example.com/ht5"),
    album: "heds tapes",
    date: new Date("2022-11-02T11:59:17"),
    length: "3:55",
    buffer: "buffer data",
  },
  {
    songName: "ht6",
    src: new URL("http://example.com/ht6"),
    album: "heds tapes",
    date: new Date("2022-07-27T11:43:56"),
    length: "4:15",
    buffer: "buffer data",
  },
  {
    songName: "ht7",
    src: new URL("http://example.com/ht7"),
    album: "heds tapes",
    date: new Date("2020-12-17T14:36:42"),
    length: "3:35",
    buffer: "buffer data",
  },
  {
    songName: "ht8",
    src: new URL("http://example.com/ht8"),
    album: "heds tapes",
    date: new Date("2020-10-08T12:44:12"),
    length: "4:25",
    buffer: "buffer data",
  },
  {
    songName: "ht9",
    src: new URL("http://example.com/ht9"),
    album: "heds tapes",
    date: new Date("2020-06-08T13:25:28"),
    length: "3:45",
    buffer: "buffer data",
  },
  {
    songName: "ht10",
    src: new URL("http://example.com/ht10"),
    album: "heds tapes",
    date: new Date("2020-02-17T01:31:37"),
    length: "4:00",
    buffer: "buffer data",
  },
  {
    songName: "ht11",
    src: new URL("http://example.com/ht11"),
    album: "heds tapes",
    date: new Date("2021-11-11T19:27:45"),
    length: "3:50",
    buffer: "buffer data",
  },
];

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
      <h1>ENVI{"'"}S MUSIC</h1>
      <div className="music-table-wrapper">
        <table>
          <thead>
            <tr>
              {/* <button></button> */}
              <th>#</th>

              <th>Song Name</th>
              {/* <th>Source</th> */}
              <th>Album</th>
              <th>Date</th>
              <th>Length</th>
              {/* <th>Buffer</th> */}
            </tr>
          </thead>
          <tbody>
            {SongListData.map(
              ({ songName, album, date, length }: Trackprops) => (
                //src, buffer
                <tr key={songName}>
                  <td>o</td>
                  <td>{songName}</td>
                  {/* <td>{src.toString()}</td> */}
                  <td>{album}</td>
                  <td>{date.toDateString()}</td>
                  <td>{length}</td>
                  {/* <td>{buffer}</td> */}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <TrackScrub />
    </div>
  );
}

export default Menu;
