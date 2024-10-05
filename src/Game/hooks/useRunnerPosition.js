import { useRef } from "react"

export const useRunnerPosition = () => {
    const runnerPositionRef = useRef({
        x: 0,
        y: 0
    })

    const moveRunnerUp = () => {
        runnerPositionRef.current.y -= 1
    }

    const moveRunnerDown = () => {
        runnerPositionRef.current.y +=1
        }

    const moveRunnerLeft = () => {
        runnerPositionRef.current.x -= 1
    }

    const moveRunnerRight = () => {
        runnerPositionRef.current.x +=1
    }

    return {
        runnerPosition: runnerPositionRef.current,
        moveRunnerUp,
        moveRunnerDown,
        moveRunnerLeft,
        moveRunnerRight
    }
}
