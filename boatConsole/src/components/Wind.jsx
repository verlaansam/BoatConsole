import './css/Wind.css'

export const Wind = () => {

    const speed = 5.2

    return(
        <>
        <article className='WindInMS'>
            <h1>{speed}</h1><p>Kn</p>
        </article>
        </>
    )
}