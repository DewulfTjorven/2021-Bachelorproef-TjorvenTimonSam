import React from "react";
import styles from "./Message.module.css";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  return (
    <li
      onClick={() => message.setUnread(false)}
      className={message.user === true ? styles.right : styles.left}
    >
      {message.user !== true && (
        <p className={styles.user}>{message.user.name}</p>
      )}
      <p className={message.unread ? styles.unread : ""}>{message.content}</p>
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired
};

export default Message;
