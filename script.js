document.addEventListener('DOMContentLoaded', () => {
    const botaoIniciarJogo = document.getElementById('botaoIniciarJogo');
    const telaInicial = document.getElementById('telaInicial');
    const areaJogo = document.getElementById('areaJogo');
    const botaoLancarMoeda = document.getElementById('botaoLancarMoeda');
    const resultadoDisplay = document.getElementById('resultado');
    const contadorVitoriasDisplay = document.getElementById('contadorVitorias');
    let contadorVitorias = 0;

    botaoIniciarJogo.addEventListener('click', () => {
        telaInicial.style.display = 'none';
        areaJogo.style.display = 'block';
    });

    botaoLancarMoeda.addEventListener('click', () => {
        const escolhaUsuario = document.querySelector('input[name="escolha"]:checked').value;
        const resultadoMoeda = Math.random() < 0.5 ? 'Cara' : 'Coroa';
        resultadoDisplay.textContent = resultadoMoeda;

        if (escolhaUsuario === resultadoMoeda) {
            contadorVitorias++;
        }
        
        contadorVitoriasDisplay.textContent = contadorVitorias;
    });
});
