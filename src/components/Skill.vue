import React from 'react';
import '../css/App.css';
// import { Controller, Scene } from 'react-scrollmagic';
import Tags from '../components/Tags.js';

const Skill = (props) => {
  return (
    <div className="skill-container">
      {/* had span with fontWeight: 600 */}
      <h3 className="skill-title">I <span style={{ color: props.color }}>{props.keyword}</span>{props.title}</h3>
      <div className="tag-container">
        {<Tags tags={props.tags}></Tags>}
      </div>
    </div>
  );
}

export default Skill;
