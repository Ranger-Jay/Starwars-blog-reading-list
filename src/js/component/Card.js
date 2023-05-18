import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  let name = props.item.name;
  // if(props.type == "character"){
  //     name = props.item.name
  // }
  const { store, actions } = useContext(Context);

  let characterDeetz =
    props.type == "character" ? (
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${
            props.id + 1
          }.jpg`}
          onError={(e) => {
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          className="card-img-top"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          alt="Images of Star Wars Characters"
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <h6>Gender: {props.item.gender}</h6>
        </div>
      </div>
    ) : (
      ""
    );

  let planetDeetz =
    props.type == "planet" ? (
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${
            props.id + 1
          }.jpg`}
          onError={(e) => {
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          className="card-img-top"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          alt="Images of Star Wars Planets"
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <h6>Terrain: {props.item.terrain}</h6>
        </div>
      </div>
    ) : (
      ""
    );
  let starshipDeetz =
    props.type == "starship" ? (
      <div>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${
            props.id + 1
          }.jpg`}
          onError={(e) => {
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          className="card-img-top"
          style={{ maxHeight: "300px", objectFit: "cover" }}
          alt="Images of Star Wars Starships"
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <h6>Manufacturer: {props.item.manufacturer}</h6>
        </div>
      </div>
    ) : (
      ""
    );

  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.type == "character" ? characterDeetz : ""}
      {props.type == "planet" ? planetDeetz : ""}
      {props.type == "starship" ? starshipDeetz : ""}
      <div className="bottom-card">
        <Link to={"/about/" + props.type + "/" + props.id} id="find-out">
          <span>Find out!</span>
        </Link>
        <div className="heart-btn">
          <button id="favorite-btn" onClick={() => actions.addFavorite(name)}>
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
