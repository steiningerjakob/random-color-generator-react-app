/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';

// Button component that passes random color state to parent via props destructuring
function Button({
  color,
  changeColor,
  customHue,
  customLuminosity,
  customHeight,
  customWidth,
}) {
  // Style element via CSS-in-JS
  const buttonStyle = css`
    background-color: ${color};
    transition: 2s;
    font-size: 18px;
    width: ${customWidth}px;
    height: ${customHeight}px;
    margin: 30px;
  `;

  return (
    <button
      css={buttonStyle}
      // Create random color hex or user-defined based on input in input elements
      onClick={() =>
        changeColor(
          randomColor({
            luminosity: customLuminosity,
            hue: customHue,
          }),
        )
      }
    >
      I am a funny button{' '}
      <span role="img" aria-label="funny emoji">
        🥸
      </span>{' '}
      . Don't believe me? Click me.
    </button>
  );
}

export default Button;
