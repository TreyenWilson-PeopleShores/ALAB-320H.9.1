import { useState } from 'react'
import initialState from './services/Data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {console.log(initialState)}
    </>
  )
}

export default App
