import React, {useContext, useState} from "react";
import { useObserver } from "mobx-react-lite";

import {storeContext} from"../../index";
import { ROUTES } from "../../consts";


import style from "./Add.module.css";
import { NavLink } from "react-router-dom";
import Activity from "../../models/Activity";

import ActivityImage from './ActivityImage.png';






const Add = () => {
  const store = useContext(storeContext);

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");


  const handleFormSubmit = e => {
    e.preventDefault()
    if (date !== "" && title !== "" && description !== "" && location !== "" && time !== "") {
      store.dataStore.addActivity(new Activity({
        date: date,
        title: title,
        description: description,
        location: location,
        time: time
      }));
      setDate("");
      setTitle("");
      setDescription("");
      setLocation("");
      setTime("");
    }
  }

  return useObserver(() => (
    <>
    <img src={ActivityImage} className={style.Image} alt="Logo" />

    <form className={style.form} onSubmit={handleFormSubmit} >

      <label htmlFor="title" className={style.title}>
        Title
      <input type="text" name="content" id="content" className="form__input" value={title} placeholder="vb. Ping Pong"
          onChange={e => setTitle(e.currentTarget.value)} />
      </label>

      <label htmlFor="location" className={style.locatie}>
        Locatie
      <input type="text" name="content" id="content" className="form__input" value={location} placeholder="vb. Floor 2"
          onChange={e => setLocation(e.currentTarget.value)} />
      </label>

      <label htmlFor="description" className={style.beschrijving}>
        Beschrijving
      <textarea type="text" name="content" id="content" className="form__input" value={description} placeholder="Trek allemaal sportieve kledij aan! We maken er een zeer leuke dag van."
          onChange={e => setDescription(e.currentTarget.value)} />
      </label>

      <label htmlFor="date" className={style.datum}>
        Datum & Tijd
      <section>
        <input type="date" name="user" id="user" className="form__input" value={date} className={style.da}
            onChange={e => setDate(e.currentTarget.value)} />

        <input type="time" name="content" id="content" className="form__input" value={time}
            onChange={e => setTime(e.currentTarget.value)} />
      </section>
      </label>

      <button type="submit" value="Create Post" className={style.button}>Voeg toe</button>
    </form >
    </>
    
  ));
}

export default Add;
