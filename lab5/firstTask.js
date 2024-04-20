function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];

  const left = [];
  const right = [];

  arr.splice(arr.indexOf(pivot), 1);
  arr = [pivot].concat(arr);
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function getArray(min, max) {
  for (i = 0; i < getSize; i++) {
    arr.push(Math.round(Math.random() * (max - min) + min));
  }
  return arr;
}

function maxArray(arr) {
  return Math.max.apply(null, arr);
}

function minArray(arr) {
  return Math.min.apply(null, arr);
}

function sumFunction(arr) {
  let Sum = Math.max.apply(null, arr) + Math.min.apply(null, arr);
  return Sum;
}
function OutData(id) {
  document.getElementById(id).innerHTML += "[ ";
  arr.forEach((elem) => {
    document.getElementById(id).innerHTML += elem + " ";
  });

  document.getElementById(id).innerHTML += "]" + "<br>";
}

let getSize = +prompt("Оберіть розмір масиву:", 10);
var arr = [];

document.querySelectorAll("p:nth-child(even)").forEach((p) => {
  p.style.fontWeight = "bold";
  p.style.fontSize = "1.5em";
});

getArray(0, 15);

OutData("getArray");

document.getElementById("arraySum").innerHTML = sumFunction(arr) + "<br>";
document.getElementById("maxArray").innerHTML = maxArray(arr) + "<br>";
document.getElementById("minArray").innerHTML = minArray(arr) + "<br>";

arr = quickSort(arr);

OutData("quickSort");
