function load() {
	let popup = document.querySelector('.onm-popup')
	let popupClose = document.querySelector('.onm-popup-close')
	let btnPopup = document.querySelectorAll('.onm-btn')

	for (i = 0; i < btnPopup.length; i++)
		btnPopup[i].addEventListener("click", () => popup.style.display = "block" )

	popupClose.addEventListener('click', () => popup.style.display = "none" )
}

document.addEventListener("DOMContentLoaded", load)