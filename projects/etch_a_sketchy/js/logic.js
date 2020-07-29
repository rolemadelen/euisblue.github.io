const container = document.querySelector('.container');
const btnClear = document.getElementById('btn-clear');
const btnNew = document.getElementById('btn-new');
let pencilColor = document.getElementById('pencil-color');

let grid = 30;

function drawGrid() {
	horizontal();
}

function horizontal() {
	for(let i=0; i<grid; ++i) {
		let div = document.createElement('div')
		div.className = 'horizontal';
		container.append(div);
		vertical(div)
	}
}

function vertical(div) {
	for(let i=0; i<grid; ++i) {
		let div2 = document.createElement('div')
		div2.className = 'vertical';
		div.append(div2);
	}

	let cells = document.querySelectorAll('.vertical');
	cells.forEach(cell => {

		cell.addEventListener('mouseenter', e => {
			let inputs = document.querySelectorAll('div.color input');
			let color = inputs[0].checked;

			if(color) {
				cell.style.backgroundColor = pencilColor.value;
			} else {
				let temp = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
				cell.style.backgroundColor = '#' + temp;
			}
		});
	});
}

btnClear.addEventListener('click', e => {
	let cells = document.querySelectorAll('.vertical');
	cells.forEach(cell => {
		cell.style.backgroundColor = 'white';
	});
});

btnNew.addEventListener('click', e => {
	grid = Number(prompt("How many squares per side?"));
	grid = (grid > 64) ? 64 : grid;
	grid = (grid < 1) ? 1 : grid;
	children = container.children;
	let size = children.length;
	for(let i=0; i<size; ++i) {
		container.removeChild(children[0]);
	}
	drawGrid();
});

window.onload = drawGrid;
