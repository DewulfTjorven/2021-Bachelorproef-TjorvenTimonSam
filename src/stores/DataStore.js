import { decorate, observable, action, computed, configure } from "mobx";

configure({ enforceActions: "observed" });

class DataStore {
  constructor() {
    this.groups = [];
    this.users = [];
  }

  addGroup(group) {
    this.groups.push(group);
  }

  addUser(user) {
    this.users.push(user);
  }

  searchUser = search =>
    this.users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

  getGroupById = id => this.groups.find(group => group.id === id);

  getUserById = id => this.users.find(user => user.id === id);

  get unreadLength() {
    return this.groups.reduce(
      (total, group) => (total += group.unreadLength),
      0
    );
  }
}

decorate(DataStore, {
  groups: observable,
  users: observable,
  addGroup: action,
  addUser: action,
  seed: action,
  unreadLength: computed
});

export default DataStore;
