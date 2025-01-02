import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor/FormColor.jsx'

function App() {
  const [list, setList] = useState(new Values('red').all(10))

  console.log(list)

  return (
    <>
      <div>
        <FormColor setList={setList}/>
        
      </div>
    </>
  )
}

export default App
