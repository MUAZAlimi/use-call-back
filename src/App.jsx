import { useEffect, useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [num1] = useState(4)
  const [num2] = useState(5)

  const sum = () => num1 + num2
  useEffect(() => {
    
  }, [])
  
  return (
    
  )
}

export default App
