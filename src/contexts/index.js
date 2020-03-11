import { createContext } from "react";
import Stores from "../stores";
import User from "../models/User";
import Message from "../models/Message";
import Group from "../models/Group";

const stores = new Stores();

const u1 = new User({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  name: "[Jouw naam hier]",
  store: stores.dataStore,
  avatar: "https://randomuser.me/api/portraits/women/22.jpg"
});
const u2 = new User({
  id: "eb19c00b-837e-37d3-8ea8-9cac99736e42",
  name: "Eloïse Pirotte",
  store: stores.dataStore,
  avatar: "https://randomuser.me/api/portraits/women/10.jpg"
});
const u3 = new User({
  id: "9fb1ceb4-d152-3a3d-9fee-5ea26029fb48",
  name: "Mathias Vandenberghe",
  store: stores.dataStore,
  avatar: "https://randomuser.me/api/portraits/men/22.jpg"
});
new User({
  id: "ef197725-d76a-3704-80b8-f0a50967742b",
  name: "Lina Van Hoof",
  store: stores.dataStore,
  avatar: "https://randomuser.me/api/portraits/women/24.jpg"
});
new User({
  id: "4e8baf11-bb77-3f6b-97d1-69b8e51c2ebe",
  name: "Ilias Claes",
  store: stores.dataStore,
  avatar: "https://randomuser.me/api/portraits/men/23.jpg"
});

const g1 = new Group({
  id: "48af215b-5ae4-3f37-a690-5399e56b1cfb",
  name: "De moatjes",
  pic: "/assets/img/avt1.jpeg",
  store: stores.dataStore,
  users: [u1, u2, u3]
});
g1.messages = [
  new Message({ content: "Hoe zit dat met dat weekend?", group: g1, user: u2 }),
  new Message({ content: "weekend?", group: g1, user: u3 }),
  new Message({
    content: "Ewel, we gingen toch op weekend gaan?",
    unread: true,
    group: g1,
    user: u2
  }),
  new Message({
    content: "Ah ja, helemaal vergeten.",
    user: u3,
    unread: true,
    group: g1
  })
];

const g2 = new Group({
  id: "b16ba9bd-6377-3f58-a6ba-d6e16467e415",
  name: "Kot",
  pic: "/assets/img/avt2.jpeg",
  store: stores.dataStore,
  users: [u1, u3]
});
g2.messages = [
  new Message({
    content: "Wie heeft er zijn afwas laten staan?",
    user: u3,
    group: g2
  }),
  new Message({
    content: "Al de 3de keer deze week, pfff",
    user: u3,
    group: g2
  }),
  new Message({ content: "Moar allé", user: u1, group: g2 }),
  new Message({
    content: "Ben het echt beu",
    user: u3,
    unread: true,
    group: g2
  })
];

stores.uiStore.setCurrentUser(u1);
window.store = stores;

export const storesContext = createContext(stores);
