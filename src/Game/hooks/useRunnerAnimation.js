import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useRunnerPosition } from './useRunnerPosition'


export const useRunnerAnimation = ({tableContainerRef, cellDimension, mapTable, setResult}) => {

    const {runnerPosition, moveRunnerUp, moveRunnerDown, moveRunnerLeft, moveRunnerRight} = useRunnerPosition()
    const visualPosition = useRef(0)

    const checkResult = (x, y) => {
        if(mapTable[y][x] === 't') return setResult({finished: true, whoWins: 'tomasinWins'})
        else if(mapTable[y][x] === 'v') return setResult({finished: true, whoWins: 'runnerWins'})
        else return
    }

    const {contextSafe} = useGSAP({ scope: tableContainerRef})
    const moveTableUp = contextSafe(() => {
        gsap.to('#table-mover', {
            y: '-=' + (2*cellDimension),
            duration: .2,
            delay: .1,
            onStart: () => {
                visualPosition.current -=2
            }
        })
    })

    const moveTableDown = contextSafe(() => {
        gsap.to('#table-mover', {
            y: '+=' + (2*cellDimension),
            duration: .2,
            delay: .1,
            onStart: () => {
                visualPosition.current +=2
            }
        })
    })

    const checkTableUp = () => {
        if(visualPosition.current > 3) {
            moveTableUp()
        }
    }

    const checkTableDown = () => {
        if(visualPosition.current <2 && runnerPosition.y > 2) {
            moveTableDown()
        }
    }
    const moveRunnerRightGSAP = contextSafe(() => {
        gsap.to('#runner', {
            x: '+=' + cellDimension,
            duration: 0.2,
            onStart: () => {
                moveRunnerRight()
                return
            },})
    })
    const moveRunnerLeftGSAP = contextSafe(() => {
        gsap.to('#runner', {
            x: '-=' + cellDimension,
            duration: 0.2,
            onStart: () => {
                moveRunnerLeft()
                return
            }, })
    })
    const moveRunnerUpGSAP = contextSafe(() => {
        gsap.to('#runner', {
            y: '-=' + cellDimension,
            duration: 0.2,
            onStart: () => {
                moveRunnerUp()
                visualPosition.current -= 1
                return
            },
            onComplete: () => {
                checkTableDown()
            }
        })
    })
    const moveRunnerDownGSAP = contextSafe(() => {
        gsap.to('#runner', {
            y: '+=' + cellDimension,
            duration: 0.2,
            onStart: () => {
                moveRunnerDown()
                visualPosition.current += 1
                return
            },
            onComplete: () => {
                checkTableUp()
            }
            })
    })



    const tryRunnerRight = () => {
        const newXposition = runnerPosition.x + 1
        if(newXposition >= mapTable[runnerPosition.y].length) return //cambiar por variuable xtablelength???
        if(mapTable[runnerPosition.y][newXposition] === 'x') return
        moveRunnerRightGSAP()
        console.log(runnerPosition)
        checkResult(newXposition, runnerPosition.y)
    }


    const tryRunnerLeft = () => {
        const newXposition = runnerPosition.x -1
        if(newXposition < 0) return //cambiar por variuable xtablelength???
        if(mapTable[runnerPosition.y][newXposition] === 'x') return
        moveRunnerLeftGSAP()
        console.log(runnerPosition)
        checkResult(newXposition, runnerPosition.y)
    }


    const tryRunnerUp = () => {
        const newYposition = runnerPosition.y -1
        if(newYposition < 0) return //cambiar por variuable xtablelength???
        if(mapTable[newYposition][runnerPosition.x] === 'x') return
        moveRunnerUpGSAP()
        console.log(runnerPosition, visualPosition.current)
        checkResult(runnerPosition.x, newYposition)
    }


    const tryRunnerDown = () => {
        const newYposition = runnerPosition.y +1
        if(newYposition  >= mapTable.length) return //cambiar por variuable xtablelength???
        if(mapTable[newYposition][runnerPosition.x] === 'x') return
        moveRunnerDownGSAP()
        console.log(runnerPosition, visualPosition.current)
        checkResult(runnerPosition.x, newYposition)
    }

    return {
        tryRunnerDown,
        tryRunnerLeft,
        tryRunnerUp,
        tryRunnerRight, 
        runnerPosition
    }
}