import React from "react";
import ContentHeader from "../../../components/ContentHeader/ContentHeader.js";

import style from "./GroupDetail.module.css";
import { useParams } from "react-router-dom";
import { useStores } from "../../../hooks/useStores.js";
import { useObserver } from "mobx-react-lite";
import Empty from "../../../components/Empty/Empty.js";
import SearchUser from "../../../components/SearchUser/SearchUser.js";

const GroupDetail = () => {
  const { id } = useParams();
  const { dataStore } = useStores();
  const group = dataStore.getGroupById(id);
  return useObserver(() => {
    if (!group) {
      return <Empty message="Group not found" />;
    }
    return (
      <>
        <ContentHeader title={"Add group"} />
        <div className={style.container}>
          <section className={style.section}>
            <h3 className={style.subtitle}>Members</h3>
            <ul className={style.membersList}>
              {group.users.map(user => (
                <li className={style.member} key={user.id}>
                  {user.name}
                </li>
              ))}
            </ul>
          </section>
          <section className={style.section}>
            <h3 className={style.subtitle}>Add member</h3>
            <SearchUser onUserClick={user => group.linkUser(user)} />
          </section>
        </div>
      </>
    );
  });
};

export default GroupDetail;
