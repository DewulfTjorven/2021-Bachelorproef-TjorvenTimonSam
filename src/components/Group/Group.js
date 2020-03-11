import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./Group.module.css";

const Group = ({ group, detailRoute }) => {
  return (
    <li>
      <Link to={`${detailRoute}${group.id}`}>
        <div className={style.container}>
          <img
            className={style.img}
            src={group.pic}
            alt="group img"
            width="50"
            height="50"
          />
          <p className={style.title}>{group.name}</p>
          <p className={style.latest}>{group.lastMessageContent}</p>
        </div>
      </Link>
    </li>
  );
};

Group.propTypes = {
  group: PropTypes.object.isRequired,
  detailRoute: PropTypes.string.isRequired
};

export default Group;
