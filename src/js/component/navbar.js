import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleClick = (e, item) => {
    e.preventDefault();
    actions.deleteFromFavorites(item);
    console.log("hellooo delete");
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown show">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <ul>
              {store.favorites.map((item, index) => {
                return (
                  <li key={index}>
                    {item}{" "}
                    <button onClick={(e) => handleClick(e, item)}>Del</button>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
