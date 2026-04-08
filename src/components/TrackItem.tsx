export const TrackItem = (props) => {
      return (
            <div>
                  <li
                        key={props.track.id}
                        style={{
                              border:
                                    props.track.id === props.selectedTrackId
                                          ? '2px solid tomato'
                                          : '2px solid white',
                              textAlign: 'left',
                              marginBottom: '20px',
                              padding: '10px',
                        }}
                  >
                        <div onClick={props.handleClick}>
                              {props.track.attributes.title}
                        </div>
                        <div>
                              <audio
                                    controls
                                    src={
                                          props.track.attributes.attachments[0]
                                                .url
                                    }
                              ></audio>
                        </div>
                  </li>{' '}
            </div>
      );
};
