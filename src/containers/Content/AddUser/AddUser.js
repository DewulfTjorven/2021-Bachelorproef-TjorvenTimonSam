import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useStores } from "../../../hooks/useStores.js";
import { ROUTES } from "../../../consts/index.js";

import User from "../../../models/User.js";
import ContentHeader from "../../../components/ContentHeader/ContentHeader.js";
import style from "./AddUser.module.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const { dataStore } = useStores();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const u = new User({ name, store: dataStore });
    history.push(ROUTES.userDetail.to + u.id);
  };

  return (
    <>
      <ContentHeader title={"Add contact"} />
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="name" className={style.label}>
            Name:
            <input
              className={style.input}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Add contact" className={style.button} />
        </form>
      </div>
    </>
  );
};

export default AddUser;
