let size = 15;
let cells;
let color_btn;
let color_btn_txts = ['Color', 'Black'];
let reset;
let count = 0;
let toggle = 0;

console.log(size);

function createTemplate() {
    const div_main = document.createElement('div');
    div_main.classList.add('etch-a-sketch');

    const div_header = document.createElement('div');
    div_header.classList.add('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Etch A Sketch';

    div_header.appendChild(h1);
    div_main.appendChild(div_header);

    document.body.appendChild(div_main);
}

function createBoard() {
    if(size <= 0 || isNaN(size)) {
        console.log('Minimum grid size is 1');
        size = 1;
    } else if(size > 64) {
        console.log('Maximum grid size is 64.');
        size = 64;
    }

    const boardDiv = document.createElement('div');
    boardDiv.classList.add('board-container');

    for (var index = 0; index < size; ++index) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (var jndex = 0; jndex < size; ++jndex) {
            let col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);
        }
        boardDiv.appendChild(row);
    }
    document.querySelector('.etch-a-sketch').appendChild(boardDiv);
}

function createResetButton() {
    const div = document.createElement('div');
    div.classList.add('reset');

    const div_left = document.createElement('div');
    const reset_button = document.createElement('button');
    reset_button.classList.add('reset-button');
    reset_button.textContent = "Reset";
    div_left.appendChild(reset_button);

    const div_mid = document.createElement('div');

    const div_right = document.createElement('div');
    const color_button = document.createElement('button');
    color_button.classList.add('color-button');
    color_button.textContent = "Color";
    div_right.appendChild(color_button);

    div.appendChild(div_left);
    div.appendChild(div_mid);
    div.appendChild(div_right);

    document.querySelector('.etch-a-sketch').appendChild(div);
}

function sketch() {
    color_btn = document.querySelector('.color-button');
    cells = document.querySelectorAll('.col');
    
    color_btn.addEventListener('click', (e) => {
        toggle = !toggle;
    
        if(toggle === true) {
            color_btn.textContent = "Black";
        } else {
            color_btn.textContent = "Color";
        }
    });

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            let R, G, B;
    
            if(count == 10) {
                R = G = B = 0;
                count = 0;
            } else {
                ++count;
                R = Math.floor(Math.random() * 255 + 1);
                G = Math.floor(Math.random() * 255 + 1);
                B = Math.floor(Math.random() * 255 + 1);
            }
    
            if(toggle == 1) {
                cell.style.backgroundColor = `rgba(${R}, ${G}, ${B}, 1.0)`;
            } else {
                cell.style.backgroundColor = `rgba(0, 0, 0, 1.0)`;
            }
        });
    });
}

function reset_func() {
    size = parseInt(prompt("grid size: "));
    document.body.removeChild(document.querySelectorAll('div')[0]);
    createTemplate();
    createBoard();
    createResetButton();
    sketch();
    reset = document.querySelector('.reset button');
    reset.addEventListener('click', (e) => {
        reset_func();
     });
}

createTemplate();
createBoard();
createResetButton();
sketch();

reset = document.querySelector('.reset button');
reset.addEventListener('click', (e) => {
   reset_func();
});