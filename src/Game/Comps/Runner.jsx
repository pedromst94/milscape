import { useCallback } from "react"
import { useAppStore } from "../../store/useAppStore"

 /*{
          position: "absolute",
          top: getYPosition(),
          left: getXPosition(),
          borderRadius: '50%',
          width: 40,
          height: 40,
          backgroundColor: 'blue',
          zIndex: '5',
          transition: 'all 0.1s linear'
        }*/

export function Runner ({dimension, character, isRunner}) {
   /* const runnerPosition = useStore(state => state.runnerPosition)
    const {x,y} = runnerPosition
    const {runnerPosition} = useAppStore()
    const {x,y} = runnerPosition
    
    const getXPosition = useCallback(() => {
      return x*40
    }, [x])

    const getYPosition = useCallback(()=> {
      return y*40
    }, [y])*/
    const Char = character.imageComp

    return <>
      <div 
        className="char-container"
        id={isRunner? 'runner' : 'mil'}
        style={{
          width: dimension,
          height: dimension
        }}
           >
        <Char width={dimension} height={dimension} />

      </div>
    </>
}