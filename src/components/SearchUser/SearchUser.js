import React from "react";

import PropTypes from "prop-types";

import style from "./SearchUser.module.css";

const SearchUser = () => {
  return (
    <div className={style.container}>
      <form>
        <label className={style.label}>
          <span>Search</span>
          <input className={style.input} type="search" />
        </label>
      </form>
      <ul>
        {[].map(user => (
          <li key={user.id}>
            <button className={style.button}>+ {user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchUser.propTypes = {
  onUserClick: PropTypes.func.isRequired
};

export default SearchUser;
