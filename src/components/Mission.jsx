import React from "react";
import missionImg from "../img/mission-png-3.png";

export default function Mission({ title, id, description }) {
  return (
    <div className="mission">
      <p className="mission__title">{title}</p>
      <hr className="sep" />
      <div className="mission__cont">
        <div className="mission__cont-img">
          <img src={missionImg} alt="mission-img" />
        </div>
        <div className="mission__cont-info">
          <p className="mission__label">Id</p>
          <p className="mission__text">{id}</p>
          <p className="mission__label">Description</p>
          <p className="mission__text">{description}</p>
        </div>
      </div>
    </div>
  );
}
