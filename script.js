const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => {
		fillCups(index);
	});
});

function fillCups(idx) {
	if (
		smallCups[idx].classList.contains('full') &&
		!smallCups[idx + 1].classList.contains('full')
	) {
		idx--;
	}

	smallCups.forEach((cup, index) => {
		if (index <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
}
