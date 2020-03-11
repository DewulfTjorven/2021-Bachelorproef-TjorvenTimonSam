import Group from "./Group";
import Message from "./Message";
import User from "./User";
import DataStore from "../stores/DataStore";

test("Create a new group", () => {
  const group = new Group({ name: "Test", store: new DataStore() });
  expect(group.name).toBe("Test");
  expect(group.messages.length).toBe(0);
  expect(group.pic).not.toBe("");
});

test("Can't create a group without a store", () => {
  expect(() => new Group({ name: "testgroup" })).toThrow();
});

test("DataStore must have a reference to a created group", () => {
  const dataStore = new DataStore();
  expect(dataStore.groups.length).toBe(0);
  const group = new Group({ name: "testuser", store: dataStore });
  expect(dataStore.groups.length).toBe(1);
  expect(dataStore.groups[0]).toStrictEqual(group);
});

test("Add user to group", () => {
  const group = new Group({ name: "testgroup", store: new DataStore() });
  expect(group.users.length).toBe(0);
  const user = new User({ name: "testuser", store: new DataStore() });
  group.linkUser(user);
  expect(group.users.length).toBe(1);
  expect(group.users[0]).toBe(user);
  expect(group.users[0].groups).toContain(group);
});

test("Can only add the same user once to a group", () => {
  const group = new Group({ name: "testgroup", store: new DataStore() });
  expect(group.users.length).toBe(0);
  const user = new User({ name: "testuser", store: new DataStore() });
  group.linkUser(user);
  expect(group.users.length).toBe(1);
  group.linkUser(user);
  expect(group.users.length).toBe(1);
});

test("Unreadlength works as expected", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const group = new Group({ name: "testgroup", store: new DataStore() });
  expect(group.unreadLength).toBe(0);
  const message = new Message({
    content: "content",
    unread: true,
    group,
    user
  });
  group.linkMessage(message);
  expect(group.unreadLength).toBe(1);
  group.linkMessage(
    new Message({ content: "content2", unread: false, group, user })
  );
  expect(group.unreadLength).toBe(1);
  group.messages[0].setUnread(false);
  expect(group.unreadLength).toBe(0);
});

test("lastMessageContent is the content of the last added message", () => {
  const group = new Group({ name: "testgroup", store: new DataStore() });
  const user = new User({ name: "testuser", store: new DataStore() });
  expect(group.lastMessageContent).toBe("");
  group.linkMessage(
    new Message({
      content: "content",
      unread: true,
      group,
      user
    })
  );
  expect(group.lastMessageContent).toBe("content");
});

test("Users provided on Group instantiation must have a refence to the created group", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const group = new Group({
    name: "testgroup",
    store: new DataStore(),
    users: [user]
  });
  expect(user.groups[0]).toBe(group);
});
