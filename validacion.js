function cambiarEstilo(nombreEstilo) {
    var estiloNormal = document.getElementById('estilos');
    var estiloContraste = document.getElementById('estilos-contraste');

    if (nombreEstilo === 'estilos-contraste.css') {
        estiloNormal.disabled = true;  // Desactiva los estilos normales
        estiloContraste.disabled = false;  // Activa los estilos de alto contraste
    } else {
        estiloNormal.disabled = false;  // Activa los estilos normales
        estiloContraste.disabled = true;  // Desactiva los estilos de alto contraste
    }
}
