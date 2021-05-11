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
      <label htmlFor="hue">
        Hue:
        <input
          id="hue"
          placeholder="blue"
          value={customHue}
          onChange={(event) => {
            setCustomHue(event.currentTarget.value);
          }}
          style={{
            margin: '30px',
          }}
        />
      </label>

      <label htmlFor="luminosity">
        Luminosity:
        <input
          id="luminosity"
          placeholder="dark"
          value={customLuminosity}
          onChange={(event) => {
            setCustomLuminosity(event.currentTarget.value);
          }}
          style={{
            margin: '30px',
          }}
        />
      </label>

      <br />

      <label htmlFor="height">
        Height:
        <input
          type="number"
          id="height"
          placeholder="100"
          value={customHeight}
          onChange={(event) => {
            setCustomHeight(event.currentTarget.value);
          }}
          style={{
            margin: '30px',
          }}
        />
      </label>

      <label htmlFor="width">
        Width:
        <input
          type="number"
          id="width"
          placeholder="200"
          value={customWidth}
          onChange={(event) => {
            setCustomWidth(event.currentTarget.value);
          }}
          style={{
            margin: '30px',
          }}
        />
      </label>
    </div>
  );
}

export default UserInputs;
