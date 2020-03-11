import UiStore from "./UiStore";
import DataStore from "./DataStore";

class Stores {
  constructor() {
    this.dataStore = new DataStore();
    this.uiStore = new UiStore();
  }
}

export default Stores;
