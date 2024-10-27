import { useRef } from "react"

export const useMilPosition = () => {
    let milPositionRef = useRef({
        x: 0,
        y: 0
    })

    const moveMilUp = () => {
        let newYMilPosition = milPositionRef.current.y -1
        milPositionRef.current.y = newYMilPosition
        return {
            x: milPositionRef.current.x,
            y: newYMilPosition
        }
    }

    const moveMilDown = () => {
        let newYMilPosition = milPositionRef.current.y + 1
        milPositionRef.current.y = newYMilPosition
        return {
            x: milPositionRef.current.x,
            y: newYMilPosition
        }
        }

    const moveMilLeft = () => {
        let newXMilPosition = milPositionRef.current.x - 1
        milPositionRef.current.x = newXMilPosition
        return {
            x: newXMilPosition,
            y: milPositionRef.current.y
        }
    }

    const moveMilRight = () => {
        let newXMilPosition = milPositionRef.current.x + 1
        milPositionRef.current.x = newXMilPosition
        return {
            x: newXMilPosition,
            y: milPositionRef.current.y
        }
    }

    return {
        milPosition: milPositionRef.current,
        moveMilUp,
        moveMilDown,
        moveMilLeft,
        moveMilRight
    }
}
