import { useEffect } from "react"

export const useConstrolsConfig = (windowSize, moveRunnerUp, moveRunnerDown, moveRunnerLeft, moveRunnerRight) => {
    const {isMobile} = windowSize

    useEffect(() =>{
        const handlePressDown = (e) => {
            if(e.key === 'w') {
                moveRunnerUp()
                return
            } else if(e.key === 'a') {
                moveRunnerLeft()
                return
            } else if(e.key === 's') {
                moveRunnerDown()
                return
            } else if(e.key === 'd') {
                moveRunnerRight()
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
    ,[windowSize])
}