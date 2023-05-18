import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../store/appContext";

export default function CharCard({
  name,
  birthyear,
  height,
  mass,
  gender,
  eye_color,
  hair_color,
  skin_color,
}) {
  const { store, actions } = useContext(Context);

  const charDetailsData = {
    birthyear: birthyear,
    gender: gender,
    eye_color: eye_color,
    hair_color: hair_color,
    height: height,
    mass: mass,
    skin_color: skin_color,
  };

  const handleClick = (e) => {
    e.preventDefault();
    actions.addToFavorites(name);
    console.log("hellooo");
  };

  //console.log(charDetailsData);
  return (
    <div className="card m-3 p-0" style={{ width: "19rem" }}>
      <img
        src={`https://starwars-aws.s3.amazonaws.com/img/characters/${name}.jpg`}
        className="card-img-top"
        styles={{ objectFit: "fill", height: "17 rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="card-text list-unstyled 15-5">
          <li className="fs-6">Birth year: {birthyear}</li>
          <li className="fs-6">Height: {height}</li>
          <li className="fs-6">Mass: {mass}</li>
        </ul>
        <Link
          to={`character-details/${name}`}
          state={charDetailsData}
          className="bt btn-info"
        >
          Details
        </Link>
        <button onClick={(e) => handleClick(e)}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>O
        </button>

        <Outlet></Outlet>
      </div>
    </div>
  );
}
