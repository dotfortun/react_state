//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";
import Form from "./component/formSubmission.jsx";
import TrafficLight from "./component/trafficlight.jsx";
import { Carousel } from "./component/carousel.jsx";
import Modal from "./component/modal.jsx";
import Parent from "./component/parent.jsx";

//render your react application
ReactDOM.render(
  <React.Fragment>
    <Form />
    <Parent>
      <p>This content will show up inside div.parent_div.</p>
    </Parent>
  </React.Fragment>,
  document.querySelector("#app")
);
