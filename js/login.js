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
        // alertWifi("Login efetuado com sucesso!", false, 0, "../img/toupeira.gif", 30);
        readJSON(username.value, password.value);
    }
}
function readJSON(username, password) {
    file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, username, password))
        .catch(err => console.log("erro na leitura do JSON"))
}
function checkUser(content, username, password) {
    var achou = false;
    for (i=0; i<content.usuarios.length; i++) {
        if ((content.usuarios[i].user == username) && (content.usuarios[i].pwd == password)) {
            achou = true;
            break;
        }
    }
    if (achou)
        alertWifi("Usuário válido", false, 0, "../img/toupeira.gif",30);
    else
        alertWifi("Usuário inválido", false, 0, "../img/toupeira.gif",30);
}


