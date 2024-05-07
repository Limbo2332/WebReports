const productDatabase = [
	{ name: "Product 1", price: 100 },
	{ name: "Product 2", price: 200 },
	{ name: "Product 3", price: 300 }
];

function getProductDetails(productId, successCallback, errorCallback) {
	const product = productDatabase[productId];

	if (product) {
		successCallback(product);
	} else {
		errorCallback("Product not found");
	}
}

const productId = 2;
getProductDetails(
	productId,
	(product) => {
		console.log("Product details:", product);
	},
	(error) => {
		console.error("Error:", error);
	}
);
