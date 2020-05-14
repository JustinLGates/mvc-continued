import _store from "../store.js";
import Job from "../Models/job.js";

class JobsService {
  applyJob(id) {
    _store.removeJob(id);
  }
  newJob(jobData) {
    let job = new Job(jobData);
    _store.addJob(job);
  }
  constructor() {
    console.log("created jobs service");
  }
}

const JOB_SERVICES = new JobsService();

export default JOB_SERVICES;
