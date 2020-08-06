let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = '0px';


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace('px', '');
    let right = parseInt(rightNumbers, 10);
    if (right < 100) {
    dodger.style.right = `${right + 1}px`;
    }
}

document.addEventListener('keydown',
function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();  }
    if (e.key === 'ArrowRight') {
      moveDodgerRight();
});

//
// document.addEventListener('keydown',
// function(e) {
//   if (e.key === 'ArrowRight') {
//     moveDodgerRight();
//     }

});
