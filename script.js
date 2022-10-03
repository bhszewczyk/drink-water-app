const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

updateGoalCup();

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

	updateGoalCup();
}

function updateGoalCup() {
	const fullCups = document.querySelectorAll('.full').length;

	if (fullCups === 0) {
		percentage.style.height = 0;
		percentage.style.opacity = 0;
		return;
	}

	// number of full cups * 250ml / 2 liters in percentage
	const goalPercentage = ((fullCups * 0.25) / 2) * 100;
	percentage.style.height = `${goalPercentage}%`;
	percentage.innerText = `${goalPercentage}%`;
	percentage.style.opacity = 1;

	const left = 100 - goalPercentage;
	if (left === 0) {
		remaining.style.height = 0;
		remaining.style.opacity = 0;
	}
	remaining.innerText = `${left}%`;
}
