import { useMemo } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import mil1Face from '../assets/imgs/mil1Face.svg'
import mil2Face from '../assets/imgs/mil2Face.svg'
import mil3Face from '../assets/imgs/mil3Face.svg'
import putibelloFace from '../assets/imgs/putibelloFace.svg'

gsap.registerPlugin(useGSAP);

export default function TopModel (props) {
    const modelRef = useRef()
    const {milName, milIndex, setTopModelIsActive, putibelloAdvise} = props
    const text = useMemo(() => {
        if(putibelloAdvise) return 'Putibello entra al ruedo'
        else {
            return `${milName} entra al ruedo`
        } 
    }, [])

    const imgSrc = useMemo(()=> {
        if(putibelloAdvise) return putibelloFace
        if(milIndex===0) return mil1Face
        else if(milIndex===1) return mil2Face
        else return mil3Face
    }, [])

    useGSAP(() => {
        gsap.set(modelRef.current, {y: '-15vh'})
        let tl = gsap.timeline(
            {defaults: {ease: 'back.out', duration: .5},
            onComplete: ()=> setTopModelIsActive(false)
        }
        )
        
        tl.to(modelRef.current, {y: 0})
        tl.to('.top-model-p', {scale: 1.1}),
        tl.to('.top-model-p', {scale: .9}),
        // tl.to('.top-model-p', {scale: 1.1}),
        // tl.to('.top-model-p', {scale: .9}),
        tl.to(modelRef.current, {y: '-15vh'}, '+=0.7')
    }, {scope: modelRef})
    return <>
        <div className="top-model" ref={modelRef}>
            <img src={imgSrc} alt="milFace" className="top-model-img"/>
            <p className="top-model-p">
                {text}
            </p>
        </div>
    </>
}