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
import { useRunnerAnimation } from "../hooks/useRunnerAnimation";
import TopModel from "./TopModel";
import ResultModel from "./ResultModel";
import CountDownModel from "./CountDownModel";
import { useMilMove } from "../hooks/useMilMove";
import Putibello from "./Putibello";

gsap.registerPlugin(useGSAP);

export default function Game () {
    console.log('game: me renderizo')

    //configuracion
    const {windowSize, config, milPosition } = useAppStore()
    const [topModelIsActive, setTopModelIsActive] = useState(false)
    const [countModelIsActive, setCountDownModelActive] = useState(true)
    const [result, setResult] = useState({
        finished: false,
        whoWins: ''
    })

    const gameConfig = useMemo( () => {
            return {
                runner: runnersChars[config.runnerIndex],
                mil: milsChars[config.milIndex],
                dif: config.difIndex === 0? 'easy' : config.difIndex === 1? 'med' : 'dif',
                map: beachMap[config.mapIndex],
                catOnRoad: config.difIndex >0 ? true: false
            } 
        }, []
    )
    
    const tableContainerRef = useRef()
    const [cellDimension, setCellDimension] = useState(0)

    useEffect(()=>{
        //get game container width
        const newWidth = tableContainerRef.current.getBoundingClientRect().width / 6
        console.log(newWidth)
        setCellDimension(newWidth)
    }, [windowSize])
    //configuracion animacion
    const {tryRunnerDown,
        tryRunnerLeft,
        tryRunnerUp,
        tryRunnerRight, runnerPosition} = useRunnerAnimation({tableContainerRef, cellDimension, mapTable: gameConfig.map.table, setResult})
        
    useConstrolsConfig(windowSize, tryRunnerDown,
            tryRunnerLeft,
            tryRunnerUp,
            tryRunnerRight)

        //suegra entra al ruedo jejejjeje
    const [milOnRoad, setMilOnRoad] = useState(false)
    const [milRunning, setMilRunning] = useState(false)
    
    useEffect(()=>{
        if(countModelIsActive) return
        const milDelay = 5000
        setTimeout(()=>{
            setMilOnRoad(true)
            setTopModelIsActive(true)
            setMilRunning(true)
        }, milDelay)
    }, [countModelIsActive])

    useMilMove({runnerPosition, dif: gameConfig.dif, cellDimension, mapTable: gameConfig.map.table, milRunning, setMilRunning, result, setResult, tableContainerRef})


    return <>
        <div className="game-container" >
            {countModelIsActive && 
                <CountDownModel setCountDownModelActive={setCountDownModelActive}/>
            }
            {result.finished &&
            <ResultModel 
                result={result.whoWins}
                milName={gameConfig.mil.name}
                milIdx={config.milIndex}
                runnerIdx={config.runnerIndex}
            />}
            {topModelIsActive && 
            <TopModel 
                milName={gameConfig.mil.name} 
                milIndex={config.milIndex}
                setTopModelIsActive={setTopModelIsActive}
                putibelloAdvise={false}
            />}
            <div className="map-container" ref={tableContainerRef} >
                <div id="table-mover">
                    <Runner dimension={cellDimension} character={gameConfig.runner} isRunner={true} />
                    {milOnRoad && 
                    <Runner dimension={cellDimension} character={gameConfig.mil} isRunner={false} />} 
                    {gameConfig.catOnRoad && 
                        <Putibello putibelloSrcIdx={gameConfig.dif === 'med'? 0 : 1}/>
                    }      
                    <gameConfig.map.DownLevelComp />
                    <gameConfig.map.TopLevelComp />
                </div>
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