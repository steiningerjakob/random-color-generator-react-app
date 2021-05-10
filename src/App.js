import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  // let userInputLuminosity;
  // let userInputHue;
  // const color = randomColor({
  //   luminosity: userInputLuminosity,
  //   hue: userInputHue,
  // });
  const [color, setRandcomColor] = useState('#fff');
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>{`Button color hex code: ${color}`}</h1>
      <br />
      <button
        style={{
          backgroundColor: color,
          fontSize: '18px',
          width: '200px',
          height: '50px',
        }}
        onClick={() => setRandcomColor(randomColor())}
      >
        Update color
      </button>
      <br />
      {/* <label>
        Hue:
        <input
          onChange={(event) => {
            randomColor.userInputHue(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        Luminosity:
        <input
          onChange={(event) => {
            randomColor.userInputLuminosity(event.currentTarget.value);
          }}
        />
      </label>
      <br /> */}
      <button
        style={{
          backgroundColor: '#fff',
          fontSize: '18px',
          width: '200px',
          height: '50px',
          margin: '30px',
        }}
        onClick={() => setRandcomColor('#fff')}
      >
        Back to default
      </button>
    </div>
  );
}

export default App;
