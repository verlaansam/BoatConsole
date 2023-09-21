import './App.css'
import { Speed } from './components/Speed'
import { Depth } from './components/Depth'
import { Solar } from './components/Solar'
import { Wind } from './components/Wind'
import { Heading } from './components/Heading'
import { Settings} from './components/Settings'


export const App = () => {

  return (
    <>
    <main>
      <section className='Speed'>
        <Speed />
      </section>
      <section className='Depth'>
        <Depth />
      </section>
      <section className='Solar'>
        <Solar />
      </section>
      <section className='Wind'>
        <Wind />
      </section>
      <section className='Heading'>
        <Heading />
      </section>
      <section className='Settings'>
        <Settings />
      </section>
    </main>
      
    </>
  )
}

