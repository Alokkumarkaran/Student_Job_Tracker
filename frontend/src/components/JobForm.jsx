import React, { useState } from 'react';
import './JobForm.css';

const JobForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(formData); // ✅ Use onAdd
    setFormData({
      company: '',
      role: '',
      status: 'Applied',
      date: '',
      link: '',
    });
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="link" placeholder="Job Link" value={formData.link} onChange={handleChange} />
      <button type="submit">➕ Add Job</button>
    </form>
  );
};

export default JobForm;
