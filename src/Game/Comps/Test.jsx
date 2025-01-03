import { useState, useMemo, useEffect, useRef } from 'react'
import {MILTEST} from '../assets/test_assets/milTest'
import milFaces from '../assets/test_assets/milFaces/milFaces'
import runnerFaces from '../assets/test_assets/runnerFaces/runnerFaces'
import testTitle from '../assets/test_assets/title.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useAppStore } from '../../store/useAppStore'


export default function Test ({milName, setTestModalIsActive, setMilRunning,
     setPutibelloRuninng, runnerName, angryness, setAngryness, isFirstTest, setIsFirstTest}) {
    const {test, setTest} = useAppStore()

    let actualTest

    const [testStage, setTestStage] = useState(0)
    const [choosedOption, setChoosedOption] = useState()
    const containerRef = useRef()

    gsap.registerPlugin(useGSAP);
    const {contextSafe} = useGSAP({scope: containerRef})
    //desactivar movimiento del gato/mil
    useEffect(()=> {
        setMilRunning(false)
        setPutibelloRuninng(false)
    }, [])

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

    const questionObj = useMemo(()=> {
        let randomQuestion
        let randomIdx
        if(test.length > 0) {
            randomIdx = Math.floor(Math.random() * test.length)
            randomQuestion = test[randomIdx]
            actualTest = test.filter((question, index) => index !== randomIdx)
        } else {
            randomIdx = Math.floor(Math.random() * MILTEST[milName].length)
            randomQuestion = MILTEST[milName][randomIdx] //get a random question
            actualTest = MILTEST[milName].filter((question, index) => index !== randomIdx)
        }
        shuffle(randomQuestion.options) //barajamos opciones de respuesta
        return randomQuestion
    }, [])

    const setModalOff = () => {
        setTestModalIsActive(false)
        if (angryness < 100) setAngryness(angryness += questionObj.options[choosedOption].angryness_reaction)
        setMilRunning(true)
        setPutibelloRuninng(true)
        if(isFirstTest) setIsFirstTest(false)
    }

    const changeStage = contextSafe(()=> {
        gsap.to('#test-questions', {
            xPercent: -100,
            duration: .5,
            ease: 'power2.in',
            onComplete: () => setTestStage(1)
        })
    })

    useGSAP(()=> {
        if(testStage===0) {
            if(isFirstTest){
                gsap.set('#test-title', {autoAlpha: 1, scale: .3})
                gsap.set('.test-container', {yPercent: 100})
                const tl = gsap.timeline({
                    defaults: {ease: 'none', duration: 1},
                    onComplete: () => {
                        if(isFirstTest) setIsFirstTest(false)
                    }
                })
                tl.to('#test-title', {
                        scale: 1.5,
                        duration: 1.5
                    })
                tl.to('.test-container', {yPercent: 0}, '<')
                tl.to('#test-title', {autoAlpha: 0, scale:3, duration: 1})
            } else {
                gsap.from('.test-container', {
                         yPercent: 100
                     })
                gsap.to('.test-container', {
                    yPercent: 0,
                    duration: 1
                 })
            }


        }
        if(testStage === 1) {
            gsap.to('#test-result', {
                scale: 1,
                duration: .5,
                ease: 'power2.in'
            })
        }
    }, {scope: containerRef, dependencies: [testStage]})

    const desappear = contextSafe(()=> {
        gsap.to('.test-container', {
            scale: 5,
            yPercent: 60,
            duration: 1,
            ease: 'power4.out',
            onComplete: ()=>setModalOff()
        })
    })

    const normalFace = milFaces[milName].normalFace
    const runnerFace = runnerFaces[runnerName]

    const selectedAnswerBackground = (answerIdx)=>{
        if(choosedOption === null) return ''
        if(choosedOption === answerIdx) {
            if(questionObj.options[answerIdx].angryness_reaction === 0) return 'green'
            if(questionObj.options[answerIdx].angryness_reaction <= 20) return 'yellow'
            if(questionObj.options[answerIdx].angryness_reaction <= 40) return 'orange'
            return 'red'
        } else {
            return ''
        }
    }
    //creador de handle clicks
    const createHandleClick = (optionIdx) => () => {
        setChoosedOption(optionIdx)
        changeStage()
    }

    function getResultImage ()  {
        if(questionObj.options[choosedOption]?.angryness_reaction === 0) return milFaces[milName].normalFace
        if(questionObj.options[choosedOption]?.angryness_reaction <= 30) return milFaces[milName].angryFace
        return milFaces[milName].furiousFace
    }
    //autodesaparicion
    useEffect(()=> {
        let timeOutId 
        if(testStage === 1) {
            timeOutId = setTimeout(desappear, 3000)
        }
        return () => clearTimeout(timeOutId)
    }, [testStage])
    //borrar las preguntas ya usadas
    useEffect(()=> {
        return () => {
            setTest(actualTest)
        }
    }, [])

    return <>
    <div className="test-container-background" ref={containerRef}>
        {isFirstTest && 
            <img src={testTitle} alt="test title" id="test-title" />
        }
        <div className="test-container">
        {testStage === 0 &&      //paso 1, preguntas
            <div id='test-questions'>
                <div className="faces-container">
                    <img src={runnerFace} alt="cara de la puta suegra" className='test-face'/>
                    <img src={normalFace} alt="cara de la puta suegra" className='test-face' id='test-mil-face'/>
                </div>
                <p>
                    {questionObj.question}
                </p>
                <div className="answers-container">
                    {questionObj.options.map((option, index) => {
                            return <p 
                                    className='answer-item' 
                                    key={`answer_${index}`} 
                                    onClick={createHandleClick(index)}
                                    style={{
                                        backgroundColor: selectedAnswerBackground(index)
                                    }}
                                    >
                                {option.answer}
                            </p> 
                })}
            </div>
            </div>}
            {testStage=== 1 &&          //paso 2 resultado
            <div id='test-result' onClick={()=> desappear()}>
                <img src={getResultImage()} alt="mil puta" className='test-mil-face-result'/>
                <p className='bigger-letter-size'>
                    {questionObj.options[choosedOption].mil_msg}
                </p>
                <p
                    style={{
                        color: selectedAnswerBackground(choosedOption),
                        fontWeight: 'bold'
                    }}
                >
                    {questionObj.options[choosedOption].angryness_reaction > 0 ?
                        `Furia subiendo un ${questionObj.options[choosedOption].angryness_reaction}%...` :
                        '¡Respuesta correcta!'
                    }
                </p>
            </div>
            }
        </div>
    </div>
        
    </>
}