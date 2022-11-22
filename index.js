// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
      var newPosition = dodger.style.left
    newPosition = parseInt(newPosition);
    }
});
console.log(newPosition);
  function moveDodgerRight() {
    const leftPosition = dodger.style.left.replace("px", "");
    const left= parseInt(leftPosition, 10);
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerRight();
      var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)
    }
  });
  console.log(newPosition);
white_check_mark
eyes
raised_hands













   
 