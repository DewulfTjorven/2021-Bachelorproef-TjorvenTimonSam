import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../consts";
import GroupsList from "../../../components/GroupsList/GroupList.js";

import style from "./Groups.module.css";

const Groups = () => {
  return (
    <div className={style.container}>
      <h2 className={style.titel}>Groups</h2>
      <GroupsList detailRoute={ROUTES.groupDetail.to} />
      <Link className={style.add} to={ROUTES.addgroup}>
        + Add Group
      </Link>
    </div>
  );
};

export default Groups;
