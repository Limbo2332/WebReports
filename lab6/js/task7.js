const ulElement = document.querySelector('ul#categories');
const liElements = ulElement.querySelectorAll('li.item');
console.log(`Number of categories: ${liElements.length}`);

liElements.forEach(li => {
	const headlineElement = li.querySelector('h2');

	const categoryElements = li.querySelectorAll('li');

	console.log(`Category: ${headlineElement.textContent}`);
	console.log(`Elements: ${categoryElements.length}`);
});
