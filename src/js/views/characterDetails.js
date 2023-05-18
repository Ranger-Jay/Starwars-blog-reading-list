import React from "react";
import "../../styles/home.css";
import { useLocation, useParams } from "react-router-dom";

export default function CharacterDetails() {
  const location = useLocation();

  const { name } = useParams();
  const { birthyear, gender, eye_color, hair_color, skin_color, height, mass } =
    location.state;

  //console.log(birthyear);
  return (
    <div className="container h-100">
      <div className="row justfify-content-center mt-5">
        <div className="col m-3">
          <img
            src={`https://starwars-aws.s3.amazonaws.com/img/characters/${name}.jpg`}
            style={{ objectFit: "fill", height: "20rem" }}
          ></img>
        </div>
        <div className="col pt-3 mt-5">
          <h3>{name}</h3>
          <div className="row">
            <div className="col m-2">Birthyear: {birthyear}</div>
            <div className="col m-2">Gender: {gender}</div>
          </div>
          <div className="row">
            <div className="col m-2">Eye color: {eye_color}</div>
            <div className="col">Hair color: {hair_color}</div>
          </div>
          <div className="row">
            <div className="col m-2">Skin color: {skin_color}</div>
            <div className="col m-2">Height: {height}</div>
          </div>
          <div className="row">
            <div className="col m-2">Mass: {mass}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
