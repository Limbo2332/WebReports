const firstInput = document.getElementById('taskTwoFirstInput');
const secondInput = document.getElementById('taskTwoSecondInput');
const swapMeButton = document.getElementById('swapMeButton');

swapMeButton.addEventListener('click', () => {
	const temp = firstInput.value;
	firstInput.value = secondInput.value;
	secondInput.value = temp;
});