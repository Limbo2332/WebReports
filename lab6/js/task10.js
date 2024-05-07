const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
	const amount = Number(input.value);
	if (amount >= 1 && amount <= 100) {
		const boxes = [];
		let size = 30;

		for (let i = 0; i < amount; i++) {
			const box = document.createElement('div');
			box.style.width = `${size}px`;
			box.style.height = `${size}px`;
			box.style.backgroundColor = getRandomHexColor();
			boxes.push(box);
			size += 10;
		}

		boxesContainer.append(...boxes);
		input.value = '';
	} else {
		alert('Please enter a number between 1 and 100.');
	}
}

function destroyBoxes() {
	boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;
}