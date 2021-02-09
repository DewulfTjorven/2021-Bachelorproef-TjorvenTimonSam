import { createContext } from "react";
import Stores from "../stores";

const stores = new Stores();

stores.uiStore.setCurrentUser(u1);
window.store = stores;

export const storesContext = createContext(stores);
