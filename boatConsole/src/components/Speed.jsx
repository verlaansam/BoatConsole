import './css/Speed.css'
import Speedometer from '../assets/Speedometer.svg'
import SpeedPointer from '../assets/SpeedPointer.svg'

export const Speed = () => {

    const speed = 6.4
    const distance = 28.3
    const average = 3.6
    const max = 7.8
    const degrees = speed*18

    return(
        <>
        <article className='SpeedInKnots'>
            <div className='Distance'><p>dist</p><h3>{distance}</h3><p>nm</p></div>
            <img className='Speedometer' src={Speedometer}></img>
            <div className='Knots'><h1>{speed}</h1><p>Kn</p></div>
            <div className='SpeedAverage'><p>Avg</p><h3>{average}</h3><p>Kn</p></div>
            <div className='SpeedMax'><p>Max</p><h3>{max}</h3><p>Kn</p></div>
            <img className='SpeedPointer' src={SpeedPointer} alt="" style={{transform : `rotate(${degrees}deg)`}} />
        </article>
        </>
    )
}