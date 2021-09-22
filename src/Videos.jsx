import { useEffect, useRef, useState } from "react";
import Vgrid from "./Vgrid";
import { connect } from "react-redux";
import data from "./data.json";
import "./styles.scss";
const Videos = ({ videosData, setdata }) => {
  const [tags, settags] = useState([]);
  const [tagVideos, settagvideo] = useState([]);
  const searchedtag = useRef("");
  //set videos
  useEffect(() => {
    setdata([...data.videosData]);
  }, [setdata]);
  //grab all tags
  useEffect(() => {
    const temp = new Set();
    videosData.forEach((video) => {
      video.tags.forEach((tag) => temp.add(tag));
    });
    settags([...temp]);
  }, [videosData]);

  const filter = (e) => {
    const tag = e.target.innerText.toLowerCase();
    if (tag === "all") {
      settagvideo([]);
      return;
    } else {
      searchedtag.current = tag;
      settagvideo([...videosData.filter((video) => video.tags.includes(tag))]);
    }
  };
  return (
    <div className="video-section">
      <div className="tags-wrapper">
        <div className="tags">
          {tags.length > 0 && <div className="tag">Tags :</div>}
          {tags.length > 0 && (
            <div onClick={filter} className="tag">
              ALL
            </div>
          )}
          {tags.length > 0 &&
            tags.map((tag, i) => (
              <div key={i} onClick={filter} className="tag">
                {tag}
              </div>
            ))}
        </div>
      </div>
      {tagVideos.length > 0 && (
        <Vgrid
          key="0"
          title={`Result for ${searchedtag.current}`}
          videos={tagVideos}
        />
      )}
      <Vgrid key="1" title="ALL Videos" videos={videosData} />
    </div>
  );
};
const mapStatetoprops = (state) => {
  return {
    videosData: state.videosData
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    setdata: (videosData) => dispatch({ type: "SET_VIDEO_DATA", videosData })
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(Videos);
