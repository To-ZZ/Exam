const pswrd_1 = document.querySelector("#pswrd_1");
const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector(".error-text");
const showBtn = document.querySelector(".show");
const btn = document.querySelector("button");
function active() {
    if (pswrd_1.value.length >= 6) {
        btn.removeAttribute("disabled", "");
        btn.classList.add("active");
        pswrd_2.removeAttribute("disabled", "");
    } else {
        btn.setAttribute("disabled", "");
        btn.classList.remove("active");
        pswrd_2.setAttribute("disabled", "");
    }
}
btn.onclick = function () {
    if (pswrd_2.value < 2) {
        errorText.style.display = "block";
        errorText.classList.remove("matched");
        errorText.textContent = "Username yoki password no’tog’ri";
        return false;
    }
    else {
        errorText.style.display = "block";
        errorText.classList.add("matched");
        errorText.textContent = "Tizimga xush kelibsiz";
        return false;
    }
}