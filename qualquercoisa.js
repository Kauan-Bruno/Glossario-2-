let intervaloCores;
let modoAtivo = false;

function ativarModoMaluco() {
    const musica = document.getElementById("musica");

    if (!modoAtivo) {
        modoAtivo = true;
        musica.play();

        intervaloCores = setInterval(() => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }, 100);
    } else {
        modoAtivo = false;
        musica.pause();
        musica.currentTime = 0;
        clearInterval(intervaloCores);
    }
}
