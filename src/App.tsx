import React from 'react'
import './App.css'
// import { Button } from './components/ui/button'
import Header from './components/custom/Header'
import Hero from './components/custom/Hero'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default App








// import './App.css'
// import Header from './components/custom/Header'
// import Hero from './components/custom/Hero'
// import Beams from './components/ui/Beams'

// const App = () => {
//   return (
//     <div className='relative min-h-screen bg-black overflow-hidden'>
//       {/* Animated Background */}
//       <div className='absolute inset-0 z-0'>
//         <Beams
//           beamWidth={3}
//           beamHeight={20}
//           beamNumber={16}
//           lightColor='#ffffff'
//           speed={2}
//           noiseIntensity={1.5}
//           scale={0.2}
//           rotation={25}
//         />
//       </div>

//       {/* Foreground Content */}
//       <div className='relative z-10'>
//         <Header />
//         <Hero />
//       </div>
//     </div>
//   )
// }

// export default App
