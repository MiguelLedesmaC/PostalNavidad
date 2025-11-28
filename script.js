// Nieve
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}
setInterval(createSnowflake, 200);


// Abrir regalo

const regalo = document.querySelector('.regalo');
const modal = document.querySelector('.modal');
const tapa = document.querySelector('.tapa');
const abrirRegalo = document.getElementById('abrirRegalo');
const papaNoel = document.getElementById(".santa-img")

setInterval(() => {
  regalo.style.opacity = "1"
  regalo.style.transition = "opacity 2s";
  regalo.addEventListener("click", () => {
    abrirRegalo.play();
    tapa.classList.add("open");
    setInterval(() => {
      modal.classList.add("show");
      papaNoel.style.left = "-100%";
    }, 500)

  })


}, 7000)


setInterval(() => {
  
}, interval);

const villancicoFondo = document.getElementById('villancico-fondo');

if (villancicoFondo && villancicoFondo.muted) {
        villancicoFondo.muted = false; // Intenta desmutear
        villancicoFondo.play().catch(e => {
            console.warn("La música sigue bloqueada.");
        });
}
