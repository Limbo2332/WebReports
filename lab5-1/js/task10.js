function checkBrackets(str) {
	const stack = [];
	const openingBrackets = ['(', '{', '['];
	const closingBrackets = [')', '}', ']'];

	for (let char of str) {
		if (openingBrackets.includes(char)) {
			stack.push(char);
		} else if (closingBrackets.includes(char)) {
			const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
			if (stack.pop() !== correspondingOpeningBracket) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

const someFn = "(function() { return 'Hello World'; })()";
console.log(checkBrackets(someFn));

const invalidFn = "function() { return 'Hello World'; })()";
console.log(checkBrackets(invalidFn));
