import { useRef } from "react"

export const usePutibelloPosition = () => {
    const putibelloPositionRef = useRef({
        x: 0,
        y: 0
    })

    const getInitialPutibelloPosition = (mapTable) => {
        let validPosition = false

        while(!validPosition) {
            let xPosition = Math.floor(Math.random() * mapTable[0].length)
            let yPosition = Math.floor(Math.random() * mapTable.length)
            if(mapTable[yPosition][xPosition] === 'o') {
                putibelloPositionRef.current.x = xPosition
                putibelloPositionRef.current.y = yPosition
                validPosition = true
            }
        }
        return putibelloPositionRef.current
    }

    const movePutibelloUp = () => {
        putibelloPositionRef.current.y -= 1
    }

    const movePutibelloDown = () => {
        putibelloPositionRef.current.y +=1
        }

    const movePutibelloLeft = () => {
        putibelloPositionRef.current.x -= 1
    }

    const movePutibelloRight = () => {
        putibelloPositionRef.current.x +=1
    }

    return {
        putibelloPosition: putibelloPositionRef.current,
        getInitialPutibelloPosition,
        movePutibelloUp,
        movePutibelloDown,
        movePutibelloLeft,
        movePutibelloRight
    }
}
