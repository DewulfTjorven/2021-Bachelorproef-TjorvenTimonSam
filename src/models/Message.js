import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Message {
  constructor({ id = v4(), content, user, unread = false, group }) {
    if (!group) {
      throw new Error("A message must have a group");
    }
    if (!user) {
      throw new Error("A message must have a user");
    }
    if (!content || content === "") {
      throw new Error("A message must have some content");
    }
    this.id = id;
    this.group = group;
    this.content = content;
    this.user = user;
    this.unread = unread;
    this.group.linkMessage(this);
    this.user.linkMessage(this);
  }

  setUnread(value) {
    this.unread = value;
  }
}

decorate(Message, {
  unread: observable,
  setUnread: action
});

export default Message;
