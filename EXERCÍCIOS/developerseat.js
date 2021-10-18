var login = document.querySelector('.container-login');
var section = document.querySelector('.container-section');
var loop = document.querySelector('.loop');
var form = document.getElementById('form1');
var nav = document.querySelector('.container-nav');
console.log(form)

login.addEventListener('click', formlogin);

function formlogin() {
    form.style.visibility = 'visible';
    form.style.animation = '';
    form.style.animation = 'transicao linear 0.8s';
    section.style.opacity = '0.2'
    loop.style.opacity = '0.8'
}

var email = document.getElementById('email');
var senha = document.getElementById('senha');

function validacao(){

    if(document.fale.email.value == '' || document.fale.email.value.length < 3){
        alert('Preencha o campo email')
        document.fale.email.focus();
        email.style.borderColor = 'red';
        return false;
    }else{
        email.style.borderColor = '#b8aaaa';
    }

    if(document.fale.senha.value == '' || document.fale.senha.value.length < 3){
        alert('Preencha o campo senha')
        document.fale.senha.focus();
        senha.style.borderColor = 'red';
        return false;
    }else{
        senha.style.borderColor = '#b8aaaa';
    }

}

