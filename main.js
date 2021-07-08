function passwor() {
    let firstName = document.getElementById("Firstname").value;
    let lastName = document.getElementById("lastname").value;
    let password = document.getElementById("password").value;
    if (password === firstName + "@" + lastName) {
        alert("SUCCESS");
    }
    else {
        alert("ERROR");
    }
}
function chec() {
    let check = document.getElementById("checkbox");
    if (check.checked === true) {
        document.getElementById("submit").disabled = false;
    }
    else {
        document.getElementById("submit").disabled = true;
    }
}
let body = document.querySelector('body');
let sun = document.querySelector(".sun");
sun.onclick = () => {
    body.classList.toggle("dark")
}
