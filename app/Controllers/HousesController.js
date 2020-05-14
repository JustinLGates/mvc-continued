import _HousesService from "../Services/HousesService.js";
import _Store from "../store.js";

function _draw() {
  let houses = _Store.State.houses;
  let template = "";
  houses.forEach((h) => {
    template += h.Template;
  });
  document.getElementById("houses").innerHTML = template;
}
export default class HousesController {
  constructor() {
    _draw();
    console.log("houses controller created");
  }
  newHouse(event) {
    event.preventDefault();
    let formData = event.target;
    let houseData = {
      sqft: formData.sqft,
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      title: formData.title.value,
      description: formData.description.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
    };
    _HousesService.newHouse(houseData);
    -_draw();
    formData.reset();
  }
  buy(id) {
    _HousesService.buyHouse(id);
    _draw();
  }
}
