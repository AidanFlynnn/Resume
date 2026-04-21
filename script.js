function toggleTheme() {
    document.body.classList.toggle("dark");
}

function showAlert(company) {
    alert("Learn more about my role at " + company);
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    if (name === "" || email === "" || message.length < 10) {
        error.innerText = "Please fill out all fields correctly.";
        return false;
    }

    alert("Message sent successfully!");
    return true;
}