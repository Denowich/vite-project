import { useEffect, useState } from 'react';

export const TrackDetail = (props) => {
      const [selectedTrack, setSelectedTrack] = useState(null);
      const selectedTrackId = props.trackId;

      useEffect(() => {
            if (!selectedTrackId) {
                  return;
            }
            fetch(
                  'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
                        selectedTrackId,
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
      }, [selectedTrackId]);
      return (
            <div>
                  <h1>Track Detail</h1>
                  <h2>Details</h2>
                  {!selectedTrack &&
                        !selectedTrackId &&
                        'Track is not selected'}
                  {!selectedTrack && selectedTrackId && 'Loading track...'}
                  {selectedTrack &&
                        selectedTrackId &&
                        selectedTrack.id !== selectedTrackId &&
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
