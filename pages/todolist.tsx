import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

interface TaskListProps {
  error: Error | null;
  loading: boolean;
  filteredTasks: Task[];
  handleUpdateStatus: (taskId: number, newStatus: Task['status']) => void;
  handleDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ error, loading, filteredTasks, handleUpdateStatus, handleDelete }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : filteredTasks.length === 0 ? (
        <div className="flex items-center justify-center h-34">
          <p className="text-gray-500 text-lg">No records found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id} className="border-b">
                  <td className="px-4 py-2">{task.title}</td>
                  <td className="px-4 py-2">{task.description}</td>
                  <td className="px-4 py-2">{task.status}</td>
                  <td className="px-4 py-2">
                    {task.status !== 'In Progress' && (
                      <button
                        onClick={() => handleUpdateStatus(task.id, 'In Progress')}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      >
                        Start
                      </button>
                    )}
                    {task.status !== 'Done' && (
                      <button
                        onClick={() => handleUpdateStatus(task.id, 'Done')}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      >
                        Complete
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TaskList;