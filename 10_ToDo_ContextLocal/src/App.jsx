import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

function App() {
const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>
      (prevTodo.id===id ? todo: prevTodo)))}
    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((todo)=>todo.id !==id))
    }
    const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id? 
      {...prevTodo,completed:!prevTodo.completed}: prevTodo ))
    }

      useEffect(()=>{
       const todos= JSON.parse(localStorage.getItem('todos'))
      if(todos &&todos.length>0){
        setTodos(todos)
      }
      
      },[])

    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
    const pendingTodos = totalTodos - completedTodos

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen py-8">
        <div className="w-full max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ✨ TaskMaster Pro
            </h1>
            <p className="text-gray-300 text-lg">Organize your life, one task at a time</p>
          </div>

          {/* Instructions Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20 instructions-card">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              📋 How to Use
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-200 text-sm">
              <div>
                <h3 className="font-medium text-pink-300 mb-2">Adding Tasks:</h3>
                <ul className="space-y-1">
                  <li>• Type your task in the input field</li>
                  <li>• Press "Add" or hit Enter to save</li>
                  <li>• Tasks are automatically saved locally</li>
                </ul>
              </div>
                             <div>
                 <h3 className="font-medium text-purple-300 mb-2">Managing Tasks:</h3>
                 <ul className="space-y-1">
                   <li>• ✅ Check the box to mark as complete</li>
                   <li>• ✏️ Click edit icon to modify tasks</li>
                   <li>• 🗑️ Click delete icon to remove tasks</li>
                   <li>• 📱 On mobile: Delete shows confirmation dialog</li>
                 </ul>
               </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 stats-card hover-lift">
              <div className="text-2xl font-bold text-white">{totalTodos}</div>
              <div className="text-gray-300 text-sm">Total Tasks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 stats-card hover-lift">
              <div className="text-2xl font-bold text-green-400">{completedTodos}</div>
              <div className="text-gray-300 text-sm">Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 stats-card hover-lift">
              <div className="text-2xl font-bold text-yellow-400">{pendingTodos}</div>
              <div className="text-gray-300 text-sm">Pending</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl">
            <div className="mb-6">
              <TodoForm/> 
            </div>
            
            {/* Todo List */}
            <div className="space-y-3">
              {todos.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-white mb-2">No tasks yet!</h3>
                  <p className="text-gray-300">Add your first task above to get started</p>
                </div>
              ) : (
                todos.map((todo)=>(
                  <div key={todo.id} className='w-full todo-item'>
                    <TodoItem todo={todo}/>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>Your tasks are automatically saved to your browser's local storage</p>
            <p className="mt-1">Built with ❤️ using React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
