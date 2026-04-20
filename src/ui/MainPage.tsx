import { useState } from 'react';
import '../App.css';
import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';

export const MainPage = () => {
      const [trackId, setTrackId] = useState(null);

      const handleTrackSelect = (id) => {
            setTrackId(id);
      };

      return (
            <div>
                  <div style={{ display: 'flex', gap: '40px' }}>
                        <TracksList
                              onTrackSelect={handleTrackSelect}
                              selectedTrackId={trackId}
                        />
                        <TrackDetail trackId={trackId} />
                  </div>
            </div>
      );
};
