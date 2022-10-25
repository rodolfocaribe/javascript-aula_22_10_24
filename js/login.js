function empty() {
    username = document.getElementById("username");
    password = document.getElementById("password");
    if (!username.value) {
        alertWifi("Usuario em branco! Favor preencher", false, 0, "../img/toupeira.gif", 30);
        username.focus();
    }  else if (!password.value) {
        alertWifi("Senha em branco! Favor preencher", false, 0, "../img/toupeira.gif", 30);
        password.focus();
    } else {
        alert("Login válido!!!");
    }
}

