import React from "react";


import style from "./ActiviteitenCard.module.css";



const ActiviteitenCard = () => {
  return (
      <section className={style.container}>  
        <button className={style.button}>
          <p>Activiteiten</p>
        </button>
      </section>
  );
};

export default ActiviteitenCard;