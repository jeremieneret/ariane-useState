import React, { useEffect, useState } from 'react';
import './Style/Nox_react.css';
import Rocket from './rocket.svg';

function App() {
  const [radio1, setRadio1] = useState('NO')
  const [radio2, setRadio2] = useState('NO')
  const [radio3, setRadio3] = useState('NO')
  const [color, setColor] = useState({ color: 'pink', border: 'solid 1px pink' })
  const [text, setText] = useState('waiting...')
  const [takeOff, setTakeOff] = useState('')
  const [rocketTakeOff, setRocketTakeOff] = useState('rocket')
  useEffect(() => {
    if (
      radio1 === 'YES' && radio2 === 'YES' && radio3 === 'YES'
    ) {
      setColor({ background: 'aquamarine', transform: 'scale(500)' })
      setText('GO!!!')
      setTakeOff(setRocketTakeOff('rocket active'))
      
    }
  }, [radio1, radio2, radio3]

  )






  return (
    <div className='Nox_react.css'>
      <div className='App'>
        <h1>Let's make this rocket take off with<span> useEffect </span>!</h1>
        <p>Les trois contrôleurs doivent être enclenchés pour que la fusée décolle</p>
        <div className='radio_ctnr'>
          <input type='radio' checked={radio1 === 'YES'} value='YES' onChange={(e) => { setRadio1(e.target.value) }} />
          <label>YES</label>
          <input type='radio' checked={radio1 === 'NO'} value='NO' onChange={(e) => { setRadio1(e.target.value) }} />
          <label>NO</label>
        </div>
        <div className='radio_ctnr'>
          <input type='radio' checked={radio2 === 'YES'} value='YES' onChange={(e) => { setRadio2(e.target.value) }} />
          <label>YES</label>
          <input type='radio' checked={radio2 === 'NO'} value='NO' onChange={(e) => { setRadio2(e.target.value) }} />
          <label>NO</label>
        </div>
        <div className='radio_ctnr'>
          <input type='radio' checked={radio3 === 'YES'} value='YES' onChange={(e) => { setRadio3(e.target.value) }} />
          <label>YES</label>
          <input type='radio' checked={radio3 === 'NO'} value='NO' onChange={(e) => { setRadio3(e.target.value) }} />
          <label>NO</label>
        </div>

        <button onClick={takeOff}
          style={color}
        >{text}</button>
      <img src={Rocket}
        alt='rocket'
        className={rocketTakeOff}></img>
      </div>



    </div>
  );
}

export default App;
