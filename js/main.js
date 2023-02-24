document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
})
