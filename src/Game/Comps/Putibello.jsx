import quietPutibello from '../assets/imgs/quietPutibello.svg'
import angryPutibello from '../assets/imgs/angryPutibello.svg'
import { useMemo } from 'react'

export default function Putibello({putibelloSrcIdx, dimension}) {
    const putibelloImgSrc = useMemo(()=> {
        if(putibelloSrcIdx === 0) return quietPutibello
        if(putibelloSrcIdx === 1) return angryPutibello
    }, [])
    return <div 
            id="putibello" 
            className="char-container"
            style={{
                width: dimension,
                height: dimension
              }}
        >
        <img src={putibelloImgSrc} alt="putibello" id='putibelloImg'/>
    </div>
}