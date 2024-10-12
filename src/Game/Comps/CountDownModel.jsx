import { useEffect } from "react"
import { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function CountDownModel (props) {
    const countDown = useRef()
    const {setCountDownModelActive} = props
    const [time, setTime] = useState(3)

    useEffect(()=>{
        let intervalId
        if(time===0) return setCountDownModelActive(false)
        
        intervalId = setInterval(()=>setTime(time -1), 1000)

        return () => clearInterval(intervalId)
    }, [time])

    useGSAP(()=>{
        gsap.set(countDown.current, {scale: 6})
        gsap.to(countDown.current, {scale: 0, duration: 1, ease: 'power2.in'})
    }, {dependencies: [time], scope: countDown})

    return <>
        <div className="count-down-model">
            <h2>¿Preparado?</h2>
            <p ref={countDown}>{time}</p>
        </div>
    </>
}