const unorderedList = document.getElementById('taskSixUnorderedList');
const dublicateButton = document.getElementById('taskSixDublicate');

dublicateButton.addEventListener('click', () => {
	const listItems = unorderedList.getElementsByTagName('li');
	for (let i = 0; i < listItems.length; i++) {
		const listItemValue = Number(listItems[i].textContent);
		const duplicatedValue = listItemValue * 2;
		listItems[i].textContent = duplicatedValue;
	}
});