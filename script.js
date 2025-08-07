// 🎉 Confetti al cargar la página
confetti({
  particleCount: 150,
  spread: 120,
  origin: { y: 0.6 }
});

// 🎉 Confetti al descargar la tarjeta
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

  // ✍️ Typewriter effect
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
  escribir();
});

// 🔥 Firebase (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeXxYxvBriXpNUdOHLO_uFz-OSaXzS7xk",
  authDomain: "fiesta2-e0d9b.firebaseapp.com",
  projectId: "fiesta2-e0d9b",
  storageBucket: "fiesta2-e0d9b.appspot.com",
  messagingSenderId: "1056013652204",
  appId: "1:1056013652204:web:9685795901e0b04a9795c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const formulario = document.getElementById("formularioMensaje");
const lista = document.getElementById("listaMensajes");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  await addDoc(collection(db, "mensajes"), {
    nombre: nombre,
    mensaje: mensaje
  });

  formulario.reset();
});

// Mostrar mensajes en tiempo real
onSnapshot(collection(db, "mensajes"), (snapshot) => {
  lista.innerHTML = ""; // Limpia primero
  snapshot.forEach((doc) => {
    const data = doc.data();
    const p = document.createElement("p");
    p.textContent = `🎉 ${data.nombre}: ${data.mensaje}`;
    lista.appendChild(p);
  });
});
