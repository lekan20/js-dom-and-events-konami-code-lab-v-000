// Key codes for the Konami Code
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler
let index = 0;

// The function that's invoked by the event listener
function init() {
  document.addEventListener('keydown', onKeyDownHandler)

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;

      if ( index === code.length ) {
        alert("You're complete")
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
