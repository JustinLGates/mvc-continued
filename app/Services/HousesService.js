import House from "../Models/house.js";
import _Store from "../store.js";
class HousesService {
  constructor() {
    console.log("houses sevice created");
  }
  newHouse(houseData) {
    let house = new House(houseData);
    _Store.addHouse(house);
  }
  buyHouse(id) {
    _Store.removeHouse(id);
  }
}
const HOUSE_SERVICE = new HousesService();
export default HOUSE_SERVICE;
