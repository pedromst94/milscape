export default function IntroRunner ({runnerImage, runnerId}) {
    return <>
        <div 
            id={runnerId}
            className="runner-intro"
        >
            <img src={runnerImage}/>
        </div>
    </>
}