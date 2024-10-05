import { useAppStore } from '../../store/useAppStore'


export default function StartButton () {
    const {setPage} = useAppStore()

    return <>
        <button className="start-button" onClick={()=> setPage('config')}>¡Empezar!</button>
    </>
}