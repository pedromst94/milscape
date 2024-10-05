import ConfigCard from "./ConfigCard"

import CoverTitle from '../../Intro/Graphics/CoverTitle'
import FinalConfigCard from "./FinalConfigCard"

import { useAppStore } from "../../store/useAppStore"
import { useConfig } from "../Hooks/useConfig"



export default function Config () {
    const {setPage, setConfiguration} = useAppStore()

    const {
        runnersChars,
        milsChars,
        difs,
        minimaps,
        configStep,
        setConfigStep,
        currentChar,
        setCurrentChar,
        config,
        configText,
        currentConfigArray,
        handleCharLess,
        handleCharMore,
        configStepUp,
        configStepDown
    } = useConfig()

    const passToGame = () => {
        setConfiguration( config.current )
        setPage('game')
    }


    return <>
           {(configStep>0 && configStep<5) &&
            <> <CoverTitle width={300} height={150}/>
            <h2 className="configTitle">
                {`${configStep}.  ${configText}`}
            </h2>
            <div className="config-card-wrapper">

                <svg
                onClick={handleCharLess}
                className='arrow-button'
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
               <ConfigCard char ={currentConfigArray[currentChar]} configStepUp={configStepUp} isMap={configStep === 4}/>
                <svg 
                onClick={handleCharMore}
                className="arrow-button"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div>
                {configStep > 1 &&
                <button onClick={configStepDown} className="config-button">
                    Atrás
                </button>}
                <button onClick={
                    configStepUp
                }
                className="config-button">
                    Elegir
                </button>
            </div>
           </> }
           {
            configStep === 5 &&
            <>
                <h2 className="final-configTitle">
                    {configText}
                </h2>
                <div className="config-final">
                    <FinalConfigCard 
                        text='Corredor' 
                        item={runnersChars[config.current.runnerIndex]}
                        setStep={()=>setConfigStep(1)}
                        setChar={()=>setCurrentChar(config.current.runnerIndex)}
                    />
                    <FinalConfigCard 
                        text='Suegra' 
                        item={milsChars[config.current.milIndex]} 
                        setStep={()=>setConfigStep(2)}
                        setChar={()=>setCurrentChar(config.current.milIndex)}
                    />
                    <FinalConfigCard 
                        text='Dificultad' 
                        item={difs[config.current.difIndex]} 
                        setStep={()=>setConfigStep(3)}
                        setChar={()=>setCurrentChar(config.current.difIndex)}
                    />
                    <FinalConfigCard 
                        text='Mapa' 
                        item={minimaps[config.current.mapIndex]} 
                        setStep={()=>setConfigStep(4)}
                        setChar={()=>setCurrentChar(config.current.mapIndex)}
                    />
                </div>
                <div>
                    <button className="config-button"
                        onClick={()=>setConfigStep(1)}
                    >
                        Volver
                    </button>
                    <button className="config-button"
                        onClick={passToGame}
                    >
                     ¡Jugar!
                    </button>
                </div>
                
            </>
           }
    </>
}