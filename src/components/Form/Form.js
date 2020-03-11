import React, { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [content, setContent] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    if (content !== "") {
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
    </form>)
};

export default Form;
