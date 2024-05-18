import React from 'react';

const FilterDropdown = ({ filterStatus, setFilterStatus, sortOrder, setSortOrder }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <label className="mr-2">Filter by Status:</label>
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)} 
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label className="mr-2">Sort by Title:</label>
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)} 
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterDropdown;
