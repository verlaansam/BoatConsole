# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


------------notes------------

---database structure
database boatconsole
tabels:
-speed
--currentspeed float
--avg speed float
--max speed float
--distance float
-depth
--depth float
--alarm depth float
--sound on boolean
-solar
--currentwattage int
--voltage float
--intoday int
--outtodat int
--outnow int
-wind
--speed float
--avgspeed float
--maxspeed float
--angle int
--direction int
-heading
--cordinates TEXT
--heading int
--signalstrengt float
-settings
--start/stop bolean
--nightmode bolean
--exit bolean
-history
--startcordinates text
--endingcordinates text
--totalDistance float
--totalTime float


//3d compass
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        return (
          <mesh
            {...props}
            ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
          </mesh>
        )
      }

<Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <Box position={[0, 0, 0]} />
    <OrbitControls />
</Canvas>


//hotspot on raspberry pi to connect to esp8266
https://www.tomshardware.com/how-to/raspberry-pi-access-point


//rotate screen
https://www.makeuseof.com/how-to-rotate-your-raspberry-pi-screen-without-moving-the-display/



         