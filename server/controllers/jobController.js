const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json(job);
};

exports.getJobs = async (req, res) => {
  const { status } = req.query;
  const filter = status ? { status } : {};
  const jobs = await Job.find(filter).sort({ date: -1 });
  res.json(jobs);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job deleted' });
};
