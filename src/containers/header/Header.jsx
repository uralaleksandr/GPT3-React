import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const header = () => {
  return (
    <div className="gpt3__header_section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          aperiam, quo omnis ratione quaerat deserunt deleniti ducimus ipsum
          dolores perspiciatis, esse quisquam beatae nobis corrupti,
          reprehenderit voluptates quam! Ad, exercitationem?
        </p>

        <div className="g pt3__header-context__input">
          <input type="email" placeholder="enter your email address"></input>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1600 people requested access to this website in the last 24 hours
          </p>
        </div>
        <div className="gpt__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default header;
