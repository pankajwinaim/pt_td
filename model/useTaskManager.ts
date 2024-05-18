import { useState } from 'react';
import useTaskAPI from './useTaskAPI';

interface NewTask {
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

interface Errors {
  title?: string;
}

const useTaskManager = () => {
  const { tasks, loading, error, addTask, updateTaskStatus, deleteTask } = useTaskAPI();
  const [newTask, setNewTask] = useState<NewTask>({ title: '', description: '', status: 'To Do' });
  const [errors, setErrors] = useState<Errors>({});
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [listing, setListing] = useState<boolean>(true);

  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'All') {
      return true;
    } else {
      return task.status === filterStatus;
    }
  }).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      setErrors({ title: 'Title is required' });
      return;
    }
    addTask(newTask);
    setNewTask({ title: '', description: '', status: 'To Do' });
    setErrors({});
    setListing(true);
  };

  const handleUpdateStatus = (taskId: number, newStatus: NewTask['status']) => {
    updateTaskStatus(taskId, newStatus);
  };

  const handleDelete = (taskId: number) => {
    deleteTask(taskId);
  };

  return {
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
    setListing
  };
};

export default useTaskManager;