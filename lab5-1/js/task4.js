const concerts = {
	Київ: new Date("2020-04-01"),
	Умань: new Date("2025-07-02"),
	Вінниця: new Date("2020-04-21"),
	Одеса: new Date("2025-03-15"),
	Хмельницький: new Date("2020-04-18"),
	Харків: new Date("2025-07-10"),
};

const currentDate = new Date();

const cities = Object.keys(concerts)
	.filter(city => concerts[city] > currentDate)
	.sort((cityA, cityB) => concerts[cityA] - concerts[cityB])
	.map(city => city);

console.log(cities);
