import { useStore } from './store'

export const useAppStore = () => {
    //states
    // const milPosition = useStore(state => state.milPosition)
    //const runnerPosition = useStore(state => state.runnerPosition)
    const page = useStore(state => state.page)
    const windowSize = useStore(state => state.windowSize)
    const config = useStore(state => state.config)
    const test = useStore(state => state.test)

    //actions
    const setWindowSize = useStore(state => state.setWindowSize)

    // const moveRunnerUp = useStore(state => state.moveRunnerUp)
    // const moveRunnerDown = useStore(state => state.moveRunnerDown)
    // const moveRunnerLeft = useStore(state => state.moveRunnerLeft)
    // const moveRunnerRight = useStore(state => state.moveRunnerRight)

    // const moveMilUp = useStore(state => state.moveMilUp)
    // const moveMilDown = useStore(state => state.moveMilDown)
    // const moveMilLeft = useStore(state => state.moveMilLeft)
    // const moveMilRight = useStore(state => state.moveMilRight)
    
    const setPage = useStore(state => state.setPage)

    const setConfiguration = useStore(state => state.setConfiguration)
    const setTest = useStore(state => state.setTest)

    return {
        page,
        windowSize,
        config,
        test,
        setWindowSize,
        setPage,
        setConfiguration,
        setTest
    }
}