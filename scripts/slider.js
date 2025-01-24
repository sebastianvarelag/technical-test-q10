// He creado esto para manejar los sliders dinámicamente, es decir, que los items sean fáciles de cambiar.

const slides = {
  0: {
    title: '¡Únete a la expansión de Q10!',
    description: 'Es momento de crecer juntos.',
    button: '¡Afiliate ahora!',
  },
  1: {
    title: 'Líderes en Latinoamérica',
    description: 'Q10 contribuye al desarrollo de instituciones de educación y empresas mediante la transformación tecnológica de procesos académicos, administrativos, comerciales y de educación virtual.',
    button: 'Conocer más',
  },
};

// Cuando el DOM se haya cargado, llamaremos esta función.

window.addEventListener('load', () => {
  const list = document.querySelector('.slider__list');

  // Acá empleo buenas prácticas de manipulación del DOM, usando fragmentos para generar código HTML
  // Esto lo hago principalmente para ahorrar recursos.

  let fragmentContainer = document.createDocumentFragment();

  // Acá recorro el ciclo de los items, generando el HTML dinámicamente. 

  for (let slide in slides) {
    let div = document.createElement('DIV');
    div.innerHTML = `
            <div class="slider__item">
                <div class="slider__info">
                    <h3 class="slider__info__title">${slides[slide].title}</h3>
                    <p class="slider__info__description">${slides[slide].description}</p>
                    <a href="#" class="slider__info__button">${slides[slide].button}</a>
                </div>
            </div>
        `;

    div.classList.add('item');
    fragmentContainer.appendChild(div);
  }

  // Acá estamos añadiendo el fragmento final al contenedor de la lista
  
  list.appendChild(fragmentContainer);

  // Selecciono los items previamente creados.

  const items = document.querySelectorAll(
    '.slider__container .slider__list .slider__item'
  );

  // Selecciono los dots (los punticos del slider)
  const containerDots = document.querySelector('ul.slider__dots');

  let fragmentDots = document.createDocumentFragment();

  // Según la cantidad de items, creo los punticos dinámicamente.

  for (let i = 0; i < items.length; i++) {
    let li = document.createElement('LI');
    if (i == 0) {
      li.classList.add('active');
    }
    fragmentDots.appendChild(li);
  }

  // Lo añadimos, como el caso que expliqué anteriormente, solo que esta vez para los puntos.

  containerDots.append(fragmentDots);

  const dots = document.querySelectorAll('.slider .slider__dots li');

  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let active = 0;
  let lengthItems = items.length - 1;

  // Los handlers de los botones prev y next.

  next.addEventListener('click', () => {
    if (active + 1 > lengthItems) {
      active = 0;
    } else {
      active += 1;
    }
    reloadSlider();
  });

  prev.addEventListener('click', () => {
    if (active - 1 < 0) {
      active = lengthItems;
    } else {
      active = active - 1;
    }
    reloadSlider();
  });

  let refreshSlider = setInterval(() => {
    next.click();
  }, 5000);

  // Está función, es principalmente para recargar el slider, ya que pueden cambiar el tamaño de
  // pantalla y por ende, el movimiento de los puntos debe ser de diferente tamaño en px.

  function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
      next.click();
    }, 3000);
  }

  // Para cada puntico que se creó dinámicamente, al dar click lo activamos y recargamos el slider. 
  // El key es el índice del punto. (1 seria 0), etc.

  dots.forEach((li, key) => {
    li.addEventListener('click', () => {
      active = key;
      reloadSlider();
    });
  });

  // Esto lo añado principalmente por lo mismo, al redimensionar, pueden haber cambios, así que
  // No se rompa y se recargue el slider otra vez.

  window.addEventListener('resize', () => {
    reloadSlider();
  });
});
