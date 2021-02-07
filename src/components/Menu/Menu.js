import React from "react";


import style from "./Menu.module.css";



const Menu = () => {
  return (
      <section className={style.container}>  
        <button className={style.button}>
          <p>Menu</p>
        </button>
      </section>
  );
};

export default Menu;
