
<script type="module">
  // 🎉 Efecto de confetti inicial
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });

  // 🎉 Efecto de confetti al descargar la tarjeta
  document.addEventListener('DOMContentLoaded', function () {
    const btnDescargar = document.querySelector('a[download]');
    if (btnDescargar) {
      btnDescargar.addEventListener('click', function (e) {
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

    // ✍️ Efecto máquina de escribir
    const texto = "🎉 ¡Es mi cumpleaños! 🎉";
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

  // 🔥 Firebase imports desde CDN (modular)
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

  // 🔧 Config de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCeXxYxvBriXpNUdOHLO_uFz-OSaXzS7xk",
    authDomain: "fiesta2-e0d9b.firebaseapp.com",
    projectId: "fiesta2-e0d9b",
    storageBucket: "fiesta2-e0d9b.appspot.com",
    messagingSenderId: "1056013652204",
    appId: "1:1056013652204:web:9685795901e0b04a9795c9"
  };

  // 🔌 Inicializa Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // 🎁 Lógica para formulario de mensajes
  const formulario = document.getElementById("formularioMensaje");
  const lista = document.getElementById("listaMensajes");

  if (formulario && lista) {
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (nombre && mensaje) {
        await addDoc(collection(db, "mensajes"), {
          nombre,
          mensaje
        });
        formulario.reset();
      }
    });

    // Mostrar mensajes en tiempo real
    onSnapshot(collection(db, "mensajes"), (snapshot) => {
      lista.innerHTML = "";
      snapshot.forEach((doc) => {
        const data = doc.data();
        const div = document.createElement("div");
        div.className = "mensaje";
        div.innerHTML = `<strong>🎉 ${data.nombre}:</strong> ${data.mensaje}`;
        lista.appendChild(div);
      });
    });
  }
</script>


