const squareToResize = document.getElementById('block-to-resize');
const decreaseButton = document.getElementById('taskFourDecrease');
const increaseButton = document.getElementById('taskFourIncrease');

decreaseButton.addEventListener('click', () => {
	const currentSize = parseInt(window.getComputedStyle(squareToResize).width);
	squareToResize.style.width = `${currentSize - 15}px`;
	squareToResize.style.height = `${currentSize - 15}px`;
});

increaseButton.addEventListener('click', () => {
	const currentSize = parseInt(window.getComputedStyle(squareToResize).width);
	squareToResize.style.width = `${currentSize + 15}px`;
	squareToResize.style.height = `${currentSize + 15}px`;
});