
import IntroAnimation from './IntroAnimation'
import CoverTitle from '../Graphics/CoverTitle'
import { useIntroAnimation } from '../introHooks/useIntroAnimation'
import Runner1Face from '../Graphics/Runner1Face'
import StartButton from './StartButton'


export function Intro () {

    const {coverContainer, isAnimating, setIsAnimating} = useIntroAnimation()

    return <>
        {isAnimating &&
            <div className='intro-container' ref={coverContainer}>
                <IntroAnimation />
                <button className='omit-button' onClick={()=>setIsAnimating(false)}>
                    Omitir
                </button>
            </div>
        }
        

        <div className='cover-container glass'>
            <CoverTitle />
            <StartButton />
            <Runner1Face />
        </div>

    </>
}