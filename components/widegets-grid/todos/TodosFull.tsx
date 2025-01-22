// components/widegets-grid/todos/TodosFull.tsx

import React from 'react'
import { TodosFullContent } from "./TodosFullContent"

export const TodosFull: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="fixed left-3 top-3 text-title-card">
      Todo's
      </div>

      <>
      {/* content */}
        <div className="fixed top-12 right-0 left-0 bottom-0 rounded-t-2xl p-2 border">
          <TodosFullContent/>
        </div>
      </>
    </>
  )
}
