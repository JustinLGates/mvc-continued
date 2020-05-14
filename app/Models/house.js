import { generateId } from "../Utils.js";

export default class House {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.sqft = data.sqft;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
  }

  get Template() {
    return /*html*/ `
    <div class="col-3 mt-2">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">${this.price}</p>
                <p class="card-text">Sqft: ${this.sqft} - beds: ${this.bathrooms} - baths: ${this.bathrooms}</p>
                <button class="btn btn-outline-success" onclick="app.housesController.buy('${this.id}')">Buy!</button>
            </div>
        </div>
    </div>`;
  }
}
