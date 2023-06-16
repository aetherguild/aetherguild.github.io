	const dropdowns = document.querySelectorAll('.dropdown');

	dropdowns.forEach(dropdown => {
		const parentLink = dropdown.querySelector('a');
		const submenu = dropdown.querySelector('.dropdown-menu');

		parentLink.addEventListener('click', () => {
			submenu.classList.toggle('open');
		});
	});
