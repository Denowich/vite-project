import '../App.css';
import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';

export const MainPage = () => {
      return (
            <div>
                  <div style={{ display: 'flex', gap: '40px' }}>
                        <TracksList />
                        <TrackDetail />
                  </div>
            </div>
      );
};
