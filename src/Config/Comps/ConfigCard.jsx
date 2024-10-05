export default function ConfigCard ({char, isMap}) {
    const Char = char.imageComp
    

    return <>
    <div className="config-card glass">
        <h2
            style={
                {margin: 0}
            }
        >
            {char.name}
        </h2>
        <p
            style={
                {width: '80%',
                height: '4rem'
                }
            }
        >
            {char.description}
        </p>
        <Char 
            height={isMap? 200 : 250}
            width={isMap? 200 : 250}
        />
    </div>
    </>
}