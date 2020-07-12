import React, { useState, useEffect } from 'react';
// import { TransitionGroup } from 'react-transition-group';
import '../css/App.css';
// import { Controller, Scene } from 'react-scrollmagic';

const Mission = () => {
  var endings = [
    'builds for and with sensory experiences.',
    'brews beer.',
    'designs and develops digital experiences.',
    'makes generative art.',
    'uses science research to inform design.'
  ];

  // establishes an index and a function for updating it
  // sets initial state at index 0
  const [idx, setidx] = useState(0);

  useEffect(() => {
    // just for managing first state
    // TODO: remove and use correct implementation of hooks and ReactCSSTransitionGroup
    setTimeout(function() {
      document.getElementById("first-ending").classList.remove("first-ending-hidden");
      document.getElementById("first-ending").classList.add("first-ending-active");
    }, 1000);
    setTimeout(function() {
      document.getElementById("first-ending").classList.remove("first-ending-active");
      document.getElementById("first-ending").classList.add("first-ending-hidden");
      setTimeout(function() {document.getElementById("first-ending").classList.add("hidden");}, 750)
    }, 4000);
    
    // update endings with setidx at interval
    // TODO: remove setIntervals and use ReactCSSTransitionGroup props
    // TODO: remove and add DOM elements instead of replacing content of one
    const interval = setInterval(() => {
      document.getElementsByClassName("ending")[0].classList.add("ending-active");
      // increment ending
      if (idx < endings.length - 1) {
        setidx(idx => idx + 1);
      }
      // reset to first when last is reached
      else {
        setidx(idx => 0);
      }
      // 4s visibility
      setTimeout(function () {
        document.getElementsByClassName("ending")[0].classList.remove("ending-active");
      }, 4000);
    // 750ms transition in CSS, 5s interval
    }, 5000);
    return () => clearInterval(interval);
  }, [endings.length, idx]);

  // const items = endings.map((item) => (
  //   <span className="ending" style={{ color: 'var(--purple)' }} key={item}>{item}</span>
  // ));

  return (
    <div className="mission-container">
      <div className="mission-statement">
        <span>I’m a creative technologist who </span>
        <span id="first-ending" className="first-ending-hidden" style={{ color: 'var(--purple)' }} >{endings[0]}</span>
        <span className="ending" style={{ color: 'var(--purple)' }}>{endings[idx]}</span>
        {/* <TransitionGroup
        transitionName="ending"
        transitionEnterTimeout={750}
        transitionLeaveTimeout={750}>
          <span className="ending" style={{ color: 'var(--purple)' }}>{endings[1]}</span>
        </TransitionGroup> */}
      </div>
      <h3>I come from this perspective and enjoy combining I come from this perspective and enjoy combining I come from this perspective and enjoy combining</h3>
      <h3>I'm looking for new work and would love to connect!</h3>
    </div>
  );
}

export default Mission;
