document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');

    let counterValue = 0;
    const minValue = 0;
    const maxValue = 100; // Adjust this value as needed

    document.addEventListener('keydown', function (event) {
        // Check if the key pressed is "r" for incrementing
        if (event.key === 'r') {
            if (counterValue < maxValue) {
                counterValue++;
                updateCounter();
            }
        }
        // Check if the key pressed is "e" for decrementing
        else if (event.key === 'e') {
            if (counterValue > minValue) {
                counterValue--;
                updateCounter();
            }
        }
    });

    function updateCounter() {
        counterElement.textContent = counterValue;
        counterElement.classList.add('enlarged');
        setTimeout(() => {
            counterElement.classList.remove('enlarged');
        }, 300); // Adjust the timeout duration as needed
    }
});
