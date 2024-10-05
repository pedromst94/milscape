import TitleSVG from "../Graphics/TitleSVG";
import IntroRunner from "./IntroRunner";
import mils from '../../assets/mils/mils'
import runners from '../../assets/runners/runners'


export default function IntroAnimation () {
    return <>
        <TitleSVG />
        <IntroRunner 
            runnerImage={runners.runner1}
            runnerId='runner1-intro'
        />
        <IntroRunner 
            runnerImage={runners.runner2}
            runnerId='runner2-intro'
        />
        <IntroRunner 
            runnerImage={runners.runner3}
            runnerId='runner3-intro'
        />
        <IntroRunner 
            runnerImage={runners.runner1back}
            runnerId='runner1back-intro'
        />
        <IntroRunner 
            runnerImage={mils.excitedmil1}
            runnerId='excitedmil1-intro'
        />
    </>
}