import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { route } from '@/router'
function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <div>{useRoutes(route)}</div>
      </Suspense>
    </div>
  )
}

export default App
