import './css/Heading.css'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export const Heading = () => {


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

    return(
        <>
        <article className='HeadingInDegrees'>
            <div className='Center'>
                <Canvas>
                    <ambientLight intensity={Math.PI / 2} />
                    <Box position={[0, 0, 0]} />
                    <OrbitControls />
                </Canvas>
            </div>
        </article>
        </>
    )
}