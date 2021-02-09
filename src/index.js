import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Store from "./stores";
import Activity from './models/Activity';
import { BrowserRouter } from "react-router-dom";
import { createContext } from"react";

// nieuwe instantie maken van de store
const store = new Store();
export const storeContext = createContext(store);

window.store = store;

const activities = [];
activities.push(new Activity({date: '12/02/2021', title: 'Ping Pong', description: 'Jan, Patrick en nog 3 andere doen mee aan deze activiteit.', location: 'Floor 2', time: '14:30'}));
// stopt orders in store
store.dataStore.seed(activities)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
