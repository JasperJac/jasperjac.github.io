import React from "react";
import "../style/Profile.css";

const Profile = ({ data, info }) => {
  return (
    <div className="contents">
      <h2 className="about__title">About Me</h2>

      <div className="about">
        <div className="about__present">
          <p className="about__info">
            Hello, <br />
            This is my Portfolio <br />
            I would like to present <br />
            My works and i hope you like it!
          </p>
        </div>

        <div className="details">
          <p className="details__title">Personal details:</p>
          <div>
            <p className="details__info">
              Name: You Name <br />
              Nickname: You Nickname
              <br />
              City: You City<br />
              Date of birth: You Date of birth <br />
              Interest:
            </p>

            <div className="details__icons">
              {info.map((profile, index) => (
                <img
                  className="details__icons_icon"
                  src={profile.img}
                  alt={profile.alt}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/*contacts*/}
        <div className="contacts">
          <p className="contacts__title">Contact:</p>
          {data.map((info, index) => (
            <div className="contacts__contact" key={index}>
              <img className="contacts__icon" src={info.img} alt={info.alt} />
              <a href={info.ref} className="contacts__info">
                {info.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
