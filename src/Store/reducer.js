const initialState = {
  videosData: [],
  popup: false,
  video: {
    title: "",
    description: "",
    thumbnailUrl: "",
    tags: [],
    videolink: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEO_DATA": {
      if (action.videosData) {
        return {
          ...state,
          videosData: [...action.videosData]
        };
      }
      return state;
    }
    case "TOGGLE_POPUP": {
      if (!state.popup) {
        if (action.videoindex !== null) {
          return {
            ...state,
            video: state.videosData[action.videoindex],
            popup: true
          };
        }
      } else if (state.popup) {
        return {
          ...state,
          popup: false,
          video: {
            title: "",
            description: "",
            thumbnailUrl: "",
            tags: [],
            videolink: ""
          }
        };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
