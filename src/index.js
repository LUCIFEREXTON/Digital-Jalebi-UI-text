import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reducer from "./Store/reducer"
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./App";


const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
