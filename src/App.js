import "./styles.scss";
import Navbar from "./Navbar";
import Content from "./Content";
import Popup from "./Popup";
import { connect } from "react-redux";
const App = ({ showpopup }) => {
  return (
    <div className="page">
      <Navbar />
      <Content />
      {showpopup && <Popup />}
    </div>
  );
};
const mapStatetoprops = (state) => {
  return {
    showpopup: state.popup
  };
};
export default connect(mapStatetoprops)(App);
