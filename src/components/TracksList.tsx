import { useState } from 'react';

export const TracksList = () => {
      const [selectedTrackId, setSelectedTrackId] = useState(null);
      // const [tracks, setTracks] = useState(null);

      const tracks = [
            { id: 1, title: 'track-1', url: 'http://' },
            { id: 2, title: 'track-2', url: 'http://' },
      ];

      if (tracks === null) {
            return (
                  <div>
                        <h1>Music Fun</h1>
                        <span>No tracks...</span>
                  </div>
            );
      }
      if (tracks.length === 0) {
            return (
                  <div>
                        <h1>MusicFun</h1>
                        <span>Loading tracks...</span>
                  </div>
            );
      }

      return (
            <div>
                  <div>
                        <h1>MusicFun</h1>
                        <button
                              onClick={() => {
                                    setSelectedTrackId(null);
                              }}
                        >
                              Reset selection
                        </button>

                        <div style={{ display: 'flex', gap: '40px' }}>
                              <ul>
                                    <ol>
                                          <div>
                                                {tracks.map((track) => {
                                                      return (
                                                            <li
                                                                  key={track.id}
                                                                  style={{
                                                                        border:
                                                                              track.id ===
                                                                              selectedTrackId
                                                                                    ? '2px solid tomato'
                                                                                    : '2px solid white',
                                                                        textAlign:
                                                                              'left',
                                                                        marginBottom:
                                                                              '20px',
                                                                        padding: '10px',
                                                                  }}
                                                            >
                                                                  <div
                                                                        onClick={() => {
                                                                              setSelectedTrackId(
                                                                                    track.id,
                                                                              );
                                                                        }}
                                                                  >
                                                                        {
                                                                              track.title
                                                                        }
                                                                  </div>
                                                                  <div>
                                                                        <audio
                                                                              controls
                                                                              src={
                                                                                    track.url
                                                                              }
                                                                        ></audio>
                                                                  </div>
                                                            </li>
                                                      );
                                                })}
                                          </div>
                                    </ol>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};
