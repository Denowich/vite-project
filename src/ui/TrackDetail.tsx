import { useEffect, useState } from 'react';

export const TrackDetail = ({ trackId }) => {
      const [selectedTrack, setSelectedTrack] = useState(null);

      useEffect(() => {
            if (!trackId) {
                  return;
            }
            fetch(
                  'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
                        trackId,
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
                  .then((json) => setSelectedTrack(json.data));
      }, [trackId]);
      return (
            <div>
                  <h1>Track Detail</h1>
                  <h2>Details</h2>
                  {!selectedTrack && !trackId && 'Track is not selected'}
                  {!selectedTrack && trackId && 'Loading track...'}
                  {selectedTrack &&
                        trackId &&
                        selectedTrack.id !== trackId &&
                        'Loading next track...'}
                  {selectedTrack && (
                        <div>
                              {selectedTrack.attributes.title}
                              <h3>lyrics</h3>
                              {selectedTrack.attributes.lyrics ?? 'No lyrics'}
                        </div>
                  )}
            </div>
      );
};
