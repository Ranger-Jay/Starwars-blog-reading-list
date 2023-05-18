import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function PlanetCard({
  name,
  population,
  rotation,
  climate,
  diameter,
  orbital_period,
  gravity,
  surface_water,
  terrain,
}) {
  const planetDetailsData = {
    population: population,
    rotation: rotation,
    climate: climate,
    diameter: diameter,
    orbital_period: orbital_period,
    gravity: gravity,
    surface_water: surface_water,
    terrain: terrain,
  };

  return (
    <div className="card m-3 p-0" style={{ width: 18 + "rem" }}>
      <img src="https://via.placeholder.com/500x300" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="card-text list-unstyled fs-5">
          <li className="fs-6">Population: {population}</li>
          <li className="fs-6">Rotation Period: {rotation}</li>
          <li className="fs-6">Climate: {climate}</li>
        </ul>
        <Link
          to={`planet-details/${name}`}
          state={planetDetailsData}
          className="btn btn-info"
        >
          Details
        </Link>
        <button className="btn btn-info ms-1">
          <i className="bi bi-heart"></i>
        </button>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
