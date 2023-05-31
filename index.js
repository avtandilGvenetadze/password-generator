const slider = document.querySelector(".input-range");
const characterLength = document.querySelector(".Character-Length-number");
const monitor = document.querySelector(".first-input");
slider.addEventListener("input", handleSliderInput);
const copyImage = document.querySelector(".image-copy");
function handleSliderInput(event) {
  const value = parseInt(event.target.value);
  const max = parseInt(event.target.max);
  const min = parseInt(event.target.min);
  const position = ((value - min) / (max - min)) * 100;
  characterLength.innerHTML = value;
  slider.style.setProperty("--beforeback", `${position}%`);
}
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];
let quantityOfassemblies = 0;
let uppercaseCount = 1;
const uppercaseCheckBox = document.getElementById("Uppercase");
uppercaseCheckBox.addEventListener("input", function () {
  uppercaseCount++;
  if (uppercaseCount % 2 == 0) {
    quantityOfassemblies++;
  } else {
    quantityOfassemblies--;
  }
});
let loweracaseCount = 1;
const loweracaseCheckbox = document.getElementById("loweracase");
loweracaseCheckbox.addEventListener("input", function () {
  loweracaseCount++;
  if (loweracaseCount % 2 == 0) {
    quantityOfassemblies++;
  } else {
    quantityOfassemblies--;
  }
});
let numbersCount = 1;
const numbersCheckbox = document.getElementById("numbers");
numbersCheckbox.addEventListener("input", function () {
  numbersCount++;
  if (numbersCount % 2 == 0) {
    quantityOfassemblies++;
  } else {
    quantityOfassemblies--;
  }
});
let symbolsCount = 1;
const symbolsCheckbox = document.getElementById("symbols");
symbolsCheckbox.addEventListener("input", function () {
  symbolsCount++;
  if (symbolsCount % 2 == 0) {
    quantityOfassemblies++;
  } else {
    quantityOfassemblies--;
  }
});

const generateButton = document.querySelector(".last-button");
generateButton.addEventListener("click", function () {
  let quantity = 0;
  let extraQuantity = 0;
  quantity = Math.floor(slider.value / quantityOfassemblies);
  extraQuantity = slider.value - quantityOfassemblies * quantity;
  let uppercaseQuantity = quantity;
  let lowercaseQuantity = quantity;
  let numbersQuantity = quantity;
  let symbolsQuantity = quantity;
  if (uppercaseCount % 2 == 0) {
    uppercaseQuantity = quantity + extraQuantity;
  } else if (uppercaseCount % 2 !== 0 && loweracaseCount % 2 == 0) {
    lowercaseQuantity = quantity + extraQuantity;
  } else if (
    uppercaseCount % 2 !== 0 &&
    loweracaseCount % 2 !== 0 &&
    numbersCount % 2 == 0
  ) {
    numbersQuantity = quantity + extraQuantity;
  } else if (
    uppercaseCount % 2 !== 0 &&
    loweracaseCount % 2 !== 0 &&
    numbersCount % 2 !== 0 &&
    symbolsCount % 2 == 0
  ) {
    symbolsQuantity = quantity + extraQuantity;
  }

  let randomUppercase = "";
  if (uppercaseCount % 2 == 0) {
    for (let i = 1; i <= uppercaseQuantity; i++) {
      randomUppercase =
        randomUppercase +
        alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    }
  }
  let randomlowercase = "";
  if (loweracaseCount % 2 == 0) {
    for (let i = 1; i <= lowercaseQuantity; i++) {
      randomlowercase =
        randomlowercase + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
  }
  let randomnumbers = "";
  if (numbersCount % 2 == 0) {
    for (let i = 1; i <= numbersQuantity; i++) {
      randomnumbers =
        randomnumbers + numbers[Math.floor(Math.random() * numbers.length)];
    }
  }
  let randomsymbols = "";
  if (symbolsCount % 2 == 0) {
    for (let i = 1; i <= symbolsQuantity; i++) {
      randomsymbols =
        randomsymbols + symbols[Math.floor(Math.random() * symbols.length)];
    }
  }

  let randomPasword = "";
  randomPasword =
    randomPasword +
    randomUppercase +
    randomlowercase +
    randomnumbers +
    randomsymbols;

  monitor.value = randomPasword
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  const indicatorDiv = document.querySelector(".indicator-div");
  const mediumDiv = document.querySelector(".MEDIUM");
  if (quantityOfassemblies === 1) {
    mediumDiv.innerHTML = "VERY WEAK";
    indicatorDiv.classList.add("very-weak");
    indicatorDiv.classList.remove("weak");
    indicatorDiv.classList.remove("medium");
    indicatorDiv.classList.remove("strong");
  } else if (quantityOfassemblies === 2) {
    mediumDiv.innerHTML = "WEAK";
    indicatorDiv.classList.add("weak");
    indicatorDiv.classList.remove("medium");
    indicatorDiv.classList.remove("strong");
  } else if (quantityOfassemblies === 3) {
    mediumDiv.innerHTML = "MEDIUM";
    indicatorDiv.classList.add("medium");
    indicatorDiv.classList.remove("strong");
  } else if (quantityOfassemblies === 4) {
    mediumDiv.innerHTML = "STRONG";
    indicatorDiv.classList.add("strong");
  } else {
    mediumDiv.innerHTML = "NO PASSWORD";
    indicatorDiv.classList.remove("very-weak");
    indicatorDiv.classList.remove("weak");
    indicatorDiv.classList.remove("medium");
    indicatorDiv.classList.remove("strong");
  }
});

copyImage.addEventListener("click", copyText);
function copyText() {
  monitor.select();
  monitor.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(monitor.value);
}
