import React from 'react';
import '../css/App.css';
// import { Controller, Scene } from 'react-scrollmagic';
import tagsJson from '../data/tags.json';
var tagCategories = tagsJson["results"];

const Tags = (props) => {
  return (
    <>
      {props.tags.map((tag) => (
        <Tag word={tag} key={tag}></Tag>
      ))}
    </>
  );
};

const Tag = ({ word }) => {
  var tag;
  tagCategories.map((category) => {
    if (category.words.includes(word)) {
      tag = <span
        className="tag"
        style={{ color: category.color, backgroundColor: category.backgroundColor }}
      >{word}</span>;
    }
    // return tag;
  });
  return tag;
};

export default Tags;
