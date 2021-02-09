import {decorate, observable, action} from 'mobx';

class DataStore {

  constructor() {
    this.activities = [];
  }

  addActivity(activity) {
    this.activities.push(activity);
  }

  seed(activities) {
    this.activities = activities;

  }
}

decorate(DataStore, {
  activities: observable,
  addActivity: action,
  seed: action,
});

export default DataStore;
