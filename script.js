'use strict';

const PROGRESS = document.getElementById('progress');
const PREV = document.getElementById('prev');
const NEXT = document.getElementById('next');
const CIRCLES = document.querySelectorAll('.circle');

let currentActive = 1;

NEXT.addEventListener('click', () => {
  // Step counter
  currentActive++;
  //   Make sure the count doesn't go above it's boundaries, treat the nodelist as an array and use the methods
  if (currentActive > CIRCLES.length) {
    currentActive = CIRCLES.length;
  }
  UPDATE();
});
PREV.addEventListener('click', () => {
  // Step counter decrement
  currentActive--;
  //   Make sure the count doesn't go BELOW it's boundaries, treat the nodelist as an array and use the methods
  if (currentActive < 1) {
    currentActive = 1;
  }
  UPDATE();
});

function UPDATE() {
  CIRCLES.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const ACTIVES = document.querySelectorAll('.active');

  PROGRESS.style.width =
    ((ACTIVES.length - 1) / (CIRCLES.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    PREV.disabled = true;
  } else if (currentActive === CIRCLES.length) {
    NEXT.disabled = true;
  } else {
    PREV.disabled = false;
    NEXT.disabled = false;
  }
}
