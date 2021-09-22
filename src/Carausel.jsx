import { useCallback, useEffect, useRef, useState } from "react";

const Carausel = ({ imgurls, auto, time }) => {
  const carousel = useRef(null);
  const imglen = useRef(0);
  const imgwidth = useRef(0);
  const [curimg, setcurimg] = useState(0);
  const slide = (curimg) => {
    // console.log(curimg, imgwidth.current);
    carousel.current.style.transform = `translateX(${
      curimg * -1 * imgwidth.current
    }px)`;
  };
  const rclick = useCallback(
    (e) => {
      if (curimg === 2) setcurimg(0);
      else setcurimg(curimg + 1);
    },
    [curimg]
  );

  const lclick = useCallback(
    (e) => {
      if (curimg === 0) setcurimg(2);
      else setcurimg(curimg - 1);
    },
    [curimg]
  );
  useEffect(
    () => {
      imglen.current = parseInt(carousel.current.children.length, 10);
      setimgwidth();
      // if(auto){
      //   setInterval(rclick, parseInt(time,10));
      // }
    },
    [
      /*auto, rclick, time*/
    ]
  );

  window.onresize = () => {
    setimgwidth();
  };

  const setimgwidth = () => {
    imgwidth.current = parseInt(carousel.current.children[0].offsetWidth, 10);
  };
  useEffect(() => {
    slide(curimg);
  }, [curimg]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel" ref={carousel}>
        {imgurls.map((url, i) => (
          <img key={i} src={url} alt={"sldimg" + i} onLoad={setimgwidth} />
        ))}
      </div>
      <div className="l btn" onClick={lclick}>
        <div>/</div>
        <div>\</div>
      </div>
      <div className="r btn" onClick={rclick}>
        <div>\</div>
        <div>/</div>
      </div>
      <div className="imgtextcontent">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto
          aperiam eum dolor commodi cumque?
        </div>
        <div className="button">SUBMIT</div>
      </div>
    </div>
  );
};

export default Carausel;
