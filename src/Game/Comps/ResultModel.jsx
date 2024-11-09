import { useMemo } from 'react'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import tomasin from '../assets/imgs/tomasin.svg'
import happyWin from '../assets/imgs/happyWin.svg'
import sadLoose from '../assets/imgs/sadLoose.svg'
import mil1Face from '../assets/imgs/mil1Face.svg'
import mil2Face from '../assets/imgs/mil2Face.svg'
import mil3Face from '../assets/imgs/mil3Face.svg'
import runner1Face from '../assets/imgs/runner1Face.svg'
import runner2Face from '../assets/imgs/runner2Face.svg'
import runner3Face from '../assets/imgs/runner3Face.svg'


export default function ResultModel (props) {
    const {result, milName, milIdx, runnerIdx} = props

    const resultModelRef = useRef()
    useGSAP(()=>{
        gsap.set(resultModelRef.current, {y: '100vh'})
        const tl = gsap.timeline({defaults: {
            ease: 'power1.out',
            duration: .75
        }})

        tl.to(resultModelRef.current, {y: 0}, .5)
    }, {scope: resultModelRef})


    const resultTitle = useMemo(()=> {
        if(result === 'runnerWins') {
            return '¡Has ganado!'
        } else if (result === 'milWins') {
            return '¡Perdiste!'
        } else {
            return 'Tomasín el Peligroso ha ganado'
        }
    }, [])

    const resultText = useMemo(()=> {
        if(result === 'runnerWins') {
            return 'Has conseguido escapar de tu malvada suegra (por ahora). ¡Enhorabuena!'
        } else if (result === 'milWins') {
            return `${milName} te ha atrapado`
        } else {
            return 'Has sido devorado por Tomasín el peligroso.'
        }
    }, [])

    const resultTitleStyle = useMemo(() => {
        if(result === 'runnerWins') {
            return 'green'
        } else if (result === 'milWins') {
            return 'red'
        } else {
            return 'yellow'
        }
    }, [])

    const resultImg = useMemo(()=> {
        if(result === 'runnerWins') {
            switch (runnerIdx) {
                case 0:
                    return runner1Face
                case 1:
                    return runner2Face
                case 2:
                    return runner3Face
                default:
                    return happyWin
            }
        } else if (result === 'milWins') {
            switch (milIdx) {
                case 0:
                    return mil1Face
                case 1:
                    return mil2Face
                case 2:
                    return mil3Face
                default:
                    return sadLoose
            }
        } else {
            return tomasin
        }
    }, [])


    return <>
        <div className="result-model-background" ref={resultModelRef}>
            <div className="result-model">
                <h2 className={resultTitleStyle}>{resultTitle}</h2>
                <p>{resultText}</p>
                <img src={resultImg} alt="result image" />
            </div>
        </div>
    </>
}