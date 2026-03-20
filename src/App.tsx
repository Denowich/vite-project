import './index.css';
import './App.css';
import {useState} from "react";

function App() {
  const [selectTrackId, setSelectionTrackId] = useState(null);
  // const [tracks, setTracks] = useState(null);

  const tracks = [
    // {id: 1, title: 'track-1', url: 'http://'},
    // {id: 2, title: 'track-2', url: 'http://'
  // }
  ]

  if(tracks === null){
    return (
      <div>
        <h1>MusicFun</h1>
        <span>No tracks...</span>
      </div>
    );
  }
  if(tracks.length === 0){
    return (
      <div>
        <h1>MusicFun</h1>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h1>MusicFun!</h1>
      <button onClick={()=>{
        setSelectionTrackId(null);
      }}>Reset selection</button>

      <div style={{display: 'flex', gap: '40px'}}>
      <ul>
        <ol>
          <div>

            {
              tracks.map((track) => {
                return (
                  <li key={track.id} style={{border: track.id === selectTrackId ? '2px solid tomato': '2px solid white'}}>
                    <div onClick={()=>{setSelectionTrackId(track.id)}}>
                      {track.title}
                    </div>
                    <div>
                      <audio controls={track.url}>
                      </audio>
                    </div>
                  </li>
                )
              })
            }
          </div>
        </ol>
      </ul>
        <h2>Details</h2>
      </div>
    </div>
  )
}

export default App;
