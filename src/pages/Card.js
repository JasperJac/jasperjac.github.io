import React from "react";
import "./../style/Card.css";

const Card = ({ data }) => {
  return (
    <div className="contents">
      <h2 className="promo__text">My projects</h2>
      <div className="card">
        {data.map((content, index) => (
          <div className="card__cards" key={index}>
            <div className="card__content">
              <a
                data-tooltip={content.info}
                data-flow="right"
                href={content.url}
                target="_blank"
                rel="noreferrer"
              >
                {content.name}
              </a>
            </div>
            <div>
              <a href={content.git} target="_blank" rel="noreferrer">
                <img
                  className="card__git"
                  src={content.icon}
                  alt={content.alt}
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/*Tooltip*/}
    </div>
  );
};

export default Card;
