import React from 'react';
import useTaskManager from '../model/useTaskManager';
import FilterDropdown from './filter';
import TaskList from './todolist';
import AddTask from './addtask';
import UserProfile from './userProfile';

interface UserProfileProps {
  user: {
    name: string;
    avatar: string;
  };
}

const TaskManagerComponent: React.FC = () => {
  const {
    handleDelete,
    handleUpdateStatus,
    handleSubmit,
    filteredTasks,
    loading,
    filterStatus,
    setFilterStatus,
    sortOrder,
    setSortOrder,
    errors,
    error,
    newTask,
    setNewTask,
    listing,
    setListing,
  } = useTaskManager();

  const user: UserProfileProps['user'] = {
    name: 'Pankaj Chauhan',
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Task Manager</h1>
      <UserProfile user={user} />
      <hr className="m-4" />
      <div className="flex justify-end mb-4 pd-4">
        <button
          onClick={() => setListing(!listing)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {listing ? 'ADD NEW TASK' : 'TASK LISTING'}
        </button>
      </div>
      {listing ? (
        <>
          <FilterDropdown
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          <TaskList
            error={error}
            loading={loading}
            filteredTasks={filteredTasks}
            handleUpdateStatus={handleUpdateStatus}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <AddTask handleSubmit={handleSubmit} setNewTask={setNewTask} newTask={newTask} errors={errors} />
      )}
    </div>
  );
};

export default TaskManagerComponent;
