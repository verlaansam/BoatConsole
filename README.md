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



# rotate screen
https://www.makeuseof.com/how-to-rotate-your-raspberry-pi-screen-without-moving-the-display/

//auto open browser with page
nano /home/pi/.config/lxsession/LXDE-pi/autostart
@chromium-browser www.raspberrypi.org

----------------------------
# webpage inside python
sudo apt install python3-pyqt5 python3-pyqt5.qtwebengine python3-pyqt5.qtwebchannel libqt5webkit5-dev
pip install tk
pip install pywebview

# Import tkinter and webview libraries 
from tkinter import *
import webview 
  
# define an instance of tkinter 
tk = Tk() 

#  size of the window where we show our website 
tk.geometry("800x450") 

# Open website 
webview.create_window('Full-screen window', 'https://pywebview.flowrl.com/hello', fullscreen=True)
webview.start() 
-------------------------------

# static ip 
https://www.tomshardware.com/how-to/static-ip-raspberry-pi
or uncommentc in /etc/dhcpcd.config the example change eth0 to wlan0

the al might git. isnt it a mistery
who tought this would work we now have a branch for front end!!

react/axios to python/flask to db

# create database
https://pimylifeup.com/raspberry-pi-mysql/

test db -> mock_data

