
export function Runner ({dimension, character, isRunner}) {

    const Char = character.imageComp

    return <>
      <div 
        className="char-container"
        id={isRunner? 'runner' : 'mil'}
        style={{
          width: dimension,
          height: dimension
        }}
           >
        <Char width={dimension} height={dimension} />

      </div>
    </>
}