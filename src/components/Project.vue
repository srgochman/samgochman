import React from 'react';
import '../css/App.css';
// import { Controller, Scene } from 'react-scrollmagic';
import arrow from '../assets/arrow.svg';
import study from '../assets/study.svg';
import Tags from './Tags.js';

const Project = (props) => {
  // var photo = require(props.img);

  return (
    <div className="project-container">
      {/* img, arrow, description, tags hidden for projects that aren't active */}
      {/* <img className="project-img" src={photo}></img> */}
      <div className="project-text">
        <div className="project-title-container">
          <a href={props.link} target="_blank" rel="noopener">
            <h3 className="project-title">{props.title}</h3>
            <img src={props.type === "study" ? study : arrow} alt={props.type}></img>
          </a>
        </div>
        <h2 className="project-desc">{props.description}</h2>
        <div className="tag-container">
          {<Tags tags={props.tags}></Tags>}
        </div>
      </div>
    </div>
  );
}

export default Project;
