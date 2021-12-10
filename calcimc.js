function Calcular() {
    var altura = document.getElementById("altura");
    var peso = document.getElementById("peso");
    var imc = peso.value / (altura.value * altura.value);

    var nivelImc = '';
    var imcAtual = +imc.toFixed(2)+" kg/m².";

    if (imc < 18.5) {
        nivelImc = "Magreza.";
    }
    else if (imc > 18.5 && imc < 24.9) {
        nivelImc = "Normal.";
    }
    else if (imc > 24.9 && imc <30) {
        nivelImc = "Sobrepeso.";
    }
    else if (imc > 30)
    {
        nivelImc = "Obesidade.";
    }
    document.getElementById('imcAtual').value = imcAtual;
    document.getElementById('nivelImc').value = nivelImc;
}