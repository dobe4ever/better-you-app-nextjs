// components/fullscreen/todos-page.tsx
import React from 'react'

export const TodosPage: React.FC = () => {
  return (
    <div className="fixed inset-0 mt-12 bg-white">

      <div className="flex flex-col overflow-hidden gap-3 rounded-t-3xl bg-gray-200 m-0 p-2">

        <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
          <h1 className="text-title-orange border">Todos</h1>
          {/* Add your todos list implementation here */}
        </div>

        <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
          <h1 className="text-title-orange">Header</h1>
          {/* Add your todos list implementation here */}
        </div>

        <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
          <h1 className="text-title-orange">Todos chcklist</h1>
          {/* Add your todos list implementation here */}
        </div>

        <div className="flex-1 overflow-hidden flex flex-col gap-3 border">
          <h1 className="text-title-orange">Footer</h1>
          {/* Add your todos list implementation here */}
        </div>

      </div>

    </div>
  )
}