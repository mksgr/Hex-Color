const bgColor = document.querySelector(".background"),
      colorName = document.querySelector(".background__name"),
      btn = document.querySelector(".background__btn"),
      checkBtn = document.querySelector(".background__checkbox");

let decNumber,
    symbolName,
    firstColor = createHexColor(),
    secondColor = createHexColor();

window.onload = function () {
    changeBackgroundColor(firstColor);
    changeColorName(firstColor, secondColor);
};

checkBtn.addEventListener("click", () => {
    checkToggleBtn(firstColor, secondColor);
 });

btn.addEventListener('click', () => {
    firstColor = createHexColor();
    secondColor = createHexColor();
    generateBackground(firstColor, secondColor);
});

function createDecNumber () {
    const alphabet = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
    let item = Math.floor(Math.random() * alphabet.length);
    decNumber = alphabet[item];

    return decNumber;
}

function createSymbol (decNumber) {
    symbolName = String.fromCharCode(decNumber);

    return symbolName;
}

function createHexColor () {
    let hexColor = '#';
    let hexItem;
    
    for (let i = 0; i <= 5; i++) {
        hexItem = createSymbol(createDecNumber());
        hexColor += hexItem;
    }

    return hexColor;
}

function changeColorName (firstColor, secondColor) {
    if (checkBtn.classList.contains('active')) {
        colorName.innerHTML = `Hex-colors: ${firstColor}, ${secondColor}`;
    } else {
        colorName.innerHTML = `Hex-color: ${firstColor}`;
    }
}

function changeBackgroundColor (color) {
    bgColor.style.background = color;
}

function makeGradient (firstColor, secondColor) {
    bgColor.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
}

function checkToggleBtn (firstColor, secondColor) {
    
    checkBtn.classList.toggle("active");
    if (checkBtn.classList.contains('active')) {
        makeGradient(firstColor, secondColor);
        changeColorName(firstColor, secondColor);
    } else {
        changeBackgroundColor(firstColor);
        changeColorName(firstColor);
    }
}

function generateBackground (firstColor, secondColor) {
    if (checkBtn.classList.contains('active')) {
        changeColorName(firstColor, secondColor);
        makeGradient(firstColor, secondColor);
    } else {
        changeColorName(firstColor);
        changeBackgroundColor(firstColor);
    }
}