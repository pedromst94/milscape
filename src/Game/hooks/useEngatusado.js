import { useEffect, useState } from "react"

export const useEngatusado = ({runnerPosition, putibelloPosition}) => {

    const [engatusado, setEngatusado] = useState(false)

    const checkEngatusation = ({pPosition = putibelloPosition, rPosition = runnerPosition}) => {
        console.log('putibello:', putibelloPosition, 'runner:', runnerPosition)
        if(pPosition.x === rPosition.x && pPosition.y === rPosition.y && !engatusado) {
            setEngatusado(true)
        }
    }

    useEffect(() => {
        let toId
        if(engatusado) {
            toId = setTimeout(() => {
                setEngatusado(false)
            }, 5000);
        }

        return () => clearTimeout(toId)
    }, [engatusado])

    return {
        engatusado,
        setEngatusado,
        checkEngatusation
    }
}