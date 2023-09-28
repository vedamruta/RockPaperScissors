const array = ['fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors'];
const text_array = ['Rock', 'Paper', 'Scissors'];

// selecting input displayed by both user and computer
const user_click = document.querySelector('[data-input="user"]');
const computer_input = document.querySelector('[data-input="computer"]');

// selecting input text displayed by both user and computer
const computer_text = document.getElementById('computer-text');
const user_text = document.getElementById('user-text');

// modal result heading component
const result = document.getElementById('result');

const input_buttons = document.querySelectorAll('[data-input="input_icons"]');

// console.log(input_buttons);

let text = "";

// to count no. of attempts (maximum attempted allowed 5)
let count = 0;

// computer score
let computer_score = 0;
const computer_score_ele = document.getElementById('computer-score');
// user score
let user_score = 0;
const user_score_ele = document.getElementById('user-score');

// div containing result text(heading)
const modal = document.querySelector('.modal');

// new game button selection
const new_game_ele = document.getElementById('new-game');
// new game code
new_game_ele.addEventListener('click', newGameFunction);

function newGameFunction() {
    computer_score = 0;
    user_score = 0;
    computer_score_ele.innerHTML = "0";
    user_score_ele.innerHTML = "0";
    count = 0;
    modal.classList.add('hidden');
    input_buttons.forEach((icon) => {
        icon.addEventListener('click', user_logic);
    });
}


function displayResult(user, computer) {
    // winning logic starts here
    // user_click   computer_input  elements
    // user         computer        number
    // 0-rock   1-paper    2-scissors

    if(user < computer) { 
        text = "Computer wins";
    }
    else if(user > computer) { 
        text = "You win";
    }
    else { 
        text = "Tie";
    }

    result.innerHTML = text;
    if(modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
    }
}

function user_logic(event) {
    // console.log(event.target);
    
    if (count == 5) {
        // result.innerHTML = " GAME OVER";
        input_buttons.forEach((icon) => {
            icon.removeEventListener('click', user_logic);
        });
        // console.log(count);
        count = 0;
        // console.log(count);
    setTimeout(displayResult(user_score, computer_score), 500);

    }

    // if(count == 5) {
    //     result.innerHTML += " GAME OVER";
    //     input_buttons.forEach((icon) => {
    //         event.preventDefault();
    //     });
    //     // event.preventDefault();
    //     console.log(count);
    //     // count = 0;
    // }

    // user part starts here
    let user;
    if (user_click.classList.contains(array[2])) {
        user_click.classList.remove(array[2])
    }
    else if(user_click.classList.contains(array[1])) {
        user_click.classList.remove(array[1]);
    }
    else if(user_click.classList.contains(array[0])) {
        user_click.classList.remove(array[0]);
    }
      
    const dataItem = event.target.dataset.item;
    if(dataItem === 'scissors') {
        user_click.classList.add(array[2]);
        user = 2;
        // user_score.innerHTML = text_array[2];
    }
    else if(dataItem === 'rock') {
        user_click.classList.add(array[0]);
        user = 0;
        // user_text.innerHTML = text_array[0];
    }
    else if(dataItem === 'paper') {
        user_click.classList.add(array[1]);
        user = 1;
        // user_text.innerHTML = text_array[1];
    }
    // user part ends here


    // computer part starts here
    let computer = Math.floor(Math.random() * 3);
    if(computer_input.classList.contains(array[0])) {
        computer_input.classList.remove(array[0]);
    }
    else if(computer_input.classList.contains(array[1])) {
        computer_input.classList.remove(array[1]);
    }
    else if(computer_input.classList.contains(array[2])) {
        computer_input.classList.remove(array[2]);
    }
    if(computer === 0) {
        computer_input.classList.add(array[0]);
        // computer_text.innerHTML = text_array[0];
    }
    else if(computer === 1) {
        computer_input.classList.add(array[1]);
        // computer_text.innerHTML = text_array[1];
    }
    else if(computer === 2) {
        computer_input.classList.add(array[2]);
        // computer_text.innerHTML = text_array[2];
    }
    // computer part ends here

    if(user === 0) {
        if(computer === 0) {
            computer_score++;
            user_score++;
            computer_score_ele.innerHTML = computer_score;
            user_score_ele.innerHTML = user_score;
        }
        else if(computer === 1) {
            computer_score++;
            computer_score_ele.innerHTML = computer_score;
        }
        else if(computer === 2) {
            user_score++;
            user_score_ele.innerHTML = user_score;
        }
    }
    else if(user === 1) {
        if(computer === 0) {
            user_score++;
            user_score_ele.innerHTML = user_score;
        }
        else if(computer === 1) {
            user_score++;
            computer_score++;
            user_score_ele.innerHTML = user_score;
            computer_score_ele.innerHTML = computer_score;
        }
        else if(computer === 2) {
            computer_score++;
            computer_score_ele.innerHTML = computer_score;
        }
    }
    else if(user === 2) {
        if(computer === 0) {
            computer_score++;
            computer_score_ele.innerHTML = computer_score;
        }
        else if(computer === 1) {
            user_score++;
            user_score_ele.innerHTML = user_score;
        }
        else if(computer === 2) {
            computer_score++;
            user_score++;
            computer_score_ele.innerHTML = computer_score;
            user_score_ele.innerHTML = user_score;
        }
    }

    console.log(computer_score);
    console.log(user_score);

    count++;

}

input_buttons.forEach((icon) => {
    icon.addEventListener('click', user_logic);
    // setTimeout(displayResult(user, computer), 500);
});