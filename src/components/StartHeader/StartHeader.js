import React from "react";


import style from "./StartHeader.module.css";
import { ReactComponent as PreviewLogo } from "./vraagteken.svg";



const StartHeader = () => {
  return (
      <section className={style.container}>  
        <h2 className={style.title}>Heilig Hart</h2>
        <button className={style.button}>
          <PreviewLogo />
          <p>Ik heb hulp nodig!</p>
        </button>
      </section>
  );
};

export default StartHeader;
