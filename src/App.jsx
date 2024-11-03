import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'
import OtherComponents from './components/OtherComponents'


function App() {
  const [count, setCount] = useState(0)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [turnBlack, setTurnBlack] = useState(false)
  window.addEventListener('scroll', function() {
    const scrollHeight = window.scrollY
    if(scrollHeight > 5) {
      setTurnBlack(true)
    }
    else{
      setTurnBlack(false)
    }
  })


  return (
    <div>
      {/* <div className={`${turnBlack ? "headerMainBlackContainer" : "headerMainContainer"}`}> */}
      <div className={turnBlack ? "headerMainBlackContainer" : "headerMainContainer"}>
          <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </div>
      {openSidebar ? (<Sidebar />) : (<OtherComponents turnBlack={turnBlack} setTurnBlack={setTurnBlack} />)}
    </div>
  )
}

export default App
