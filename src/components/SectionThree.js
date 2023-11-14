import React from "react";

// Images to how to use nocodeapi

import InputValues from "../asset/input_values.webp";
import Process from "../asset/process.webp";
import Endpoint from "../asset/endpoint.webp";

const SectionThree = () => {
  return (<div className="how_to-work_with-it">
    <h1>How does it work?</h1>
    <div className="use_nocodeapi">
    
      <div className="way-to-use">
        <img src={InputValues} alt="use-to-out" />
        <h1>1 — Input values</h1>
        <p>Give your API a name, an API key, and click Create</p>
      </div>

      <div className="way-to-use">
        <img src={Process} alt="use-to-out" />
        <h1> 2 — Process to make</h1>
        <p>Processing the request, encrypt your keys, and storing on cloud</p>
      </div>

      <div className="way-to-use">
        <img src={Endpoint} alt="use-to-out" />
        <h1> 3 — Use endpoint</h1>
        <p>Your simple and secure endpoint is ready for use</p>
      </div>
    </div>
    </div>
  );
};

export default SectionThree;
