import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import FilterBar from './components/FilterBar';
import API from './api';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [view, setView] = useState('list'); // 'add' or 'list'

  const fetchJobs = async () => {
    try {
      const res = await API.get('/');
      setJobs(res.data);
      setFilteredJobs(res.data); // default show all
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAdd = async (job) => {
    await API.post('/', job);
    fetchJobs();
    setView('list');
  };

  const handleDelete = async (id) => {
    await API.delete(`/${id}`);
    fetchJobs();
  };

  const handleUpdate = async (id, status) => {
    await API.put(`/${id}`, { status });
    fetchJobs();
  };

  const handleFilter = ({ status, date }) => {
    let result = [...jobs];

    if (status) {
      result = result.filter(job => job.status === status);
    }

    if (date) {
      result = result.filter(job => job.date.slice(0, 10) === date);
    }

    setFilteredJobs(result);
  };

  return (
    <div className="container">
      <Navbar setView={setView} />
      {view === 'add' ? (
        <JobForm onAdd={handleAdd} />
      ) : (
        <>
          <FilterBar onFilter={handleFilter} />
          <JobList jobs={filteredJobs} onDelete={handleDelete} onUpdate={handleUpdate} />
        </>
      )}
    </div>
  );
}

export default App;
