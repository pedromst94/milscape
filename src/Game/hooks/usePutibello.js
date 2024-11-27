import { usePutibelloPosition } from "./usePutibelloPosition"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useMemo, useState } from "react";

export const usePutibello = ({mapTable, cellDimension, tableContainerRef, catOnRoad, dif}) => {

    gsap.registerPlugin(useGSAP);
    const {contextSafe} = useGSAP({scope: tableContainerRef})
    const {putibelloPosition, getInitialPutibelloPosition, movePutibelloUp, movePutibelloDown, movePutibelloLeft, movePutibelloRight} = usePutibelloPosition()

    const [putibelloRunning, setPutibelloRuninng] = useState(catOnRoad)
    const RANDOMLIMIT = useMemo(()=> {
        if(dif === 'dif') return 0.25
        if(dif === 'med') return 0.6
        else return undefined
    }, [dif])
    const MOVES = ['u', 'd', 'l', 'r']
    const putibelloSpeed = (dif === 'med')? 3000 : 1500


    //darle lugar aleatorio en el mapa
    useGSAP(()=> {

        if(catOnRoad && cellDimension > 0) {
            const initialPutibelloPosition = getInitialPutibelloPosition(mapTable)

            gsap.set('#putibello', {
                x: (initialPutibelloPosition.x * cellDimension),
                y: (initialPutibelloPosition.y * cellDimension),
            })
        }
    }, {dependencies: [cellDimension], scope: tableContainerRef, revertOnUpdate: true})

    // fucnionees mover el gatooo

    const movePutibelloRightGSAP = contextSafe(() => {
        gsap.to('#putibello', {
            x: '+=' + cellDimension,
            duration: 0.2,
        })
    })
    const movePutibelloLeftGSAP = contextSafe(() => {
        gsap.to('#putibello', {
            x: '-=' + cellDimension,
            duration: 0.2,
         })
    })
    const movePutibelloUpGSAP = contextSafe(() => {
        gsap.to('#putibello', {
            y: '-=' + cellDimension,
            duration: 0.2,
        })
    })
    const movePutibelloDownGSAP = contextSafe(() => {
        gsap.to('#putibello', {
            y: '+=' + cellDimension,
            duration: 0.2,
            })
    })


    const checkCell = (x, y) => {
        if(y < 0 || y >= mapTable.length) return false
        if(x < 0 || x >= mapTable[0].length) return false
        if (mapTable[y][x] !== 'o') return false
        return true
    }

    const checkMove = (direction) => {
        switch(direction) {
            case 'u': 
                return checkCell(putibelloPosition.x, putibelloPosition.y - 1)
            case 'l':
                return checkCell(putibelloPosition.x -1, putibelloPosition.y)
            case 'r':
                return checkCell(putibelloPosition + 1, putibelloPosition.y)
            case 'd':
                return checkCell(putibelloPosition.x, putibelloPosition.y +1)
        }
    }

    const getRandomDirection = () => MOVES[Math.floor(Math.random() * 4)]

    const randomCatMove = () => {
        let validMove = false
        let direction 
        while(!validMove) {
            direction = getRandomDirection()
            validMove = checkMove(direction)
            console.log('me colgue')
        }

        if(direction === 'u') {
            movePutibelloUp()
            movePutibelloUpGSAP()
        } else if (direction === 'l') {
            movePutibelloLeft()
            movePutibelloLeftGSAP()
        } else if (direction === 'r') {
            movePutibelloRight()
            movePutibelloRightGSAP()
        } else if (direction === 'd') {
            movePutibelloDown()
            movePutibelloDownGSAP()
        }
    }

    let intervalId

    useEffect(()=> {
        if(putibelloRunning && catOnRoad) {
            intervalId = setInterval(()=>{
                if(Math.random() > RANDOMLIMIT) {
                    randomCatMove()
                    console.log('catpositoin', putibelloPosition)
                }
            }, putibelloSpeed)
        }

        return () => clearInterval(intervalId)
    }, [putibelloRunning, cellDimension])


    return {
        putibelloPosition,
        setPutibelloRuninng
    }
}