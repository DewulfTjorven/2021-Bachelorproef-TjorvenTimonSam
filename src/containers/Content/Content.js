import React from "react";
import style from "./Content.module.css";

import ContentHeader from "../../components/ContentHeader/ContentHeader.js";



const Content = () => {
  return (
    <section className={style.container}>
    <ContentHeader />
    </section>
  );
};
 
export default Content;
