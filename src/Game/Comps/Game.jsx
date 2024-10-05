import { MovePad } from "./MovePad";
import { useAppStore } from "../../store/useAppStore";
import { useConstrolsConfig } from "../hooks/useControlsConfig";
import { useEffect } from "react";

import { useMemo } from "react";

import runnersChars from '../../SVGS/runnersSVGS/runnersChars'
import milsChars from '../../SVGS/milsSVGS/milsChars'
import beachMap from "../../store/maps/beachMap";
import { useRef } from "react";
import { useState } from "react";
import { Runner } from "./Runner";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRunnerPosition } from "../hooks/useRunnerPosition";

export default function Game () {
    //configuracion
    const {runnerPosition, moveRunnerUp, moveRunnerDown, moveRunnerLeft, moveRunnerRight} = useRunnerPosition()
    const {windowSize, config, milPosition } = useAppStore()
    useConstrolsConfig(windowSize, moveRunnerUp, moveRunnerDown, moveRunnerLeft, moveRunnerRight)
    const gameConfig = useMemo( () => {
            return {
                runner: runnersChars[config.runnerIndex],
                milComp: milsChars[config.milIndex],
                dif: config.difIndex === 0? 'easy' : config.difIndex === 1? 'med' : 'dif',
                map: beachMap[config.mapIndex]
            } 
        }, []
    )
    
    const tableContainerRef = useRef()
    const [cellDimension, setCellDimension] = useState(0)

    useEffect(()=>{
        //get game container width
        console.log(tableContainerRef.current.offsetWidth, cellDimension)
        const newWidth = tableContainerRef.current.offsetWidth / 6
        setCellDimension(newWidth)
    }, [windowSize])
    //configuracion animacion
    const {contextSafe} = useGSAP({ scope: tableContainerRef})
    const moveRunnerRightGSAP = contextSafe(() => {
        gsap.to('#runner', {
            x: '+=' + cellDimension,
            duration: 0.25,
            onStart: () => {
                moveRunnerRight()
            },})
    })
    const tryRunnerRight = () => {
        const newXposition = runnerPosition.x + 1
        if(newXposition >= gameConfig.map.table[runnerPosition.y].length) return //cambiar por variuable xtablelength???
        if(gameConfig.map.table[runnerPosition.y][newXposition] === 'x') return
        moveRunnerRightGSAP()
        console.log(runnerPosition)
    }

    const moveRunnerLeftGSAP = contextSafe(() => {
        gsap.to('#runner', {
            x: '-=' + cellDimension,
            duration: 0.25,
            onStart: () => {
                moveRunnerLeft()
            }, })
    })
    const tryRunnerLeft = () => {
        const newXposition = runnerPosition.x -1
        if(newXposition < 0) return //cambiar por variuable xtablelength???
        if(gameConfig.map.table[runnerPosition.y][newXposition] === 'x') return
        moveRunnerLeftGSAP()
        console.log(runnerPosition)
    }

    const moveRunnerUpGSAP = contextSafe(() => {
        gsap.to('#runner', {
            y: '-=' + cellDimension,
            duration: 0.25,
            onStart: () => {
                moveRunnerUp()
            },
        })
    })
    const tryRunnerUp = () => {
        const newYposition = runnerPosition.y -1
        if(newYposition < 0) return //cambiar por variuable xtablelength???
        if(gameConfig.map.table[newYposition][runnerPosition.x] === 'x') return
        moveRunnerUpGSAP()
        console.log(runnerPosition)
    }

    const moveRunnerDownGSAP = contextSafe(() => {
        gsap.to('#runner', {
            y: '+=' + cellDimension,
            duration: 0.25,
            onStart: () => {
                moveRunnerDown()
            },
            })
    })
    const tryRunnerDown = () => {
        const newYposition = runnerPosition.y +1
        if(newYposition  >= gameConfig.map.table.length) return //cambiar por variuable xtablelength???
        if(gameConfig.map.table[newYposition][runnerPosition.x] === 'x') return
        moveRunnerDownGSAP()
        console.log(runnerPosition)
    }

    console.log(runnerPosition)

    return <>
        <div className="game-container" >
            <div className="map-container" ref={tableContainerRef}>
                <gameConfig.map.MapComp />
                <Runner dimension={cellDimension} character={gameConfig.runner} isRunner={true} />
            </div>
            {windowSize.isMobile &&
             <MovePad 
                tryRunnerRight={tryRunnerRight}
                tryRunnerLeft={tryRunnerLeft}
                tryRunnerUp={tryRunnerUp}
                tryRunnerDown={tryRunnerDown}
            />}
        </div>
        
    </>
}