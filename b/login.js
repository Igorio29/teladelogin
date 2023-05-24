function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "Igorio29" && senha == "05022007") {
        window.location.replace("./b/menu.html");
    }

    else if (login == "Julia" && senha == "namoladadele") {
        window.location.replace("./b/menu.html");
    }

    else if (login == "Convidado" && senha == "convidado"){
        window.location.replace("./b/jao.html");
    }

    else {
        alert('acesso negado');
    }
}