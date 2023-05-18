import React, { useContext, useEffect, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/homePage.css";

import CharCard from "../component/CharCard.js";
import VehicleCard from "../component/VehicleCard.js";
import PlanetCard from "../component/PlanetCard.js";
import { Context } from "../store/appContext";

export default function Homepage() {
  const { actions } = useContext(Context);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // const characters = useMemo(() => {
  // 	if (!store) return null;
  // 	else return store.characters;
  //   });

  useEffect(() => {
    actions.getCharacter().then((resp) => {
      console.log(resp);
      setCharacters(resp);
    });
    actions.getPlanet().then((resp) => {
      setPlanets(resp);
    });
    actions.getVehicle().then((resp) => {
      setVehicles(resp);
    });
  }, []);

  return (
    <div className="d-block text-start">
      <h3>Characters</h3>
      <div className="container horizontal-scrollable">
        <div className="row flex-nowrap">
          {characters.map((char, index) => {
            return (
              <CharCard
                key={char.name}
                name={char.name}
                birthyear={char.birth_year}
                gender={char.gender}
                height={char.height}
                mass={char.mass}
                hair_color={char.hair_color}
                eye_color={char.eye_color}
                skin_color={char.skin_color}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <h3>Starships</h3>
      <div className="container horizontal-scrollable">
        <div className="row flex-nowrap">
          {vehicles.map((vehicle, index) => {
            return (
              <VehicleCard
                key={vehicle.name}
                name={vehicle.name}
                manufacturer={vehicle.manufacturer}
                mglt={vehicle.MGLT}
                model={vehicle.model}
                cargo_capacity={vehicle.cargo_capacity}
                crew={vehicle.crew}
                hyperdrive_rating={vehicle.hyperdrive_rating}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <h3>Planets</h3>
      <div className="container horizontal-scrollable">
        <div className="row flex-nowrap">
          {planets.map((planet, index) => {
            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                population={planet.population}
                rotation={planet.rotation_period}
                climate={planet.climate}
                diameter={planet.diameter}
                orbital_period={planet.orbital_period}
                gravity={planet.gravity}
                surface_water={planet.surface_water}
                terrain={planet.terrain}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
