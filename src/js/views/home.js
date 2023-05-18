import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 home-cont">
      <h2>Characters</h2>
      <div className="card-parent">
        {store.characters.map((item, idx) => {
          return (
            <div key={idx} className="baby-card">
              <Card item={item} id={idx} type="character" />
            </div>
          );
        })}
      </div>

      <h2>Planets</h2>
      <div className="card-parent">
        {store.planets.map((item, idx) => {
          return (
            <div key={idx} className="baby-card">
              <Card item={item} id={idx} type="planet" />
            </div>
          );
        })}
      </div>

      <h2>Starships</h2>
      <div className="card-parent">
        {store.starships.map((item, idx) => {
          return (
            <div key={idx} className="baby-card">
              <Card item={item} id={idx} type="starship" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
