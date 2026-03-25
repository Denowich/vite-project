import { useEffect, useState } from 'react';

export const TrackDetail = () => {
      const [selectedTrack, setSelectedTrack] = useState(null);
      const [selectedTrackId, setSelectedTrackId] = useState(null);

      useEffect(() => {
            if (!selectedTrackId) {
                  return;
            }
            fetch(
                  'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
                        selectedTrackId,
                  {
                        headers: {
                              'api-key': '',
                        },
                  },
            )
                  .then((res) => res.json())
                  .then((json) => setSelectedTrack(json.data));
      }, [selectedTrackId]);
      return (
            <div>
                  <h1>Track Detail</h1>
                  <h2>Details</h2>
                  {!selectedTrack && 'track is not selected'}
                  {selectedTrack && 'loading track...'}
                  <h3>lyrics</h3>
            </div>
      );
};
