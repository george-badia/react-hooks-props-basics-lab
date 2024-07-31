import React from "react";
import Links from "./Links";
function About(props) {
console.log(props);
let bioContent;
if (props.bio && props.bio.length > 0) {
  bioContent = <p>{props.bio}</p>;
} else {
  bioContent = null;
}
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioContent}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
