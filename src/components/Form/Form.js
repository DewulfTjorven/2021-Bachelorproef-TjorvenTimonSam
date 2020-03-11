import React, { useState } from "react";
import style from "./Form.module.css";
import { useStores } from "../../hooks/useStores";
import { useParams } from "react-router-dom";
import Message from "../../models/Message";

const Form = () => {
  const [content, setContent] = useState("");
  const { uiStore, dataStore } = useStores();
  const { id } = useParams();

  const handleFormSubmit = e => {
    e.preventDefault();
    if (content !== "") {
      const group = dataStore.getGroupById(id);
      new Message({
        content,
        user: uiStore.currentUser,
        group
      });
      setContent("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <section className={style.form}>
        <button className={style.emoji}>
          <span role="img" aria-label="Smiley">
            😃
          </span>
        </button>
        <input
          className={style.input}
          id="content"
          name="content"
          placeholder="Typ een bericht"
          value={content}
          onChange={e => setContent(e.currentTarget.value)}
        />
      </section>
    </form>
  );
};

export default Form;
