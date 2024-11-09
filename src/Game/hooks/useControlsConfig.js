import { useEffect } from "react"

export const useConstrolsConfig = (windowSize, tryRunnerDown,
    tryRunnerLeft,
    tryRunnerUp,
    tryRunnerRight) => {
    const {isMobile} = windowSize

    useEffect(() =>{
        const handlePressDown = (e) => {
            if(e.key === 'w') {
                tryRunnerUp()
                return
            } else if(e.key === 'a') {
                tryRunnerLeft()
                return
            } else if(e.key === 's') {
                tryRunnerDown()
                return
            } else if(e.key === 'd') {
                tryRunnerRight()
                return
            } else {
                return
            }
        }

        if(!isMobile) {
            document.addEventListener('keydown', handlePressDown)
            return () => document.removeEventListener('keydown', handlePressDown)
        }
    }  
    ,[windowSize, tryRunnerDown, tryRunnerLeft, tryRunnerRight, tryRunnerUp])
}