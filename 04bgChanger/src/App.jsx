import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  let colorArray = ["red","blue","green","yellow","black"]

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {
            colorArray.map((color,key)=>(
            <button key={key}
            onClick={() => setColor(color)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: color}}
            >{color}</button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
