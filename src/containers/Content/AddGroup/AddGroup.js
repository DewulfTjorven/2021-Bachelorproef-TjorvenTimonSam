import React from "react";

import { useState } from "react";

import style from "./AddGroup.module.css";
import ContentHeader from "../../../components/ContentHeader/ContentHeader.js";

const AddGroup = () => {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <ContentHeader title={"Add group"} />
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <label className={style.label}>
            <span>Groupname</span>
            <input
              className={style.input}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Add group" className={style.button} />
        </form>
      </div>
    </>
  );
};

export default AddGroup;
