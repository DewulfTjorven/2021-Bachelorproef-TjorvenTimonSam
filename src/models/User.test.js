import User from "./User";
import Group from "./Group";
import Message from "./Message";
import DataStore from "../stores/DataStore";

test("Create a new user", () => {
  const dataStore = new DataStore();
  const user = new User({ name: "testuser", store: dataStore });
  expect(user.name).toBe("testuser");
  expect(user.avatar).not.toBe("");
});

test("Can't create a user without a store", () => {
  expect(() => new User({ name: "testuser" })).toThrow("voorzie een store");
});

test("DataStore must have a reference to a created user", () => {
  const dataStore = new DataStore();
  expect(dataStore.users.length).toBe(0);
  const user = new User({ name: "testuser", store: dataStore });
  expect(dataStore.users.length).toBe(1);
  expect(dataStore.users[0]).toStrictEqual(user);
});

test("Link a group to a user", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const group = new Group({ name: "testgroup", store: new DataStore() });
  expect(user.groups).toStrictEqual([]);
  user.linkGroup(group);
  expect(user.groups).toContain(group);
  expect(user.groups[0].users).toContain(user);
});

test("Link a message to a user", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const group = new Group({ name: "testgroup", store: new DataStore() });
  expect(user.messages).toStrictEqual([]);
  const message = new Message({ content: "testgroup", user, group });
  expect(user.messages).toContain(message);
});
