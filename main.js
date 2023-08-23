document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imc-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100;

        if (weight === 0 || height === 0) {
            resultDiv.innerText = 'Peso e altura não podem ser zero.';
            return;
        }

        const imc = weight / (height * height);

        let nivelImc = '';
        let imcAtual = +imc.toFixed(2) + " kg/m².";

        if (imc < 18.5) {
            nivelImc = "Magreza.";
        } else if (imc > 18.5 && imc < 24.9) {
            nivelImc = "Normal.";
        } else if (imc > 24.9 && imc < 30) {
            nivelImc = "Sobrepeso.";
        } else if (imc > 30) {
            nivelImc = "Obesidade.";
        }

        resultDiv.innerText = `Seu IMC é ${imcAtual} (${nivelImc})`;
    });

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', function() {
        form.reset();
        resultDiv.textContent = '';
    });
});