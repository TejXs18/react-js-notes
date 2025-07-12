import React, { useState } from 'react'
import { useTodo } from '../context/ToDocontext'

function TodoItem({ todo }) {
   const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const {updateTodo,deleteTodo,toggleComplete}=useTodo()
    
  const editTodo=()=>{
    if (!todoMsg.trim()) return
    updateTodo(todo.id,{...todo,todo:todoMsg.trim()})
    setisTodoEditable(false)
  }

  const toggleCompleted=()=>{
    toggleComplete(todo.id)
    // Exit edit mode if task is completed
    if (todo.completed === false && isTodoEditable) {
      setisTodoEditable(false)
      setTodoMsg(todo.todo)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      editTodo()
    } else if (e.key === 'Escape') {
      setTodoMsg(todo.todo)
      setisTodoEditable(false)
    }
  }

  const handleDelete = () => {
    if (window.innerWidth <= 768) {
      // On mobile, show confirmation
      setShowDeleteConfirm(true)
    } else {
      // On desktop, delete directly
      deleteTodo(todo.id)
    }
  }

  const confirmDelete = () => {
    deleteTodo(todo.id)
    setShowDeleteConfirm(false)
  }

  const cancelDelete = () => {
    setShowDeleteConfirm(false)
  }

  const getPriorityColor = () => {
    const length = todo.todo.length
    if (length > 50) return 'border-l-4 border-l-red-400'
    if (length > 30) return 'border-l-4 border-l-yellow-400'
    return 'border-l-4 border-l-green-400'
  }

    return (
        <>
        <div
            className={`group relative bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/20 duration-300 transition-all hover:bg-white/15 hover:shadow-xl ${getPriorityColor()} ${
                todo.completed ? "opacity-90 bg-green-500/10 border-green-400/30" : ""
            }`}
        >
            {/* Main Content Row */}
            <div className="flex items-start gap-3">
              {/* Checkbox */}
              <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer accent-green-500 rounded mt-1 flex-shrink-0"
                  checked={todo.completed}
                  onChange={toggleCompleted}
              />
              
              {/* Todo Text - Takes full available space */}
              <div className="flex-1 min-w-0 w-full">
                {isTodoEditable && !todo.completed ? (
                  <textarea
                      className={`w-full bg-transparent outline-none rounded-lg transition-all duration-300 resize-none overflow-hidden ${
                          isTodoEditable ? "border border-purple-400 px-3 py-1 bg-white/10" : "border-transparent"
                      } text-white`}
                      value={todoMsg}
                      onChange={(e) => setTodoMsg(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Enter task..."
                      rows={1}
                      style={{
                        minHeight: '2.5rem',
                        maxHeight: '8rem',
                        overflowY: 'auto'
                      }}
                  />
                ) : (
                  <div 
                    className={`w-full break-words ${
                      todo.completed ? "line-through text-green-200" : "text-white"
                    }`}
                    style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                  >
                    {todo.todo}
                  </div>
                )}
              </div>
            </div>
            
            {/* Action Buttons Row - Below the text */}
            <div className="flex justify-end gap-2 mt-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {/* Edit Button - Only show if not completed */}
              {!todo.completed && (
                <button
                    className="inline-flex w-10 h-10 md:w-8 md:h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-purple-500 hover:border-purple-400 text-white transition-all duration-300 touch-manipulation"
                    onClick={() => {
                        if (isTodoEditable) {
                            editTodo();
                        } else {
                            setisTodoEditable((prev) => !prev);
                        }
                    }}
                    title={isTodoEditable ? "Save changes" : "Edit task"}
                >
                    {isTodoEditable ? "💾" : "✏️"}
                </button>
              )}
              
              {/* Delete Button */}
              <button
                  className="inline-flex w-10 h-10 md:w-8 md:h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-red-500 hover:border-red-400 text-white transition-all duration-300 touch-manipulation"
                  onClick={handleDelete}
                  title="Delete task"
              >
                  🗑️
              </button>
            </div>
            
            {/* Priority Indicator - Move if completed */}
            <div className={`absolute ${todo.completed ? 'top-2 right-8' : 'top-2 right-2'}`}>
              <div className={`w-2 h-2 rounded-full ${
                todo.todo.length > 50 ? 'bg-red-400' : 
                todo.todo.length > 30 ? 'bg-yellow-400' : 'bg-green-400'
              }`} title={`Priority: ${todo.todo.length > 50 ? 'High' : todo.todo.length > 30 ? 'Medium' : 'Low'}`}></div>
            </div>
            
            {/* Completion Status */}
            {todo.completed && (
              <div className="absolute top-2 right-2">
                <span className="text-green-400 text-xs font-medium">✅</span>
              </div>
            )}
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm w-full border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Delete Task?</h3>
              <p className="text-gray-300 mb-6">Are you sure you want to delete "{todo.todo}"? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={confirmDelete}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        </>
    );
}

export default TodoItem;


