// set inital counter to zero
let counter = 0;
// get the value and buttons 
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            counter--;
        } else if (styles.contains("increase")) {
            counter++;
        } else if (styles.contains("reset")) {
            counter = 0;
        }

        // Set the counter color to Yellow
        if (counter > 0) {
            value.style.color = "Yellow";
        } else if (counter == 0) {
            value.style.color = "Green";
        } else if (counter < 0) {
            value.style.color = "Red";
        }

        // display the value of the counter after clicking
        value.textContent = counter;
    });
});