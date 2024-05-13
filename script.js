const numberDisplay = document.getElementById('number');
const countButton = document.getElementById('count');
const resetButton = document.getElementById('reset');

let count = 0;

function displayCount() {
    numberDisplay.textContent = count;
}

countButton.addEventListener('click', function() {
    count++;
    displayCount();
});

resetButton.addEventListener('click', function() {
    count = 0;
    displayCount();
});