import React, { useState } from "react";

interface Task {
  title: string;
  description: string;
}

function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleAddTask = () => {
    if (newTask.title.trim() && newTask.description.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          title: newTask.title,
          description: newTask.description,
        },
      ]);
      setNewTask({ title: "", description: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">To-Do App</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Task
      </button>

      <div className="mt-6 space-y-4">
        {tasks.map((task) => (
          <div className="p-4 bg-white rounded shadow-2xl cursor-pointer">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded"
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
