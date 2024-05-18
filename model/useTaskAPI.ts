import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005'; // Adjust this to match your API server configuration

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

interface UseTaskAPI {
  tasks: Task[];
  loading: boolean;
  error: Error | null;
  addTask: (newTask: Omit<Task, 'id'>) => Promise<void>;
  updateTaskStatus: (taskId: number, newStatus: Task['status']) => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
}

const useTaskAPI = (): UseTaskAPI => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>(`${API_BASE_URL}/tasks`);
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchTasks();

    // Clean up function
    return () => {
      // Cleanup if needed
    };
  }, []);

  const addTask = async (newTask: Omit<Task, 'id'>): Promise<void> => {
    try {
      const response = await axios.post<Task>(`${API_BASE_URL}/tasks`, newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task: ', error);
      // Handle error
    }
  };

  const updateTaskStatus = async (taskId: number, newStatus: Task['status']): Promise<void> => {
    try {
      await axios.put(`${API_BASE_URL}/tasks/${taskId}`, { status: newStatus });
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status: ', error);
      // Handle error
    }
  };

  const deleteTask = async (taskId: number): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task: ', error);
      // Handle error
    }
  };

  return { tasks, loading, error, addTask, updateTaskStatus, deleteTask };
};

export default useTaskAPI;