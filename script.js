const array = ['fa-hand-back-fist', 'fa-hand', 'fa-hand-scissors'];
const text_array = ['Rock', 'Paper', 'Scissors'];

// selecting input displayed by both user and computer
const user_click = document.querySelector('[data-input="user"]');
const computer_input = document.querySelector('[data-input="computer"]');

const computer_text = document.getElementById('computer-text');
const user_text = document.getElementById('user-text');

const result = document.getElementById('result');

const input_buttons = document.querySelectorAll('[data-input="input_icons"]');

// console.log(input_buttons);

function displayResult(user, computer) {
    // winning logic starts here
    // user_click   computer_input  elements
    // user         computer        number
    // 0-rock   1-paper    2-scissors
    let text;
    if(user === 0) {
        if(computer === 0) {
            text = 'Tie';
        }
        else if(computer === 1) {
            text = 'Computer wins';
        }
        else if(computer === 2) {
            text = 'You win';
        }
    }
    else if(user === 1) {
        if(computer === 0) {
            text = 'You win';
        }
        else if(computer === 1) {
            text = 'Tie';
        }
        else if(computer === 2) {
            text = 'Computer wins';
        }
    }
    else if(user === 2) {
        if(computer === 0) {
            text = "Computer wins";
        }
        else if(computer === 1) {
            text = "You win";
        }
        else if(computer === 2) {
            text = 'Tie';
        }
    }
 
    result.innerHTML = text;
}

function user_logic(event) {
    // console.log(event.target);

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
        user_text.innerHTML = text_array[2];
    }
    else if(dataItem === 'rock') {
        user_click.classList.add(array[0]);
        user = 0;
        user_text.innerHTML = text_array[0];
    }
    else if(dataItem === 'paper') {
        user_click.classList.add(array[1]);
        user = 1;
        user_text.innerHTML = text_array[1];
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
        computer_text.innerHTML = text_array[0];
    }
    else if(computer === 1) {
        computer_input.classList.add(array[1]);
        computer_text.innerHTML = text_array[1];
    }
    else if(computer === 2) {
        computer_input.classList.add(array[2]);
        computer_text.innerHTML = text_array[2];
    }
    // computer part ends here


    // declare result
    setTimeout(displayResult(user, computer), 500);

}

input_buttons.forEach((icon) => {
    icon.addEventListener('click', user_logic);
});