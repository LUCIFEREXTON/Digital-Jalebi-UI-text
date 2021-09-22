import Carausel from "./Carausel";
import Videos from "./Videos";

const imgurls = [
  "https://source.unsplash.com/featured/1920x900/?doctor,healthcare",
  "https://source.unsplash.com/featured/1920x900/?doctor",
  "https://source.unsplash.com/featured/1920x900/?healthcare"
];

const Content = () => {
  return (
    <>
      <Carausel imgurls={imgurls} />
      <div className="vsec">
        <Videos />
      </div>
    </>
  );
};

export default Content;
