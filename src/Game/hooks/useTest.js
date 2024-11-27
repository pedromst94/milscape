import { useEffect, useRef, useMemo, useState } from "react"

export const useTest = ({testModalIsActive, setTestModalIsActive, dif, milRunning, finished}) => {
    const counter = useRef(0)
    const [isFirstTest, setIsFirstTest] = useState(true)

    const timerValue = useMemo(()=> {
        switch(dif){
            case 'easy': 
                return 1000
            case 'med':
                return 700
            case 'dif':
                return 500
        }
    }, [dif])

    function checkCounter (count) {
        if(count >= 10) {
            setTestModalIsActive(true)
            return true
        }
        return false
    }

    function incrementCounter () {
        console.log('COUNTER, ', counter.current)
        let newCount = counter.current + 1
        let activateModal = checkCounter(newCount)
        if (activateModal) {
            counter.current = 0
        } else {
            counter.current += 1
        }
    }

    useEffect(()=> {
        let testIntervalId
        console.log('11111111111')
        if(milRunning && !testModalIsActive && !finished) {
            console.log('2222222222')
            testIntervalId = setInterval(incrementCounter, timerValue)
        }

        return () => clearInterval(testIntervalId)
    }, [testModalIsActive, milRunning, finished]) 

    return {isFirstTest, setIsFirstTest}
}