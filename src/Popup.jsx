import { connect } from "react-redux";
const Popup = ({ video, close }) => {
  const donotclose = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="popup" onClick={close}>
      <div className="content" onClick={donotclose}>
        <div className="cut" onClick={close}>
          X
        </div>
        <iframe
          src={video.videolink}
          width="100%"
          height="400"
          title="video"
        ></iframe>
        <div className="details">
          <h2>{video.title}</h2>
          <div className="vtags">
            {video.tags.length > 0 &&
              video.tags.map((tag, i) => (
                <div key={i} className="vtag">
                  {tag}
                </div>
              ))}
          </div>
          <h3>{video.description}</h3>
        </div>
      </div>
    </div>
  );
};

const mapStatetoprops = (state) => {
  return {
    video: state.video
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    close: (e) => dispatch({ type: "TOGGLE_POPUP" })
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(Popup);
