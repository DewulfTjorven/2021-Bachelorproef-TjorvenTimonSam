import React, {useContext} from "react";
import { useObserver } from "mobx-react-lite";

import {storeContext} from"../../index";
import Activity from "../Activiteit/Activiteit";




import style from "./Activiteiten.module.css";



const Activiteiten = () => {

  const store = useContext(storeContext);

  return useObserver(() => (
    <div className={style.container}>
          {store.dataStore.activities.map(activity => (
            <Activity
            key = {activity.title}
            activity={activity}
            />
          ))}
    </div>
  ));
};

export default Activiteiten;
