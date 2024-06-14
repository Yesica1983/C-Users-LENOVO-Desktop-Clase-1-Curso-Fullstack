function cambiarEstilo(archivoEstilo) {
    var estilos = document.getElementById('estilos');
    var estilosContraste = document.getElementById('estilos-contraste');
    if (archivoEstilo === 'estilos.css') {
        estilos.disabled = false;
        estilosContraste.disabled = true;
    } else {
        estilos.disabled = true;
        estilosContraste.disabled = false;
    }
}

var emailInput = document.getElementById('email');
var emailValidationMessage = document.getElementById('email-validation-message');

emailInput.addEventListener('input', function(event) {
    if (!emailInput.validity.valid) {
        emailValidationMessage.style.display = 'block';
    } else {
        emailValidationMessage.style.display = 'none';
    }
});
