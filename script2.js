function validateForm() {
    var username = document.forms["registerForm"]["username"].value;
    var email = document.forms["registerForm"]["email"].value;
    var password = document.forms["registerForm"]["password"].value;
    var confirmPassword = document.forms["registerForm"]["confirm_password"].value;

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    }

    if (password != confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    return true;
}