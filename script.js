var nome = document.getElementById("nome")
var senha = document.getElementById("senha")
var message = document.getElementById("message")
 
 function login() {
    if(nome.value == 'david' && senha.value == '123'){
        gravarUsuario(nome.value);
        location.replace("inicio.html")
    }else{
        message.innerHTML = "<strong>Login Inválido!</strong>"
    }
  }

  function sair(){
    localStorage.removeItem("nome");
    location.replace("index.html")
  }

function gravarUsuario(nomeUsuario){
    localStorage.setItem("nome", nomeUsuario);
}

function lerUsuario(){
    return localStorage.getItem("nome");
}