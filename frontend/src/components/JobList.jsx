import React from 'react';
import './JobList.css';

const JobList = ({ jobs, onDelete, onUpdate }) => {
  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <div key={job._id} className="job-card">
          <div className="job-header">
            <h2>{job.role}</h2>
            <h3>{job.company}</h3>
          </div>

          <div className="job-details">
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Date Applied:</strong> {new Date(job.date).toLocaleDateString()}</p>
            <p>
              <strong>Link:</strong>{' '}
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                View Job 🔗
              </a>
            </p>
          </div>

          <div className="job-actions">
            <select
              value={job.status}
              onChange={(e) => onUpdate(job._id, e.target.value)}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>

            <button onClick={() => onDelete(job._id)}>🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
