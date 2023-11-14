import React from "react";

// reviewer_pictures

import Ben_Pic from '../asset/ben.jpg'
import Anthony_Pic from '../asset/anthony.jpg'
import Dylan_Pic from '../asset/dylan.jpg'
import Fayaz_Pic from '../asset/fayaj.jpg'
import Felix_Pic from '../asset/felix.jpg'
import Osamah_Pic from '../asset/osamah.jpeg'

const SectionSix = () => {
  return (
    <div className="feedback_boxes">

      <div className="feedback">
        <p>
          "No-code keeps getting the ability to do more by talented makers
          creating awesome products. No-code API is one of those products that
          blow the doors wide open. The opportunities are endless"
        </p>
        <div className="feedback_person_details">
          <img src={Ben_Pic} alt="haha" />
          <div className="name_and_role">
            <h3 className="name">Ben Tossell</h3>
            <h6 className="role">founder of Makerpad</h6>
          </div>
        </div>
      </div>

      <div className="feedback">
        <p>
        "@nocodeapi is pretty awesome! In a few minutes I set up the telegram endpoint and hooked it up to DevWales.com so that I get notifications when new content is added 💪 I’m loving the #NoCode movement"
        </p>
        <div className="feedback_person_details">
          <img src={Anthony_Pic} alt="haha" />
          <div className="name_and_role">
            <h3 className="name">	
Si Anthony
 </h3>
            <h6 className="role">Developer</h6>
          </div>
        </div>
      </div>

      <div className="feedback">
        <p>
        "I love nocodeapi, it makes working with APIs so much easier, you don’t have to think too much about how everything works because it just works"
        </p>
        <div className="feedback_person_details">
          <img src={Dylan_Pic} alt="haha" />
          <div className="name_and_role">
            <h3 className="name">Dylan Ryan</h3>
            <h6 className="role">Developer Advocate</h6>
          </div>
        </div>
      </div>

      <div className="feedback">
        <p>
        "I just setup payment notifications from Razorpay to my telegram via @nocodeapi in under 2 minutes."

        </p>
        <div className="feedback_person_details">
          <img src={Fayaz_Pic} alt="haha" />
          <div className="name_and_role">
            <h3 className="name">Fayaz Ahmed</h3>
            <h6 className="role">Developer</h6>
          </div>
        </div>
      </div>

      <div className="feedback">
        <p>
        "NoCode API is an easy-to-use tool to integrate lots of APIs. It enables me to focus on my business without being distracted by API integration. I love the clean UI."
        </p>
        <div className="feedback_person_details">
          <img src={Felix_Pic} alt="haha" />
          <div className="name_and_role">
            <h3 className="name">Felix Müller
</h3>
            <h6 className="role">Indie Hacker</h6>
          </div>
        </div>
      </div>

      <div className="feedback">
        <p>
        "NoCode API is a great place to experiment with APIs and interact with them, without the need to setup servers and infrastructures. It gets the job done, looks beautiful, and is stable."
        </p>
        <div className="feedback_person_details">
          <img src={Osamah_Pic} alt="haha" />
          <div className="name_and_role">
            <h3 className="name">Osamah Aldoaiss</h3>
            <h6 className="role">UI Engineer</h6>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SectionSix;
