import { useMemo } from "react"

export default function AngryBar ({angryness}) {
    
    const topAngry = useMemo(()=>{
        return angryness >= 100 ? 'top-angryness' : ''
    }, [angryness])

    return <div className='angry-bar-container' id={topAngry}>
        <div className="angry-percent" style={{
            height: `${angryness>100? 0 : 100-angryness}%`
        }}></div>
    </div>
}