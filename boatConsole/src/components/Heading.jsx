/* eslint-disable react/no-unescaped-entities */
import './css/Heading.css'
import HeadingStrenght from '../assets/HeadingStenght2.svg'


export const Heading = () => {



  return(
      <>
      <article className='Layout'>
        <div className='TopLeft'><img src={HeadingStrenght}></img></div>
        <div className='CenterTop'><p>52°45'44.6"N 5°26'48.9"E</p></div>
        <div className='CenterMiddle'><h3 className='Baseline'>359°</h3></div>
        <div className='CenterBottom'><p>Heading</p></div>
      </article>
      </>
  )
}