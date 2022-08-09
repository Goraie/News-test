const hamburger = document.querySelector('.header__humburger'), 
			menu = document.querySelector('.header__all-menu')
hamburger.addEventListener('click', () => {
	menu.classList.toggle('open')
})
