import './css/Depth.css'
import DepthMeter from '../assets/DepthMeter.svg'
import SoundOn from '../assets/SoundOn.svg'
import DepthMeterMeter from '../assets/DepthMeterMeter.svg'

export const Depth = () => {

    const depth = 8;
    const alarmdepth = 0.5;
    const DepthInPixel = () =>{
        if(depth >= 10){
            return 207;
        } else{
            return 27+(depth*18);
        }
    }

    return(
        <>
        <article className='DepthInMeter'>
            <img className="DepthMeter" src={DepthMeter} />
            <div className='Meter'><div className='Baseline'><h1>{depth}</h1><p>m</p></div></div>
            <div className='DepthAlarm'><p>Alarm Depth</p><h3>{alarmdepth}</h3><p>m</p></div>
            <img className='SoundOn'src={SoundOn} />
            <img className='DepthMeterMeter' src={DepthMeterMeter} style={{top: `${DepthInPixel()}px`}}/>
        </article>
        </>
    )
}