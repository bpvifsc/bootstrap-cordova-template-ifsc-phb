/**
 * Este arquivo deve ser inserido em todo html 
 * dentro de uma aplicação cordova.
 * 
 * Na classe Aplicativo podem ser incluídos métodos e atributos.
 * 
 */
class Aplicativo {
    /**
     *  Costrutor da aplicação: 
     *      registra o evento deviceready do cordova.
     */
    constructor() {
        document.addEventListener('deviceready', this.onDeviceReady);
    }

    /** Tratador do evento deviceready
     *      dispara o evento inicio para ser utilizado em outros scripts
     */
    onDeviceReady() {
        console.log('Received Event: deviceready');
        document.dispatchEvent(new Event("inicio"));
    }
}

var app = new Aplicativo();