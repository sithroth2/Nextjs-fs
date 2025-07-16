import { TodoType } from '@/types/todoType'
import React, { use } from 'react'

export default function TodoComponent({ todos }: { todos: Promise<TodoType[]>}) {
    const allTodos = use(todos);
    // console.log('allTodos', allTodos);
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
            <div className="px-4 py-2">
                <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
            </div>
            <form className="w-full max-w-sm mx-auto px-4 py-2">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Add a task" />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button">
                        Add
                    </button>
                </div>
            </form>
            <ul className="divide-y divide-gray-200 px-4">
                {
                    allTodos.map((todo) => (
                        <li key={todo.id} className="py-4">
                            <div className="flex items-center">
                                <input id={`todo-${todo.id}`} name={`todo-${todo.id}`} type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                                <label htmlFor={`todo-${todo.id}`} className="ml-3 block text-gray-900">
                                    <span className="text-lg font-medium">{todo.todo} {todo.completed}</span>
                                    <span className="text-sm font-light text-gray-500">Due on 4/1/23</span>
                                </label>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
