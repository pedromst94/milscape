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
import AngryBar from "./AngryBar";
import { usePutibello } from "../hooks/usePutibello";
import Test from "./Test";

gsap.registerPlugin(useGSAP);

export default function Game () {
    console.log('game: me renderizo')

    //configuracion
    const {windowSize, config, milPosition } = useAppStore()
    const [topModelIsActive, setTopModelIsActive] = useState(false)
    const [countModelIsActive, setCountDownModelActive] = useState(true)
    const [testModalIsActive, setTestModalIsActive] = useState(false)
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

    const [angryness, setAngryness] = useState(()=> {
        if(gameConfig.dif === 'easy') return 0
        if(gameConfig.dif === 'med') return 20
        if(gameConfig.dif === 'dif') return 40
    })
    
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

    //gato

    const {setPutibelloRuninng}=usePutibello({
        mapTable: gameConfig.map.table, cellDimension, tableContainerRef, catOnRoad: gameConfig.catOnRoad, dif: gameConfig.dif
    })

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
            {/* Barra de enfado */}
            <AngryBar angryness={angryness}/>
            {countModelIsActive && 
                <CountDownModel setCountDownModelActive={setCountDownModelActive}/>
            }
            {/* Model de resultado */}
            {result.finished &&
            <ResultModel 
                result={result.whoWins}
                milName={gameConfig.mil.name}
                milIdx={config.milIndex}
                runnerIdx={config.runnerIndex}
            />}
            {/* Model de arriba */}
            {topModelIsActive && 
            <TopModel 
                milName={gameConfig.mil.name} 
                milIndex={config.milIndex}
                setTopModelIsActive={setTopModelIsActive}
                putibelloAdvise={false}
            />}
            {/* Modal de preguntas */}
            {testModalIsActive &&
                <Test   
                    milName={gameConfig.mil.name.toLowerCase()}
                    setTestModalIsActive={setTestModalIsActive}
                    setMilRunning={setMilRunning}
                    setPutibelloRuninng={setPutibelloRuninng}
                    runnerName={gameConfig.runner.name.toLowerCase()}
                    setAngryness={setAngryness}
                    angryness={angryness}
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
                setMilRunning={setMilRunning}
                setTestModalIsActive={setTestModalIsActive}
            />}
        </div>
        
    </>
}