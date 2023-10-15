import './css/Wind.css'
import WindBoat from '../assets/WindBoat.svg'
import WindColors from '../assets/WindColors.svg'
import WindDirection from '../assets/WindDirection.svg'

export const Wind = () => {

    const average = 5.2
    const max = 4.6
    const angle = 90

    return(
        <>
        <article className='Layout'>
            
            <div className='Center'><img src={WindColors}/></div>
            <div className='Center'><img src={WindDirection} style={{transform : `rotate(${angle}deg)`}}/></div>
            <div className='Boat'><img src={WindBoat}></img></div>
            <div className='Boat'><h4>{angle}</h4></div>
            <div className='BottomLeft'><p>avg</p><h3>{average}</h3><p>kn</p></div>
            <div className='BottomRight'><p>max</p><h3>{max}</h3><p>kn</p></div>
        </article>
        </>
    )
}