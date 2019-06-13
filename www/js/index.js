/**
 * Scripts de index.html
 * 
 *      este tipo de script deve começar com tratamento do evento 'inicio'
 *      para garantir a inicialização dos componentes do cordova.
 */
document.addEventListener("inicio", executaAcao);

function executaAcao() {
    console.log("Scripts de index.html");    
}

function mostraMensagem() {
    document.getElementById('exampleModalLabel').innerText = "Este é um Dialog Modal";
    document.getElementById('mensagem').innerText = "Aqui vai o texto da mensagem.";
}