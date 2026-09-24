document.addEventListener('DOMContentLoaded', function () {
    let featured = document.getElementById('featured');
    let slides = document.querySelectorAll('#featured img');
    let indicadores = document.querySelectorAll('#slide-indicadores span');
    let atual = 0;
    let total = slides.length;
    let intervalo;

    function posicionar() {
        let deslocamento = atual * 960;
        featured.style.transform = 'translateX(-' + deslocamento + 'px)';

        indicadores.forEach(function (bolinha, i) {
            bolinha.classList.toggle('ativo', i === atual);
        });
    }

    function proximo() {
        atual = (atual + 1) % total;
        posicionar();
    }

    function anterior() {
        atual = (atual - 1 + total) % total;
        posicionar();
    }

    function iniciarAutoSlide() {
        intervalo = setInterval(proximo, 4000);
    }

    function reiniciarAutoSlide() {
        clearInterval(intervalo);
        iniciarAutoSlide();
    }

    // Botões de seta
    document.getElementById('seta-direita').addEventListener('click', function () {
        proximo();
        reiniciarAutoSlide();
    });

    document.getElementById('seta-esquerda').addEventListener('click', function () {
        anterior();
        reiniciarAutoSlide();
    });

    // Bolinhas indicadoras
    indicadores.forEach(function (bolinha, i) {
        bolinha.addEventListener('click', function () {
            atual = i;
            posicionar();
            reiniciarAutoSlide();
        });
    });

    posicionar();
    iniciarAutoSlide();
});