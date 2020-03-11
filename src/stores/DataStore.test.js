import DataStore from "./DataStore";
import Group from "../models/Group";
import Message from "../models/Message";
import User from "../models/User";

test("Create a new DataStore", () => {
  const store = new DataStore();
  expect(store.groups).toBeInstanceOf(Array);
  expect(store.groups.length).toBe(0);
  expect(store.currentGroup).toBeUndefined();
});

function getSeedData(store) {
  const user = new User({ name: "testuser", store });
  const group1 = new Group({ name: "testgroup1", store });
  new Message({
    content: "content1",
    user,
    unread: true,
    group: group1
  });
  const group2 = new Group({ name: "testgroup1", store });
  new Message({
    content: "content2",
    user,
    unread: true,
    group: group2
  });

  return [group1, group2];
}

test("Total unread length of all groups", () => {
  const store = new DataStore();
  getSeedData(store);
  expect(store.unreadLength).toBe(2);
  store.groups[0].messages[0].setUnread(false);
  expect(store.unreadLength).toBe(1);
});

test("Search for a user", () => {
  const store = new DataStore();
  const user = new User({ name: "testuser", store });
  expect(store.searchUser("niks").length).toBe(0);
  expect(store.searchUser("tus").length).toBe(1);
  expect(store.searchUser("tus")[0]).toBe(user);
});

test("Get a group by the id", () => {
  const store = new DataStore();
  const group = new Group({ name: "testgroup", store });
  const id = group.id;
  expect(store.getGroupById(id)).toBe(group);
});

test("Get a user by the id", () => {
  const store = new DataStore();
  const user = new User({ name: "testuser", store });
  const id = user.id;
  expect(store.getUserById(id)).toBe(user);
});
