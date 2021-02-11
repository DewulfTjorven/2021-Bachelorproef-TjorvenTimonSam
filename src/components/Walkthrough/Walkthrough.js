import React, {useState} from "react";
import style from "./Walkthrough.module.css";
import { useObserver } from "mobx-react-lite";

import { Link} from "react-router-dom";
import { ROUTES } from "../../consts";

import img1 from './activiteiten.png';
import img2 from './media.png';
import img3 from './info.png';
import img4 from './helper.png';

import video1 from "./gif-activiteiten.mp4"
import video2 from "./gif-media.mp4"
import video3 from "./gif-info.mp4"
import video4 from "./HELPERS.mp4"


// if (step === 1) {
// import video from './gif-activiteiten.mp4';
// }

// if (step === 2) {
// import video from './gif-media.mp4';
// }

// if (step === 3) {
// import video from './gif-info.mp4';
// }

// if (step === 4) {
// import video from './HELPERS.mp4';
// }


const Walkthrough = () => {
  const [step, setStep] = useState(1);


  console.log(step);




  return useObserver(() => (

      <section className={style.walkthrough__wrapper}>
        
        <div className={style.container}>
        
        {step === 1 ? 
          <div className={style.walkthrough__text}>     
            <h1 className={style.title}>1. Activiteiten</h1>
            <p className={style.walkthrough__p}>Kijk elke week naar wat er te doen valt van activiteiten, en zie wie van de andere bewoners ook aanwezig zijn.</p>
            <img alt="activiteiten" src={img1} className={style.step__img}></img>
          </div>

        :
        <p className={style.hidden}></p>
        }
                {step === 2 ? 
          <div className={style.walkthrough__text}>     
            <h1 className={style.title}>2. Foto's en videos</h1>
            <p className={style.walkthrough__p}>Gebruik de app om naar foto’s en videos te kijken. Haal je favorieten eruit en maak een verzameling.</p>
            <img alt="media" src={img2} className={style.step__img}></img>
          </div>

        :
        <p className={style.hidden}></p>
        }
                {step === 3 ? 
          <div className={style.walkthrough__text}>     
            <h1 className={style.title}>3. Informatie op zak</h1>
            <p className={style.walkthrough__p}>Kijk in de app ook verschillende informatie na, zoals het weer of wat er op het menu staat. <br></br>Ook voor nieuws kan je bij onze app terecht.</p>
            <img alt="info" src={img3} className={style.step__img}></img>
          </div>

        :
        <p className={style.hidden}></p>
        }
                {step === 4 ? 
          <div className={style.walkthrough__text}>     
            <h1 className={style.title}>4. Hulp in één klik</h1>
            <p className={style.walkthrough__p}>Kijk elke week naar wat er te doen valt van activiteiten, en zie wie van de andere bewoners ook aanwezig zijn.</p>
            <img alt="helper" src={img4} className={style.helper__img}></img>
          </div>

        :
        <p className={style.hidden}></p>
        }







          <div>

          {step === 1 ? 
                <video className={style.video} loop muted autoPlay >             
                  <source src={video1} type="video/mp4"/> 
                </video>
                :
                <div>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video2} type="video/mp4"/> 
                </video>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video3} type="video/mp4"/> 

                </video>                  
                <video className={style.hidden} loop muted autoPlay>             
                  <source src={video4} type="video/mp4"/> 
                </video>

                </div>
          }
          {step === 2 ? 
                <video className={style.video} loop muted autoPlay >             
                  <source src={video2} type="video/mp4"/> 
                </video>
                :
                <div>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video1} type="video/mp4"/> 
                </video>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video3} type="video/mp4"/> 

                </video>                  
                <video className={style.hidden} loop muted autoPlay>             
                  <source src={video4} type="video/mp4"/> 
                </video>

                </div>
          }
                    
          {step === 3 ? 
                <video className={style.video} loop muted autoPlay >             
                  <source src={video3} type="video/mp4"/> 
                </video>
                :
                <div>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video1} type="video/mp4"/> 
                </video>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video2} type="video/mp4"/> 

                </video>                  
                <video className={style.hidden} loop muted autoPlay>             
                  <source src={video4} type="video/mp4"/> 
                </video>

                </div>
          }
          {step === 4 ? 
                <video className={style.video} loop autoPlay >             
                  <source src={video4} type="video/mp4"/> 
                </video>
                :
                <div>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video1} type="video/mp4"/> 
                </video>

                <video className={style.hidden} loop muted autoPlay >             
                  <source src={video2} type="video/mp4"/> 

                </video>                  
                <video className={style.hidden} loop muted autoPlay>             
                  <source src={video3} type="video/mp4"/> 
                </video>

                </div>
          }
           
          </div>
        </div>
        <div className={style.walkthrough__controls}>
        {step !== 1 ? <button onClick={() => setStep(step -1)} className={style.button}><p>vorige</p></button> : <button className={style.invisible + " " + style.button}>vorige</button>}
        <div>

        {step === 1 ? 
        
        <ul className={style.walkthrough__nav}>
            <li className={style.menu__item__current}><p>1</p></li>
            <li className={style.menu__item}><p>2</p></li>
            <li className={style.menu__item}><p>3</p></li>
            <li className={style.menu__item}><p>4</p></li>
        </ul> 

        : 
        
        <p></p>
        
        }

        {step === 2 ? 

          <ul className={style.walkthrough__nav}>
            <li className={style.menu__item}><p>1</p></li>
            <li className={style.menu__item__current}><p>2</p></li>
            <li className={style.menu__item}><p>3</p></li>
            <li className={style.menu__item}><p>4</p></li>
          </ul>

          : 

          <p></p>

        }


        {step === 3 ? 

          <ul className={style.walkthrough__nav}>
            <li className={style.menu__item}><p>1</p></li>
            <li className={style.menu__item}><p>2</p></li>
            <li className={style.menu__item__current}><p>3</p></li>
            <li className={style.menu__item}><p>4</p></li>
          </ul>

        : 
        
        <p></p>
        
        }
        {step === 4 ? 

          <ul className={style.walkthrough__nav}>
            <li className={style.menu__item}><p>1</p></li>
            <li className={style.menu__item}><p>2</p></li>
            <li className={style.menu__item}><p>3</p></li>
            <li className={style.menu__item__current}><p>4</p></li>
          </ul>
          
        : 

        <p></p>

        }
       
        
        </div>

        {step !== 4 ? <button className={style.button} onClick={() => { 
          setStep(step +1) 
          
        }}><p>volgende</p></button> :
        <div> 
          <Link to={ROUTES.bewonerinterface}>
          <button className={style.button}>volgende</button>
          </Link>
        </div>
        }
        </div>

      </section>
  ));
};

export default Walkthrough;
