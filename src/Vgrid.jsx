import { connect } from "react-redux";
const Vgrid = ({ videos, title, togglepopup }) => {
  return (
    <>
      <div className="title">{title}</div>
      <div className="grid">
        {videos.length > 0 &&
          videos.map((video, i) => (
            <div className="v" key={i}>
              <div className="icon">O</div>
              <img
                src={video.thumbnailUrl}
                onClick={() => {
                  togglepopup(i);
                }}
                alt={"thumb" + i}
              />
              <div className="desc">
                <div
                  className="head"
                  onClick={() => {
                    togglepopup(i);
                  }}
                >
                  {video.title}
                </div>
                <div className="para">{video.description}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    togglepopup: (videoindex) => dispatch({ type: "TOGGLE_POPUP", videoindex })
  };
};

export default connect(null, mapDispatchtoprops)(Vgrid);
