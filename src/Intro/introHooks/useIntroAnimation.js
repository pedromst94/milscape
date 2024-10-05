import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'

export const useIntroAnimation = () => {
    const coverContainer = useRef()
    const [isAnimating, setIsAnimating] = useState(true)

    useGSAP(()=> {
        gsap.set('#introSVG', {
            autoAlpha: 1,
            scale: 0.5,
        })
        gsap.set('.runner-intro', {
            xPercent: -600,
            scale: 1.5
        })
        gsap.set('#runner1back-intro', {
            xPercent: 0,
            yPercent: 350
        })
        const tl = gsap.timeline(
            {defaults: {ease: 'none', duration: .5},
            onComplete: () => setIsAnimating(false)
        }
        )
        tl.to('#introSVG', {
            scale: 6,
            autoAlpha: 0,
            duration: 4,
            ease: 'expo.in'
        }, '+=1')
        tl.to('#runner1-intro', {
            xPercent: 600,
            duration: 1.5
        }, '+=.2')
        tl.to('#runner3-intro', {
            xPercent: 600,
            duration: 1.5
        }, '<+=.3')
        tl.to('#runner2-intro', {
            xPercent: 600,
            duration: 1.7
        }, '<+=0.5' )
        tl.to('#excitedmil1-intro', {
            xPercent: 600,
            duration: 1.5
        }, '<+=0.5')
        
       tl.to('#runner1back-intro', {
            yPercent: 150,
            duration: 0.1
        })
        tl.to(coverContainer.current, {
            yPercent: -280,
            duration: 1.5
        })
    }, {scope: coverContainer})

    return {coverContainer, isAnimating, setIsAnimating}
}