const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
    
    remainingCounterEl.style.color = textareaEl.value.length > textareaEl.maxlength ? "red" : "black";
}