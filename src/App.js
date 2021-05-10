import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [defaultColor, setRandcomColor] = useState('fff');
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>
        {`The background color of this button corresponds to the hex code "${defaultColor}"`}
      </h1>
      <br />
      <button
        style={{
          backgroundColor: defaultColor,
          fontSize: '18px',
          width: '200px',
          height: '50px',
        }}
        onClick={() => setRandcomColor(randomColor())}
      >
        Update button color
      </button>
    </div>
  );
}

export default App;
