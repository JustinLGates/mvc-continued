import _JobService from "../Services/JobsService.js";
import _Store from "../store.js";

function _draw() {
  let jobs = _Store.State.jobs;
  let template = "";
  jobs.forEach((j) => {
    template += j.Template;
  });
  document.getElementById("jobs").innerHTML = template;
}

export default class JobsController {
  constructor() {
    _draw();
  }

  newJob(event) {
    event.preventDefault();
    let form = event.target;
    let jobData = {
      title: form.title.value,
      pay: form.pay.value,
      position: form.position.value,
      description: form.description.value,
    };
    _JobService.newJob(jobData);
    _draw();
  }
  apply(id) {
    console.warn("you clicked apply the id is: " + id);
    _JobService.applyJob(id);
    _draw();
  }
}
