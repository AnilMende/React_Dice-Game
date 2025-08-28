import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  };
  
  return (
    <>
      {/* if true gameplay component is shown else startgame component will be present in the screnn */}
      {/* we have to pass the toggleplay as the prop to StartGame */}

     {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
     
      {/* <StartGame/> */}
    </>
  )
}

export default App
