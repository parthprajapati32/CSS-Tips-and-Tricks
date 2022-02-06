import React from "react";

import "./App.scss";
import Image from "./assets/images/image.jpg";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={Image} alt="Image" />
        </div>
        <div className="card-body">
          <div className="card-body-header">
            <div className="card-body-left">
              <p className="card-body-title">Title</p>
            </div>
            <div className="card-body-right">
              <p className="card-body-follows">10k follows</p>
            </div>
          </div>
          <p className="card-body-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
