// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]
  let nameArr =  ["vishal","vivek","anuj","ankit"]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" /> */}
      {
        nameArr.map((name,i)=>(
          <Card key={i} username={name} btnText='visit Me'/>
        ))
      }
    </>
  )
}

export default App
