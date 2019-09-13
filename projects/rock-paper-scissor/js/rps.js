const user_choice = document.getElementById('user');
const comp_choice = document.getElementById('computer');

const game_score = document.querySelector('.game-score-board');
const game_score_user = game_score.firstElementChild;
const game_score_comp = game_score.lastElementChild;

const game_select = document.querySelector('.game-select-rps');

const ROCK_PATH = './img/rock-lg.png';
const PAPER_PATH = './img/paper-lg.png';
const SCISSOR_PATH = './img/scissor-lg.png';

const RPS = [ROCK_PATH, PAPER_PATH, SCISSOR_PATH];
let user_score = 0;
let comp_score = 0;

const buttons = document.querySelectorAll('.game-select-rps button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        document.getElementById('tie').textContent = '';

        let compValue = Math.floor((Math.random() * 3));
        let userValue = button.getAttribute('data-key');

        comp_choice.firstElementChild.src = RPS[compValue];
        user_choice.firstElementChild.src = RPS[userValue];

        updateScore(userValue, compValue);

        if(user_score == 5 || comp_score == 5) {
            gameover();
            return;
        }
    });
});

function updateScore(userValue, compValue) {
    let userScore = userValue - compValue;
    let compScore = compValue = userValue;

     if (userScore == 2 || userScore == -1) {
         ++comp_score;
     } else if (userScore == -2 || userScore == 1) {
         ++user_score;
     } else {
        document.getElementById('tie').textContent = 'TIE';
         return;
     }

     game_score_user.textContent = user_score;
     game_score_comp.textContent = comp_score;
}

function gameover() {
    const winner_cssfmt = 'background-color: rgba(175, 200, 255, 0.5);';
    const score_cssfmt = "color: rgb(0, 80, 255); font-size: 48px;";

    if(user_score == 5) {
        game_score_user.textContent = 'WINNER';
        game_score_user.style.cssText = score_cssfmt;
        user_choice.style.cssText = winner_cssfmt;
    } else {
        game_score_comp.textContent = 'WINNER';
        game_score_comp.style.cssText = score_cssfmt;
        comp_choice.style.cssText = winner_cssfmt;
    }
    
    game_select.removeChild(buttons[0]);
    game_select.removeChild(buttons[1]);
    game_select.removeChild(buttons[2]);

    const refresh = document.createElement('a');
    refresh.style.cssText = "font-size: 48px;";
    refresh.textContent = 'Refresh the page to start over.';
    game_select.appendChild(refresh);
}