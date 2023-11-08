import { useEffect, useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [num1] = useState(5)
  const [num2] = useState(5)

  const sum = () => num1 + num2
  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`)
  }, [sum])
  return (
    <main className="App">
        <input type="text" placeholder="input" 
        value={userInput} onChange={(e) => setUserInput(e.target.value)} 
        />
        <h1>outPut: {userInput || ".."}</h1>
    </main>
  )
}

export default App
