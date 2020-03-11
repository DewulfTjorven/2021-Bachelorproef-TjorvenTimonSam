import React from "react";
import styles from "./Message.module.css";
import PropTypes from "prop-types";
import { useStores } from "../../hooks/useStores";
import { useObserver } from "mobx-react-lite";

const Message = ({ message }) => {
  const { uiStore } = useStores();
  return useObserver(() => (
    <li
      onClick={() => message.setUnread(false)}
      className={
        message.user === uiStore.currentUser ? styles.right : styles.left
      }
    >
      {message.user !== uiStore.currentUser && (
        <p className={styles.user}>{message.user.name}</p>
      )}
      <p className={message.unread ? styles.unread : ""}>{message.content}</p>
    </li>
  ));
};

Message.propTypes = {
  message: PropTypes.object.isRequired
};

export default Message;
