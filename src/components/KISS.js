const ToggleButton = ({ isOn, toggle }) => (
  <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
);
