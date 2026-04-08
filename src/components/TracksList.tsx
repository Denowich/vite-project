import { useEffect, useState } from 'react';
import { TrackItem } from './TrackItem';

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
                              'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b',
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

      const onHandleResetClick = () => {
            props.onTrackSelect(null);
      };

      return (
            <div>
                  <div>
                        <h1>MusicFun</h1>
                        <button onClick={onHandleResetClick}>
                              Reset selection
                        </button>

                        <div style={{ display: 'flex', gap: '40px' }}>
                              <ul>
                                    <ol>
                                          <div>
                                                {tracks.map((track) => {
                                                      const handleClick =
                                                            () => {
                                                                  props.onTrackSelect?.(
                                                                        track.id,
                                                                  );
                                                            };
                                                      return (
                                                            <TrackItem
                                                                  key={track.id}
                                                                  track={track}
                                                                  selectedTrackId={
                                                                        props.selectedTrackId
                                                                  }
                                                                  handleClick={
                                                                        handleClick
                                                                  }
                                                            />
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
