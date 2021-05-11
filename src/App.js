/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import UserInputs from './UserInputs';

// Style element via CSS-in-JS
const defaultButtonStyle = css`
  font-size: 18px;
  background-color: #fff;
  width: 300px;
  height: 60px;
  margin: 30px;
`;

// Currently disabled -- Array with a set of instructions
// const instructions = [
//   'Select a hue (e.g. blue)',
//   'Select a luminosity (e.g. dark)',
//   'Select a height (e.g. 100',
//   'Select a width (e.g. 500)',
//   '...or just do nothing and let the app surprise you :)',
// ];

function App() {
  // Initialize state variables

  const [color, changeColor] = useState('#fff');
  const [customHue, setCustomHue] = useState('');
  const [customLuminosity, setCustomLuminosity] = useState('');
  const [customHeight, setCustomHeight] = useState(100);
  const [customWidth, setCustomWidth] = useState(500);

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {/* Display hex code in template string */}

      <h1>
        <span role="img" aria-label="waving hand">
          👋
        </span>{' '}
        {`Welcome, friend. The funny button currently displays the color ${color}.`}
      </h1>

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
      {/* Currently disabled -- Mapping over array to display instructions:
      <div css={defaultButtonStyle}>
        <ul>
          {instructions.map((item) => {
            // eslint-disable-next-line react/jsx-key
            return <li>{item}</li>;
          })}
        </ul>
      </div> */}

      {/* Create conditional rendering of button that returns main button color to default when clicked */}

      <div>
        {color !== '#fff' ? (
          <button css={defaultButtonStyle} onClick={() => changeColor('#fff')}>
            I don't care for all these colours..{' '}
            <span role="img" aria-label="shrugging">
              🤷‍♀️
            </span>
            <br />
            Take me back to default!
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
