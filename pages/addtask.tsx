import React from 'react'

const AddTask = ({handleSubmit,setNewTask,newTask,errors}) => {
  return <>
                 <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-500"
          required
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-500"
        />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-500"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Task</button>
      </form>

       </>

}

export default AddTask
