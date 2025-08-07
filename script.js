// 🎉 Confetti al cargar la página
confetti({
  particleCount: 150,
  spread: 120,
  origin: { y: 0.6 }
});

// 🎉 Confetti y efecto de escribir al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Confetti al hacer clic en descargar
  const btnDescargar = document.querySelector("a[download]");
  if (btnDescargar) {
    btnDescargar.addEventListener("click", function (e) {
      e.preventDefault();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        window.location.href = btnDescargar.href;
      }, 1000);
    });
  }

  // ✍️ Efecto de escribir
  const texto = "🎉Es mi cumpleaños!! 🎉";
  const speed = 100;
  let i = 0;
  function escribir() {
    if (i < texto.length) {
      document.getElementById("typewriter").innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, speed);
    }
  }

  if (document.getElementById("typewriter")) {
    escribir();
  }
});
