import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilter }) => {
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const handleFilter = () => {
    onFilter({ status, date });
  };

  const resetFilters = () => {
    setStatus('');
    setDate('');
    onFilter({ status: '', date: '' });
  };

  return (
    <div className="filter-bar">
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleFilter}>🔍 Filter</button>
      <button className="reset-btn" onClick={resetFilters}>❌ Reset</button>
    </div>
  );
};

export default FilterBar;
