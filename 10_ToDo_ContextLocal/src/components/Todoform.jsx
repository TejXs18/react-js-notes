import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/ToDocontext'

function TodoForm() {
  const [todo,setTOdo]=useState('')
  const {addTodo}=useTodo()
  
  const add=(e)=>{
    e.preventDefault()
    if(!todo.trim()) return
    addTodo({todo: todo.trim(),completed:false})
    setTOdo('')
  }

  const maxLength = 100
  const remainingChars = maxLength - todo.length

    return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-white mb-2">Add New Task</h2>
            <p className="text-gray-300 text-sm">What would you like to accomplish today?</p>
          </div>
          
          <form onSubmit={add} className="space-y-3">
            <div className="relative">
              <input
                  type="text"
                  placeholder="Enter your task here..."
                  className="w-full border border-white/20 rounded-xl px-4 py-3 outline-none duration-300 bg-white/10 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 transition-all"
                  value={todo}
                  onChange={((e)=>setTOdo(e.target.value))}
                  maxLength={maxLength}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                {remainingChars}/{maxLength}
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!todo.trim()}
              >
                ✨ Add Task
              </button>
              <button 
                type="button" 
                onClick={() => setTOdo('')}
                className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                disabled={!todo}
              >
                Clear
              </button>
            </div>
          </form>
          
          {todo.length > maxLength * 0.8 && (
            <div className="text-center">
              <p className="text-yellow-400 text-sm">
                {remainingChars <= 10 ? `⚠️ Only ${remainingChars} characters left!` : '💡 Keep it concise for better organization'}
              </p>
            </div>
          )}
        </div>
    );
}

export default TodoForm;


