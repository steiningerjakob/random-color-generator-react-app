import './App.css';
import { useState } from 'react';
import Button from './Button.js';
import UserInputs from './UserInputs';

function App() {
  // Initialize state variables

  const [color, changeColor] = useState('#fff');
  const [customHue, setCustomHue] = useState('');
  const [customLuminosity, setCustomLuminosity] = useState('');
  const [customHeight, setCustomHeight] = useState('100px');
  const [customWidth, setCustomWidth] = useState('200px');

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {/* Display hex code in template string */}

      <h1>{`Button color hex code: ${color}`}</h1>

      {/* Create Button component which defines color on click and at the same time displays color with transition of 2s */}

      <Button
        color={color}
        changeColor={changeColor}
        customHue={customHue}
        customLuminosity={customLuminosity}
        customHeight={customHeight}
        customWidth={customWidth}
      />

      {/* Create input field that changes state of user-defined variables */}
      <UserInputs
        customHue={customHue}
        setCustomHue={setCustomHue}
        customLuminosity={customLuminosity}
        setCustomLuminosity={setCustomLuminosity}
        customHeight={customHeight}
        setCustomHeight={setCustomHeight}
        customWidth={customWidth}
        setCustomWidth={setCustomWidth}
      />

      {/* Create conditional rendering of button that returns main button color to default when clicked */}

      <div>
        {color !== '#fff' ? (
          <button
            style={{
              backgroundColor: '#fff',
              fontSize: '18px',
              width: '200px',
              height: '50px',
              margin: '30px',
            }}
            onClick={() => changeColor('#fff')}
          >
            Back to default
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
