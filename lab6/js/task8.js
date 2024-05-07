const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', function (event) {
	event.preventDefault();

	var form = event.target;
	var inputs = form.elements;

	var isFormValid = true;
	var formData = {};

	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];

		if (input.value.trim() === '') {
			isFormValid = false;
			break;
		}

		formData[input.name] = input.value.trim();
	}

	if (!isFormValid) {
		alert('All form fields must be filled in');
	} else {
		console.log(formData);
		form.reset();
	}
});