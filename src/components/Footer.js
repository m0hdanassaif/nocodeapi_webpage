import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faYoutube,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

import NAPI from "../asset/NAPI.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="new_request">
        <img src={NAPI} alt="requested" />
        <h3>
          <FontAwesomeIcon
            icon={faCircle}
            size="x"
            color="#147132"
            className="my-icon"
          />
          I HAVE A NEW API REQUEST
        </h3>
      </div>

      <div className="footer_links_and_contact">
        <div class="footer_links">
          <div className="applications">
            <ul>
              <li className="bold-list">Application</li>
              <li>Airtable</li>
              <li>Google Spreedsheet</li>
              <li>Google Analytics</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Slack</li>
              <li>View All</li>
            </ul>
          </div>

          <div className="resources">
            <ul>
              <li className="bold-list">Resources</li>
              <li>Marketplace</li>
              <li>API Connector</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="company">
            <ul>
              <li className="bold-list">Company</li>
              <li>Contact</li>
              <li>News</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="conatct">
          <h2>Subscribe to our Newsletter</h2>
          <div className="input_and_submit">
          <input placeholder="Enter your Email" />
          <button>
          <FontAwesomeIcon icon={faEnvelope} className="envelope-icon"/> Subscibe
          </button>
          </div>

          <h3>Place to Find NoCodeAPI</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faSlack} className="social-icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </li>
          </ul>
        </div>
      </div>
 
      <div className="copyright">
        <h3>&copy; 2019-2022 NoCodeAPI Pte. Ltd. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
