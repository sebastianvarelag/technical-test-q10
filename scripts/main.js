// Cambio en el navbar al momento de hacer scroll.
window.addEventListener('load', () => {
	window.addEventListener('scroll', () => {
		const nav = document.querySelector('.nav');
		const navResponsive = document.querySelector('.nav');
		nav?.classList.toggle('nav__sticky', window.scrollY > 0);
		navResponsive?.classList.toggle('nav__sticky', window.scrollY > 0);
	});

	// Funcionalidad para el menú responsive.

	const btnHamburger = document.querySelector('.nav__hamburger');
	const btnClose = document.querySelector('.nav__close');
	const menuResponsive = document.querySelector('.nav__menu__responsive');

	const openMenu = () => {
		menuResponsive.style.right = '0';
		document.body.style.overflow = 'hidden';
	};

	const closeMenu = () => {
		menuResponsive.style.right = '-100%';
		document.body.style.overflow = 'auto';
	};

	btnHamburger.addEventListener('click', openMenu);
	btnClose.addEventListener('click', closeMenu);

	// Nota: La siguiente función es hecha en caso de que haya un resize y el menú este abierto con una
	//        pantalla lo suficientemente ancha para cargar el menú normal.

	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			closeMenu();
		}
	});
});
