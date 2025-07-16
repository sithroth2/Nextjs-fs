import TodoComponent from '@/components/todos/TodoComponent'
import { TodoType } from '@/types/todoType';
import React, { Suspense } from 'react'

async function getTodo(): Promise<TodoType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}todos`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.todos as TodoType[];
}

export default function page() {
  const todos = getTodo();
  return (
    <div className='flex justify-center items-center h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <TodoComponent
        todos={todos}
      /></Suspense>
    </div>
  )
}
