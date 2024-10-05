import './App.css'
import { Intro } from './Intro/IntroComps/Intro'
import Config from './Config/Comps/Config'

import { useAppStore } from './store/useAppStore'
import useWindowSize from './helpers/hooks/useWindowSize'
import Game from './Game/Comps/Game'



function App() {
//  const table = useStore((state) => state.table)
  const {page, setWindowSize} = useAppStore()
  const windowSize = useWindowSize()
  setWindowSize(windowSize)
  
  return (
    <>
    <main>
    {page === 'cover' && <Intro />}
    {page === 'config' && <Config />}
    {page === 'game' && <Game />}
    </main>
    </>
  )
}

export default App
