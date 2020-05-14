import Car from "./Models/Car.js";
import House from "./Models/house.js";
import Job from "./Models/job.js";
let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({
      title: "Jinkies",
      make: "Mystery",
      model: "Machine",
      price: "10000",
      description: "smells like a large dog in here",
      imgUrl: "https://i.ytimg.com/vi/ArKckzLPM0M/maxresdefault.jpg",
    }),
  ],
  houses: [
    new House({
      title: "house?",
      bedrooms: "1",
      bathrooms: "6",
      price: 123456789,
      sqft: "255",
      description: "its kinda small but there is never a line to the bathroom",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/Burton-Little_House_at_Bowdoin_College_IMG_1952.JPG",
    }),
  ],

  jobs: [
    new Job({
      title: "its ok i guess",
      pay: "5",
      position: "janitor",
      description: "cleaning stuff and things",
    }),
  ],
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  addCar(car) {
    _state.cars.push(car);
  }
  removeCar(id) {
    // NOTE find the index of the car with the provided id
    let index = _state.cars.findIndex((c) => c.id == id);
    // NOTE check to make sure it was found
    if (index == -1) {
      console.error("invalid id");
      return;
    }
    _state.cars.splice(index, 1);
  }
  addHouse(house) {
    _state.houses.push(house);
  }
  removeHouse(id) {
    let index = _state.houses.findIndex((h) => h.id == id);
    if (index == -1) {
      console.error("Invalid ID");
      return;
    }
    _state.houses.splice(index, 1);
  }
  addJob(job) {
    _state.jobs.push(job);
  }
  removeJob(id) {
    let index = _state.jobs.findIndex((j) => j.id == id);
    if (index === -1) {
      console.error("Invalid ID");
      return;
    }
    _state.jobs.splice(index, 1);
  }
}

const STORE = new Store();
export default STORE;
