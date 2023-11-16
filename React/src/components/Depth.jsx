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
        <article className='Layout'>
            <img className="DepthMeter" src={DepthMeter} />
            <div className='Center'><div className='Baseline'><h1>{depth}</h1><p>m</p></div></div>
            <div className='BottomLeft'><p>alarm depth</p><h3>{alarmdepth}</h3><p>m</p></div>
            <img className='TopLeft'src={SoundOn} />
            <img className='DepthMeterMeter' src={DepthMeterMeter} style={{top: `${DepthInPixel()}px`}}/>
        </article>
        </>
    )
}