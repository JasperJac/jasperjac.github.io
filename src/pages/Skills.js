import React from "react";
import "../style/Skills.css";
import html from "../assets/icons/Html5.png";
import js from "../assets/icons/js.png";
import css from "../assets/icons/css.png";
import react from "../assets/icons/react.png";
import photoshop from "../assets/icons/photoshop.png";
const Skills = () => {
  return (
    <div className="contents">
      <h2 className="skills__title">Skills</h2>
      <div className="skills">
        <div className="skills__wrapper">
          <p className="skills__item">
            HTML <br />
            CSS/SCSS <br />
            BEM <br />
            Gulp <br />
            JavaScript(ES6) <br />
            TypeScript <br />
            Jquery
          </p>
        </div>
        <div>
          <img className="skills__icon" src={html} alt={html} />
        </div>
        <div>
          <p className="skills__item">
            Bootstrap <br />
            Materialize css
            <br />
            Tailwind CSS
            <br />
            Figma
            <br />
            Adobe Photoshop
            <br />
          </p>
        </div>
        <div>
          <img className="skills__icon" src={js} alt={js} />
        </div>
        <div className="div5">
          <p className="skills__item">
            Vue.JS
            <br />
            Vuetify
            <br />
          </p>
        </div>
        <div>
          <img className="skills__icon" src={css} alt={css} />
        </div>
        <div className="div7">
          <p className="skills__item">
            React.JS <br />
            Redux/Redux thunk
            <br />
            Axios
            <br />
            Styled component
            <br />
          </p>
        </div>
        <div>
          <img className="skills__icon" src={react} alt={react} />
        </div>
        <div>
          <p className="skills__item">
            Extra skills: <br />
            3DMaya
            <br />
            Marvelous designer
            <br />
            Lunacy
            <br />
            Clip studio paint(csp)
            <br />
          </p>
        </div>
        <div>
          <img className="skills__icon" src={photoshop} alt={photoshop} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
