// Code Keypad Component Here
function Keypad() {
  function consoleThis(event) {
    console.log("Entering password...");
  }

  return (
    <div>
      <input onChange={consoleThis} type="password" />;
    </div>
  );
}
export default Keypad;
