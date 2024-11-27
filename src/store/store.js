import {create} from 'zustand'

export const useStore = create((set, get) => ({
    // milPosition: { x:0, y:0 },
    //runnerPosition: { x:0, y:0 },
    page: 'cover',
    windowSize: {},
    config: {},
    test: [],
    setWindowSize: (newWindowSize) => {
        set({ windowSize: newWindowSize })
    },
    // moveRunnerUp: () => {
    //     set((state)=> ({
    //         runnerPosition: { ...state.runnerPosition, y: state.runnerPosition.y -1}
    //     }))
    // },
    // moveRunnerDown: () => {
    //     set((state)=> ({
    //         runnerPosition: { ...state.runnerPosition, y: state.runnerPosition.y +1}
    //     }))
    // },
    // moveRunnerLeft: () => {
    //     set((state)=> ({
    //         runnerPosition: { ...state.runnerPosition, x: state.runnerPosition.x -1}
    //     }))
    // },
    // moveRunnerRight: () => {
    //     set((state)=> ({
    //         runnerPosition: { ...state.runnerPosition, x: state.runnerPosition.x +1}
    //     }))
    // },
    // moveMilUp: () => {
    //     set((state) => ({
    //         milPosition: { ...state.milPosition, y: state.milPosition.y + 1}
    //     }))
    // },
    // moveMilDown: () => {
    //     set((state) => ({
    //         milPosition: { ...state.milPosition, y: state.milPosition.y -1}
    //     }))
    // },
    // moveMilLeft: () => {
    //     set((state) => ({
    //         milPosition: { ...state.milPosition, x: state.milPosition.x -1}
    //     }))
    // },
    // moveMilRight: () => {
    //     set((state) => ({
    //         milPosition: { ...state.milPosition, x: state.milPosition.x +1}
    //     }))
    // },
    setPage: (newPage) => {
        set({page: newPage})
    },
    setConfiguration: (newConfiguration) => {
        set( {config: newConfiguration} )
    },
    setTest: (newTest) => {
        set({test: newTest})
    }

}))