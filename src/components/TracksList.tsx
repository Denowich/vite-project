import { useEffect, useState } from 'react';

export const TracksList = (props) => {
      const [tracks, setTracks] = useState(null);

      useEffect(() => {
            fetch(
                  'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
                  {
                        // 'DELETE API !!!'
                        // 'DELETE API !!!'
                        // 'DELETE API !!!'
                        headers: {
                              'api-key': '',
                        },
                  },
            )
                  .then((res) => res.json())
                  .then((json) => setTracks(json.data));
      }, []);

      if (tracks === null) {
            return (
                  <div>
                        <h1>MusicFun</h1>
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
                                    props.onTrackSelect(null);
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
                                                                              props.selectedTrackId
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
                                                                              props.onTrackSelect?.(
                                                                                    track.id,
                                                                              );
                                                                        }}
                                                                  >
                                                                        {
                                                                              track
                                                                                    .attributes
                                                                                    .title
                                                                        }
                                                                  </div>
                                                                  <div>
                                                                        <audio
                                                                              controls
                                                                              src={
                                                                                    track
                                                                                          .attributes
                                                                                          .attachments[0]
                                                                                          .url
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
