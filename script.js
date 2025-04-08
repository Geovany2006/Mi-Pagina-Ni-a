/*const boton = document.getElementById("boton");

boton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - boton.clientWidth);
    const y = Math.random() * (window.innerHeight - boton.clientHeight);
    
    boton.style.left = `${x}px`;
    boton.style.top = `${y}px`;
});*/

    const boton = document.getElementById('boton');
    const mensaje = document.getElementById('mensaje');
    const botonacepto = document.getElementById('botonacepto');

    const mensajes = [
    "Oye Que te Pasa?",
      "Por Me Persigues?",
      "¿Tu Otra vez ?",
      "¡Deja de Seguirmee!",
      "Entonces No me Quieres?",
      "¡Yaaa Bastaa!",
      "!!!Te estoy viendo!!!👀",
      "¡Aunque no quieras tendras que darle a Acepto!",
      "Cuando Pararas?",
      "Puedes intentarlo Toda La noche",
      "Nadie me Atrapa",
      "Ya Rindete",
      "Una Vez Mas?",
      "Me estas Cansando",
      "Bueno sigue Intentando"

    ];

    let index = 0;

    boton.addEventListener('mouseover', () => {
      // Mostrar el mensaje
      mensaje.textContent = mensajes[index];

      // Cambiar posición del botón a lugares random
      const x = Math.random() * (window.innerWidth - boton.offsetWidth);
      const y = Math.random() * (window.innerHeight - boton.offsetHeight);
      boton.style.left = x + 'px';
      boton.style.top = y + 'px';

      // Cambiar al siguiente mensaje
      index = (index + 1) % mensajes.length;
    });


    botonacepto.addEventListener('click', () => {
    mensaje.textContent = 'Sabia que Dirias que Si';
    });
    

