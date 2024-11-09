import { useCallback, useEffect, useMemo, useRef, } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMilPosition } from "./useMilPosition"

export const useMilMove = ({runnerPosition, dif, cellDimension, mapTable, milRunning, setMilRunning, result, setResult, tableContainerRef}) => {

    const {milPosition, moveMilUp, moveMilDown, moveMilLeft, moveMilRight} = useMilPosition()
    const {contextSafe} = useGSAP({ scope: tableContainerRef})

    const milSpeed = useMemo(() => {
        if (dif === 'easy') {
            return 1500
        } else if (dif === 'med') {
            return 1000
        } else if (dif === 'dif') {
            return 500
        }
    }, [])

    const checkResult = useCallback(({x, y}) => {
        if (x === runnerPosition.x && y === runnerPosition.y) {
            setResult({
                finished: true,
                whoWins: 'milWins'
            })
            setMilRunning(false)
            return true
        }
        else return false
    }, [result.finished])

    const moveMilRightGSAP = contextSafe(() => {
        gsap.to('#mil', {
            x: '+=' + cellDimension,
            duration: 0.2,
        })
    })
    const moveMilLeftGSAP = contextSafe(() => {
        gsap.to('#mil', {
            x: '-=' + cellDimension,
            duration: 0.2,
         })
    })
    const moveMilUpGSAP = contextSafe(() => {
        gsap.to('#mil', {
            y: '-=' + cellDimension,
            duration: 0.2,
        })
    })
    const moveMilDownGSAP = contextSafe(() => {
        gsap.to('#mil', {
            y: '+=' + cellDimension,
            duration: 0.2,
            })
    })


    function tryMilDown () {
        if(mapTable[milPosition.y + 1][milPosition.x] === 'x') return false
        if(milPosition.y +1 >= mapTable.length) return false
        return true
    }

    function tryMilUp () {
        if(milPosition.y === 0) return false
        if(mapTable[milPosition.y - 1][milPosition.x] === 'x') return false
        return true
    }

    function tryMilRight () {
        if(milPosition.x + 1 >= mapTable[milPosition.y].length) return false
        if(mapTable[milPosition.y][milPosition.x + 1] === 'x') return false
        return true
    }

    function tryMilLeft () {
        if(milPosition.x === 0) return false
        if(mapTable[milPosition.y][milPosition.x - 1] === 'x') return false
        return true
    }

    function completeMilMove (direction) {
        let newMilPosition

        if(direction === 'u') {
            newMilPosition = moveMilUp()
            moveMilUpGSAP()
            return newMilPosition
        } else if (direction === 'l') {
            newMilPosition = moveMilLeft()
            moveMilLeftGSAP()
            return newMilPosition
        } else if (direction === 'r') {
            newMilPosition = moveMilRight()
            moveMilRightGSAP()
            return newMilPosition
        } else if (direction === 'd') {
            newMilPosition = moveMilDown()
            moveMilDownGSAP()
            return newMilPosition
        }
    }


    function milMove () {
        const xDistance = runnerPosition.x - milPosition.x
        const yDistance = runnerPosition.y - milPosition.y
        const xDistanceAbsolute = Math.abs(xDistance)
        const yDistanceAbsolute = Math.abs(yDistance)

        if(runnerPosition.y >= milPosition.y && milPosition.x === 4 && milPosition.y === 19) {
            return completeMilMove('d')
        }
        if(yDistanceAbsolute >= xDistanceAbsolute) { //estan a distinta altura
            if(yDistance >= 0 && milPosition.y === 19 && milPosition.x < 4){ //posiciones especiales
                return completeMilMove('r')
            }
            if(yDistance >= 0) {                     //runner esta debajo
                if (tryMilDown()) {
                    return completeMilMove('d')
                } else if (xDistance >= 0 && tryMilRight()) { // si no puede moverse hacia abajointentamos dereca
                    return completeMilMove('r')
                } else if (xDistance < 0 && tryMilLeft()) { // si no puede a la derecha intentamos izquireda
                    return completeMilMove('l')
                } else {                                    //si no, hacia arriba
                    return completeMilMove('u')
                }
            } else {                                //runner esta arriba
                if(tryMilUp()){                     //intentemoas hacia arriba
                    return completeMilMove('u')
                } else if(xDistance > 0 && tryMilRight()) {
                    return completeMilMove('r')
                } else if(xDistance <= 0 && tryMilLeft()) {
                    return completeMilMove('l')
                } else {
                    return completeMilMove('d')
                }
            }
        }
        else if (yDistanceAbsolute < xDistanceAbsolute) {       //estan mas alejados horizontal que verticalmente
            if (xDistance >= 0 ) {                                //esta a la derecha?
                if(tryMilRight()) {
                    return completeMilMove('r')
                } else if (yDistance >= 0 && tryMilDown()) {
                     return completeMilMove('d')
                } else if (yDistance < 0 && tryMilUp()) {
                    return completeMilMove('u')
                } else {
                    return completeMilMove('l')
                }
            } else {
                if(tryMilLeft()) {
                    return completeMilMove('l')
                } else if(yDistance >= 0 && tryMilDown()) {
                    return completeMilMove('d')
                } else if (yDistance < 0 && tryMilUp()) {
                    return completeMilMove('u')
                } else {
                    return completeMilMove('r')
                }
            }
        }
    }

    const moveAndCheck = () => {
        const actualMilPosition = milMove()
        console.log('milpositoin',actualMilPosition)
        return checkResult( {
            x: actualMilPosition.x,
            y: actualMilPosition.y,
        })
    }

    let intervalId

    useEffect(()=> {
        if(milRunning && !result.finished) {
            intervalId = setInterval(moveAndCheck, milSpeed)
        }

        return () => clearInterval(intervalId)

    }, [milRunning, result])
 
}