// const value = document.getElementsByClassName("button");
const value = document.getElementsByClassName("inuput").value
const button = document.querySelector(".button")

function verifyData(value) {
    for (let i; i < value.lenght; i++) {
        if (value[i] === "@" || value[i] === ".com") {
            return true;
        } else {
            return;
        }
    }
}

button.addEventListener("click", () => {
    verifyData(value)
})