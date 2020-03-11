import React from "react";

import Message from "../../../components/Message/Message.js";
import Form from "../../../components/Form/Form.js";
import UnreadMessages from "../../../components/UnreadMessages/UnreadMessages.js";

import style from "./Messages.module.css";
import { useParams } from "react-router-dom";
import { useStores } from "../../../hooks/useStores.js";
import { useObserver } from "mobx-react-lite";
import Empty from "../../../components/Empty/Empty.js";

const Messages = () => {
  const { id } = useParams();
  const { dataStore } = useStores();
  const group = dataStore.getGroupById(id);

  return useObserver(() => {
    if (!group) {
      return <Empty message={"Conversation not found"} />;
    }
    return (
      <>
        <header className={style.header}>
          {group && (
            <>
              <img
                className={style.img}
                src={group.pic}
                alt="Group img"
                width="50"
                height="50"
              />
              <h3 className={style.title}>{group.name}</h3>
              <span className={style.unread}>
                {group.users.length} members -{" "}
                <UnreadMessages length={group.unreadLength} />
              </span>
            </>
          )}
        </header>
        <ul className={style.list}>
          {group.messages.map(message => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
        <Form />
      </>
    );
  });
};

export default Messages;
