import React from "react";
import { useEffect, useState } from "react";
import "./Menu.css";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("https://codice-boca.web.app/menu")
      .then((res) => res.json())
      .then((menuItems) => {
        setMenuItems(menuItems);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="containerm">
      <div id="hero">
        <h1 className="menu_h1">Buon appetito</h1>
      </div>
      <div className="menu-items" id="menu">
        {menuItems.map((recipe) => (
          <div className="menu-item" key={recipe.title}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
