const CRIPT_WORDS = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

const DECRIPT_WORDS = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
};

function criptografar(texto = new String()) {
    let texto_criptografado = new String();

    for (let palavra of texto) {
        if (CRIPT_WORDS[palavra] != null) {
            texto_criptografado += CRIPT_WORDS[palavra];
        } else {
            texto_criptografado += palavra;
        }
    }
    return texto_criptografado;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function decriptografar(texto = new String()) {

    for (let index = 0; index < 5; index++) {

        const palavra_procurar = Object.keys(DECRIPT_WORDS)[index];
        const palavra_trocar = DECRIPT_WORDS[palavra_procurar]
        texto = replaceAll(texto, palavra_procurar, palavra_trocar);
    }
    return texto;
}


const button_cript = document.querySelector('.btn-encriptar');

button_cript.addEventListener('click', function () {
    const texto = document.querySelector('#texto').value;

    const caracter_numeros = /[0-9]/g;
    const caracter_uppercases = /[A-Z]/g;
    const caracter_especiais = /[/[\@#$-/:-?{-~!"^_`[]/g;

    if (texto.match(caracter_numeros)) {
        alert('Por favor!\nDigite apenas LETRAS.');
        return;
    }
    if (texto.match(caracter_uppercases) != null) {
        alert('Por favor!\nDigite apenas letras minúsculas.');
        return
    }
    if (texto.match(caracter_especiais) != null) {
        alert('Por favor!\nDigite apenas letras e números.');
        return
    }



    const texto_criptografado = criptografar(texto);

    document.querySelector('.container-row-right').classList.remove('empty');
    document.querySelector('.empty-message').classList.add('hide');

    const textElement = document.querySelector('.info-text');
    textElement.innerHTML = texto_criptografado;
    replayCSSAnimation(textElement, 'fade-in');
});


const button_decript = document.querySelector('.btn-descriptografar');

button_decript.addEventListener('click', function () {
    const texto = document.querySelector('#texto').value;

    const caracter_numeros = /[0-9]/g;
    const caracter_uppercases = /[A-Z]/g;
    const caracter_especiais = /[/[\@#$-/:-?{-~!"^_`[]/g;

    if (texto.match(caracter_numeros)) {
        alert('Por favor!\nDigite apenas LETRAS.');
        return;
    }
    if (texto.match(caracter_uppercases) != null) {
        alert('Por favor!\nDigite apenas letras minúsculas.');
        return
    }
    if (texto.match(caracter_especiais) != null) {
        alert('Por favor!\nDigite apenas letras e números.');
        return
    }


    const texto_descriptografado = decriptografar(texto);

    document.querySelector('.container-row-right').classList.remove('empty');
    document.querySelector('.empty-message').classList.add('hide');

    const textElement = document.querySelector('.info-text');
    textElement.innerHTML = texto_descriptografado;
    replayCSSAnimation(textElement, 'fade-in');
});


const button_clean = document.querySelector('.btn-limpar');

button_clean.addEventListener('click', function () {
    replayCSSAnimation(document.querySelector('body'), 'blink');
    document.querySelector('#texto').value = '';
    document.querySelector('.container-row-right').classList.add('empty');
    document.querySelector('.empty-message').classList.remove('hide');
    document.querySelector('.info-text').innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar.';

});


function copyOnClick(element) {
    element.addEventListener('click', () => {
        const textToCopy = element.innerText

        navigator.clipboard.writeText(textToCopy).then(
            function () {
                window.alert('Texto copiado com sucesso!');
            },
            function () {
                window.alert('Erro ao copiar texto!');
            }
        )
    });
}
const textToCopy = document.querySelector('.info-text')
copyOnClick(textToCopy)



function replayCSSAnimation(element, animationName) {
    element.classList.add('animated', animationName);
    element.addEventListener('animationend', function () {
        element.classList.remove('animated', animationName);
    });
}