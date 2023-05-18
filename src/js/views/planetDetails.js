import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function VehicleDetails() {
  const { name } = useParams();
  const location = useLocation();
  const { manufacturer, model, mglt, cargo_capacity, crew, hyperdrive_rating } =
    location.state;

  return (
    <div className="container h-100">
      <div className="row justfify-content-center mt-5">
        <div className="col m-3">
          <img src="https://via.placeholder.com/500x300"></img>
        </div>
        <div className="col pt-3 mt-5">
          <h3>{name}</h3>
          <div className="row">
            <div className="col m-2">Manufacturer: {manufacturer}</div>
            <div className="col m-2">Model: {model}</div>
          </div>
          <div className="row">
            <div className="col m-2">MGLT: {mglt}</div>
            <div className="col m-2">Cargo Capacity: {cargo_capacity}</div>
          </div>
          <div className="row">
            <div className="col m-2">Crew: {crew}</div>
            <div className="col m-2">
              Hyperdrive Rating: {hyperdrive_rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
