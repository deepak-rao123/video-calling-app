import { Route, Routes } from "react-router-dom"
import HomePage from "./components/homePage/HomePage"
import Room from "./components/room/Room"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/room/:roomId" element={<Room/>}/>
        
      </Routes>
    </>
  )
}

export default App
