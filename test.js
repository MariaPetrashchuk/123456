function validate() {
    let valid = false;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    console.log(name.value, email.value, message.value);

    if (name.value.trim() !== "" && email.value.trim() !== "" && message.value.trim() !== "") {
        valid = true;
    }

    if (valid) {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    } else {
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "block";
    }

    return valid; // false зупинить відправку форми
}

function send(){

}