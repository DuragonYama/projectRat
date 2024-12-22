const rat = document.querySelector('.running-rat');
const ratRunner = document.querySelector('.rat-runner');

ratRunner.addEventListener('mouseenter', () => {
    // Speed up the animation when the rat is hovered
    ratRunner.style.animationDuration = '2s'; // Faster speed
    rat.style.transition = 'transform 0.1s ease'; // Smooth transition for rotation
});

ratRunner.addEventListener('mouseleave', () => {
    // Reset the animation speed when the hover ends
    ratRunner.style.animationDuration = '5s'; // Normal speed
    rat.style.transition = 'transform 0.1s ease'; // Reset smooth transition
});
