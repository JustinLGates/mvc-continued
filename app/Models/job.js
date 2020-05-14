import { generateId } from "../Utils.js";

export default class Job {
  constructor(data) {
    this.id = generateId();
    this.title = data.title;
    this.position = data.position;
    this.pay = data.pay;
    this.description = data.description;
  }

  get Template() {
    return /*html*/ `
    <div class="col-3 mt-2">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-text">Position: ${this.position}</p>
                <p class="card-text">Salary: ${this.pay}</p>
                <p class="card-text">${this.description}</p>
                <button class="btn btn-outline-success" onclick="app.jobsController.apply('${this.id}')">Apply!</button>
            </div>
        </div>
    </div>`;
  }
}
