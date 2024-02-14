import React from 'react'
import Navubar from './Components/Navubar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosec from './Components/Herosec';
// import Slider from './Components/Slider';

const App = () => {
  return (
    <>
      <Navubar />
      {/* <Slider /> */ }
      <Herosec />
    </>
  )
}

export default App