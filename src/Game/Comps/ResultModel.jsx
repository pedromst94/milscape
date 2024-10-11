import { useMemo } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import tomasin from '../assets/imgs/tomasin.svg'
import happyWin from '../assets/imgs/happyWin.svg'
import sadLoose from '../assets/imgs/sadLoose.svg'
import { useRef } from 'react'

export default function ResultModel (props) {
    const resultModelRef = useRef()
    useGSAP(()=>{
        gsap.set(resultModelRef.current, {y: '100vh'})
        const tl = gsap.timeline({defaults: {
            ease: 'power1.out',
            duration: 1.5
        }})

        tl.to(resultModelRef.current, {y: 0}, .5)
    }, {scope: resultModelRef})

    const {result, milName} = props

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
            return happyWin
        } else if (result === 'milWins') {
            return sadLoose
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