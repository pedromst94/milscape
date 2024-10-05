import { useMemo } from "react"
import { useState } from "react"
import { useRef } from "react"

import runnersChars from "../../SVGS/runnersSVGS/runnersChars"
import milsChars from "../../SVGS/milsSVGS/milsChars"
import difs from '../../SVGS/difSVGS/difs'
import minimaps from "../../SVGS/mapsSVGS/minimaps"



export const useConfig = () => {
    const [configStep, setConfigStep] = useState(1)
    const [currentChar, setCurrentChar] = useState(0)
    const config = useRef(
        {
            runnerIndex: undefined,
            milIndex: undefined,
            difIndex: undefined,
            mapIndex: undefined
        }
    )

    const configText = useMemo(
        () => {
            if(configStep === 1) {
                return 'Elige a tu personaje:'
            }
            else if (configStep === 2) {
                return 'Elige a la suegra que te va a perseguir:'
            }
            else if (configStep === 3) {
                return 'Elige dificultad:'
            }
            else if(configStep === 4) {
                return 'Elige mapa:'
            } else if (configStep === 5) {
                return '¿Todo en orden?'
            }
        }, [configStep]
    )

    const currentConfigArray = useMemo(
        () => {
            if(configStep === 1) {
                return runnersChars
            }
            else if (configStep === 2) {
                return milsChars
            }
            else if (configStep === 3) {
                return difs
            }
            else if (configStep === 4) {
                return minimaps
            }
        }, [configStep]
    )

    const handleCharLess = () => {
        const arrayLength = currentConfigArray.length
        if(currentChar === 0) {
            setCurrentChar(arrayLength - 1)
        }
        else {
            setCurrentChar(currentChar-1)
        }
    }

    const handleCharMore = () => {
        const arrayLength = currentConfigArray.length
        if (currentChar === arrayLength -1) {
            setCurrentChar(0)
        } else {
            setCurrentChar(currentChar+1)
        }
    }

    const configStepUp = () => {
        let char

        if(configStep === 1) {
            config.current.runnerIndex = currentChar
            char = config.current.milIndex ?? 0
        }
        else if (configStep === 2) {
            config.current.milIndex = currentChar
            char = config.current.difIndex ?? 0
        }
        else if (configStep === 3) {
            config.current.difIndex = currentChar
            char = config.current.mapIndex ?? 0
        }
        else if (configStep===4) {
            config.current.mapIndex = currentChar
            char = 0
        }
        setCurrentChar(char)
        setConfigStep(configStep +1)
    }

    const configStepDown = () => {
        let char

        if(configStep === 2) {
            char = config.current.runnerIndex ?? 0
        } else if (configStep === 3) {
            char = config.current.milIndex ?? 0
        } else if (configStep === 4) {
            char = config.current.difIndex ?? 0
        }


        setCurrentChar(char)
        setConfigStep(configStep -1)
    }

    return {
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
    }
}