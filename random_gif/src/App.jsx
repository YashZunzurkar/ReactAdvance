import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {
  

  return (
     <div className='background w-screen h-screen relative overflow-x-hidden'>
      <div className=' absolute flex   items-center justify-center  bg-white rounded-sm mt-[40px] left-[25px] right-[25px]'>
         <h1 className='  text-zinc-200xl  '>Random GIF</h1>
      
      </div>
     
      <div className=' flex flex-col w-full items-center gap-y-10 mt-[30px] pt-[60px]'>
        <Random/>
        <Tag/>
      </div>
     </div>
    
  )
}

export default App
