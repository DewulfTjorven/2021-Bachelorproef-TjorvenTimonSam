import React from "react";
import style from "./Hulp.module.css";
import video from './INLOGPROCEDURE.mp4';
import helper__img from './StartImage.png';


const Hulp = () => { 
  // const location = useLocation();
  // console.log(location.pathname)
      return (
        <section className={style.helper__container}>
          <div className={style.helper__wrapper}>
            <h1 className={style.helper__title}>Het inlogproces</h1>
            <div className={style.video__card}>
            <video className={style.video} width="765" height="550" controls muted loop autoplay="autoPlay" controlsList="nodownload" disablePictureInPicture>
              {<source src={video} type="video/mp4"/>}
            </video>           
            </div>
          </div>
          <img className={style.helper__img} src={helper__img} alt="helper" width="500"></img>
        </section>
      );
};

export default Hulp;