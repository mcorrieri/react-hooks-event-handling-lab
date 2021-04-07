// Code EyesOnMe Component Here
function EyesOnMe() {
  function consoleFocus() {
    console.log("Good!");
  }
  function consoleBlur() {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={consoleFocus} onBlur={consoleBlur}>
      Eyes on me
    </button>
  );
}
export default EyesOnMe;
