const validationInput = document.querySelector("#validation-input");
const inputLength = Number(validationInput.getAttribute("data-length"));


validationInput.addEventListener("blur", (e) => {
    if (e.target.value.length === inputLength) {
        validationInput.classList.add("valid")
        validationInput.classList.remove("invalid");
    }
    else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});