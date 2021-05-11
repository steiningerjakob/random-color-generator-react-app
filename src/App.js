import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  // Initialize state variables

  const [color, setColor] = useState('#fff');
  const [customHue, setCustomHue] = useState('');
  const [customLuminosity, setCustomLuminosity] = useState('');

  // Declare function to change state on event (i.e. user input)

  function userInputHue(event) {
    setCustomHue(event.currentTarget.value);
  }

  function userInputLuminosity(event) {
    setCustomLuminosity(event.currentTarget.value);
  }

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {/* Display hex code in template string */}

      <h1>{`Button color hex code: ${color}`}</h1>
      <br />

      {/* // Create button that changes color on click, defaulting to random color if there is no user input */}

      <button
        style={{
          backgroundColor: color,
          transition: '2s',
          fontSize: '18px',
          width: '200px',
          height: '50px',
          margin: '30px',
        }}
        onClick={() =>
          setColor(
            randomColor({
              luminosity: customLuminosity,
              hue: customHue,
            }),
          )
        }
      >
        Update color
      </button>
      <br />

      {/* Create input field that triggers "change state" function above upon user input  */}

      <label htmlFor="hue">
        Hue:
        <input
          id="hue"
          placeholder="blue"
          value={customHue}
          onChange={userInputHue}
          style={{
            margin: '30px',
          }}
        />
      </label>
      <br />

      <label htmlFor="luminosity">
        Luminosity:
        <input
          id="luminosity"
          placeholder="dark"
          value={customLuminosity}
          onChange={userInputLuminosity}
          style={{
            margin: '30px',
          }}
        />
      </label>
      <br />

      {/* Create button that returns main button color to default (i.e. white) when clicked */}

      <button
        style={{
          backgroundColor: '#fff',
          fontSize: '18px',
          width: '200px',
          height: '50px',
          margin: '30px',
        }}
        onClick={() => setColor('#fff')}
      >
        Back to default
      </button>
    </div>
  );
}

export default App;
