import randomColor from 'randomcolor';

function Button({
  color,
  changeColor,
  customHue,
  customLuminosity,
  customHeight,
  customWidth,
}) {
  return (
    <button
      style={{
        backgroundColor: color,
        transition: '2s',
        fontSize: '18px',
        width: `${customWidth}px`,
        height: `${customHeight}px`,
        margin: '30px',
      }}
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
