import React from "react";
import ContentHeader from "../../../components/ContentHeader/ContentHeader.js";

import style from "./GroupDetail.module.css";

const GroupDetail = () => {
  return (
    <>
      <ContentHeader title={"Add group"} />
      <div className={style.container}>
        <section className={style.section}>
          <h3 className={style.subtitle}>Members</h3>
          <ul className={style.membersList}>
            {[].map(user => (
              <li className={style.member} key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        </section>
        <section className={style.section}>
          <h3 className={style.subtitle}>Add member</h3>
        </section>
      </div>
    </>
  );
};

export default GroupDetail;
