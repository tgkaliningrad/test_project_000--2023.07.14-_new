

let textDisplay = document.querySelector('.display');
let textKey = document.querySelectorAll('.key');
let textClear = document.querySelector('.clear');
for (let key of textKey) {
    key.onclick = function() {
        textDisplay.textContent += key.textContent;
    }
}
textClear.onclick = function() {
    textDisplay.textContent = '';
};






