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
  margin: 30px;
  padding: 16px;
  box-shadow: 4px 4px 8px 4px #dcdcdc;
  border-radius: 8px;

  > span {
    display: inline;
  }
`;

function App() {
  // Initialize state variables

  const [color, setColor] = useState('#fff');
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
        <span role="img" aria-label="waving hand emoji">
          👋
        </span>{' '}
        {`Welcome, friend. The funny button currently displays the color ${color}.`}
      </h1>

      {/* Create Button component which defines color on click and at the same time displays color with transition of 2s */}

      <Button
        color={color}
        changeColor={setColor}
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
          <button css={defaultButtonStyle} onClick={() => setColor('#fff')}>
            I don't care for all these colours..{' '}
            <span role="img" aria-label="shrugging emoji">
              🤷‍♀️
            </span>
            <br />
            Back to default!
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
