export default function FinalConfigCard ({text, item, setStep, setChar}) {
    const Char = item.imageComp
    const getBack = () => {
        setChar()
        setStep()
    }

    return <div className="final-config-card" onClick={getBack}>
        <h3>
            {text}
        </h3>
        <p>{item.name}</p>
        <Char width={100} height={100}/>
    </div>
}