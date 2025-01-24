
// Esperamos a que cargue por completo

window.addEventListener('load', () => {

  window.addEventListener('scroll', () => {

    const items = document.querySelectorAll('.fade');

    items.forEach(item => {

      // Obtenemos el calculo de la altura de la pantalla.
      let winHeight = window.innerHeight;
      // Obtenemos la posición de altura del item en cuestión respecto a la pantalla
      const fadeTop = item.getBoundingClientRect().top;
      // Y aquí definimos como una especie de punto de activación.
      const fadePoint = 100;

      // Por último, en esta partecita, hacemos la condición, donde si el punto de activación es menor que la altura de la pantalla, se activa. (Esto lo hacemos añadiendo una clase, en este caso show la cual contiene las propiedades CSS que necesitamos para que se muestre.)
      if (fadeTop < winHeight - fadePoint) {
        item.classList.add('show');
      }else{
        item.classList.remove('show');
      }
    })
  })

});
