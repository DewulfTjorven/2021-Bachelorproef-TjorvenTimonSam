import Message from "./Message";
import User from "./User";
import Group from "./Group";
import DataStore from "../stores/DataStore";

test("Create a message", () => {
  const group = new Group({ name: "testgroup", store: new DataStore() });
  const user = new User({ name: "testuser", store: new DataStore() });
  const message = new Message({ content: "test", user, group });
  expect(message.content).toBe("test");
  expect(message.user).toBeInstanceOf(Object);
  expect(message.unread).toBe(false);
  expect(message.group).toBeInstanceOf(Object);
});

test("message must have a user", () => {
  expect(() => new Message({ content: "test", group: {} })).toThrow();
});

test("Message must have a group", () => {
  expect(() => new Message({ content: "test", user: {} })).toThrow();
});

test("Message must have some content", () => {
  expect(() => new Message({ group: {}, user: {} })).toThrow();
  expect(() => new Message({ content: "", group: {}, user: {} })).toThrow();
});

test("Create a unread message", () => {
  const group = new Group({ name: "testgroup", store: new DataStore() });
  const user = new User({ name: "testuser", store: new DataStore() });
  const message = new Message({
    content: "test",
    unread: true,
    group,
    user
  });
  expect(message.unread).toBe(true);
});

test("Set a message as read", () => {
  const group = new Group({ name: "testgroup", store: new DataStore() });
  const user = new User({ name: "testuser", store: new DataStore() });
  const message = new Message({
    content: "test",
    unread: true,
    group,
    user
  });
  message.setUnread(false);
  expect(message.unread).toBe(false);
});

test("User must have a reference to a created message", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const group = new Group({ name: "testgroup", store: new DataStore() });
  const message = new Message({ content: "test", user, group });
  expect(message.user).toBe(user);
  expect(message.user.messages).toContain(message);
});

test("Group must have a reference to a created message", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const group = new Group({ name: "testgroup", store: new DataStore() });
  const message = new Message({ content: "test", user, group });
  expect(message.group).toBe(group);
  expect(message.group.messages).toContain(message);
});
