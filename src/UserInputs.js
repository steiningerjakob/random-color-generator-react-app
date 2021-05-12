/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Style element via CSS-in-JS
const sectionStyles = css`
  display: flex;
  justify-content: center;
`;

const inputStyles = css`
  margin: 10px 30px 30px 30px;
  height: 30px;
  width: 200px;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  box-shadow: 1px 1px 8px 1px #dcdcdc;
  background-color: lightyellow;
  text-align: center;
`;

// Capture user input on hue, luminosity, height and width, and change variable state accordingly
// Pass state to other components via destructured props
function UserInputs({
  customHue,
  setCustomHue,
  customLuminosity,
  setCustomLuminosity,
  customHeight,
  setCustomHeight,
  customWidth,
  setCustomWidth,
}) {
  return (
    <div>
      <section css={sectionStyles}>
        <label htmlFor="hue">
          Hue:
          <br />
          <input
            id="hue"
            placeholder="blue"
            value={customHue}
            onChange={(event) => {
              setCustomHue(event.currentTarget.value);
            }}
            css={inputStyles}
          />
        </label>

        <label htmlFor="luminosity">
          Luminosity:
          <br />
          <input
            id="luminosity"
            placeholder="dark"
            value={customLuminosity}
            onChange={(event) => {
              setCustomLuminosity(event.currentTarget.value);
            }}
            css={inputStyles}
          />
        </label>
      </section>
      <section css={sectionStyles}>
        <label htmlFor="height">
          Height:
          <br />
          <input
            type="number"
            id="height"
            placeholder="100"
            value={customHeight}
            onChange={(event) => {
              setCustomHeight(event.currentTarget.value);
            }}
            css={inputStyles}
          />
        </label>

        <label htmlFor="width">
          Width:
          <br />
          <input
            type="number"
            id="width"
            placeholder="200"
            value={customWidth}
            onChange={(event) => {
              setCustomWidth(event.currentTarget.value);
            }}
            css={inputStyles}
          />
        </label>
      </section>
    </div>
  );
}

export default UserInputs;
