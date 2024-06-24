document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    displayMessage(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    displayMessage(decryptedText);
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encrypt(text) {
    let result = text.replace(/e/g, "enter")
                     .replace(/i/g, "imes")
                     .replace(/a/g, "ai")
                     .replace(/o/g, "ober")
                     .replace(/u/g, "ufat");
    return result;
}

function decrypt(text) {
    let result = text.replace(/enter/g, "e")
                     .replace(/imes/g, "i")
                     .replace(/ai/g, "a")
                     .replace(/ober/g, "o")
                     .replace(/ufat/g, "u");
    return result;
}

function displayMessage(message) {
    document.getElementById('outputText').value = message;
}
