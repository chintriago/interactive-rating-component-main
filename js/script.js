const form = document.getElementById("form-js");
const article1 = document.getElementById("article-1-js");
const article2 = document.getElementById("article-2-js");
const span = document.getElementById("span-js");
const inputList = document.querySelectorAll("input");
const inputListContainer = document.getElementById("btns-container-js");

// Function loops through inputs to see which
// input was clicked, then when on that input
// when form gets submitted
// the html elements get changed.
function clickListener() {
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i] === document.activeElement) {
            let num = i + 1;
            let str = num.toString();
            span.textContent = str;
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                article1.classList.add("remove-element");
                article2.classList.remove("remove-element");
            });
        }
    }
};

// When div container for inputs gets clicked,
// clickListener function gets called.
inputListContainer.addEventListener("click", function () {
    clickListener();
});