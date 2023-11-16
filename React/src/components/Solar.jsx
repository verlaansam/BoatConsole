
export const Solar = () => {

    const solar = 312
    const voltage = 12.5
    const outNow = 35
    const out = 150
    const inToday = 250


    return(
        <>
        <article className='Layout'>
            <div className='TopLeft'><p>volt</p><h3>{voltage}</h3><p>v</p></div>
            <div className='TopRight'><p>in today</p><h3>{inToday}</h3><p>w</p></div>
            <div className='Center'><div className='Baseline'><h1>{solar}</h1><p>w</p></div></div>
            <div className='BottomLeft'><p>out</p><h3>{outNow}</h3><p>w</p></div>
            <div className='BottomRight'><p>out today</p><h3>{out}</h3><p>w</p></div>
        </article>
        </>
    )
}