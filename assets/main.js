const cadastro = document.querySelector('.cadastro');
const formDescrição = document.querySelector('.formDescrição');
const formulario = document.querySelector('.formulario');
const btnCadastro = document.querySelector('#btnCadastro');
const btnFormSubmit = document.querySelector('#formSubmit');
const btnBack = document.querySelector('#btnBack');

btnFormSubmit.addEventListener('click', function(event){
    event.preventDefault();
});
formulario.remove();
btnCadastro.addEventListener('click', formAdd);
function formAdd(){
    formDescrição.remove();
    cadastro.append(formulario);
}
btnBack.addEventListener('click', backPage);
function backPage(){
    formulario.remove();
    cadastro.append(formDescrição);
}
