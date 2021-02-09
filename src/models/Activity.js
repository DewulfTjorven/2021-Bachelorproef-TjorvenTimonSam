import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Activity {
  constructor({ id = v4(), date, title, description, location, time }) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.description = description;
    this.location = location;
    this.time = time;
  }

}

decorate(Activity, {
  unread: observable,
  setUnread: action
});

export default Activity;
