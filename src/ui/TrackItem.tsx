export const TrackItem = ({ onSelect, track, isSelected }) => {
      const onHandleClick = () => {
            onSelect?.(track.id);
      };

      return (
            <div>
                  <li
                        key={track.id}
                        style={{
                              border: isSelected
                                    ? '2px solid tomato'
                                    : '2px solid white',
                              textAlign: 'left',
                              marginBottom: '20px',
                              padding: '10px',
                        }}
                  >
                        <div onClick={onHandleClick}>
                              {track.attributes.title}
                        </div>
                        <div>
                              <audio
                                    controls
                                    src={track.attributes.attachments[0].url}
                              ></audio>
                        </div>
                  </li>{' '}
            </div>
      );
};
