function esconderMostrarNotícias() {
  var element = document.getElementById("telaNotícias");
  element.classList.toggle("minimizar");
}

let clicado = 0;
console.log(clicado);
function entrarClicado() {
  if (clicado === 0) {
    document.querySelector("#entrarBtn p").classList.add("esconder");
    const input = document.createElement("input");
    input.classList.add("inputzinho");
    input.placeholder = "código aqui";
    document.getElementById("entrarBtn").appendChild(input);
    clicado = 1;
    console.log(clicado);
  }
}

const gradientElement = document.querySelector(".mouse-cursor-gradient-tracking");
let rect = gradientElement.getBoundingClientRect();
let isRunning = false;

// Cache the rect on resize (if the element's position changes)
window.addEventListener("resize", () => {
  rect = gradientElement.getBoundingClientRect();
});

gradientElement.addEventListener("mousemove", (e) => {
  if (!isRunning) {
    isRunning = true;
    requestAnimationFrame(() => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gradientElement.style.setProperty("--x", x + "px");
      gradientElement.style.setProperty("--y", y + "px");
      isRunning = false;
    });
  }
});

const numeroRandom = Math.random()*20

console.log(numeroRandom);

const spanRotate = document.getElementById('#fourlenblur').getElementsByTagName("span");
spanRotate.style.setProperty('transform: rotate(', numeroRandom +'deg', ")");