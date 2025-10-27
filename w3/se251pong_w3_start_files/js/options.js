/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var option = document.querySelector(`#options h2`);

var side = document.querySelector(`#options .sides`);

if (option && side) {
    option.addEventListener(`click`, e=> {
        side.classList.toggle(`hidden`);
    });
}


/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var fill = document.querySelectorAll(`.fill`);

fill.forEach((input) => {
    var playerId = input.dataset.player;
    var output = input.nextElementSibling; 
    var paddle = document.querySelector(`#player${playerId} paddle`);

    if (paddle) {
        input.value = paddle.style.fill || `#ffffff`;
        if (output) output.innerHTML = input.value;
    }

    input.addEventListener(`input`, (e) => {
        var color = e.target.value;
        if (paddle) paddle.style.fill = color;
        if (output) output.innerHTML = color;
    });
});

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
let currentState = `play`; 

const keyClasses = ['u', 'd', 's']; 
keyClasses.forEach((keyClass) => {
    var inputs = document.querySelectorAll(`.${keyClass}`);
    inputs.forEach((input, index) => {
        var player = players[`player${index + 1}`];
        var output = input.nextElementSibling;

        input.value = player.keys[keyClass];
        if (output) output.textContent = player.keys[keyClass];

        input.addEventListener(`keydown`, (e) => {
            e.preventDefault();
            let keyName = e.key;
            input.value = keyName;
            player.keys[keyClass] = keyName;
            if (output) output.textContent = keyName;
        });

        input.addEventListener(`focus`, () => {
            currentState = `pause`;
        });
    });
});

//Stroke

var stroke = document.querySelectorAll(`.stroke`);

stroke.forEach((input, index) => {
    var playerId = index + 1;
    var output = input.nextElementSibling;
    var paddle = document.querySelector(`#player${playerId} paddle`);

    if (paddle) {
        var computedStroke = getComputedStyle(paddle).stroke;
        input.value = computedStroke || '#000000';
        if (output) output.textContent = input.value;
    }

    input.addEventListener(`input`, (e) => {
        var color = e.target.value;
        if (paddle) paddle.style.stroke = color;
        if (output) output.textContent = color;
    });
});
//Straight Keys
var straight = document.querySelectorAll('.s');

straight.forEach(function(input, index) {
    var player = players['player' + (index + 1)];
    var output = input.nextElementSibling;

    input.value = player.keys.s;
    if (output) output.textContent = player.keys.s;

    input.addEventListener('keydown', function(e) {
        e.preventDefault();
        var key = e.key;
        if (key.length === 1) key = key.toLowerCase();
        input.value = key;
        player.keys.s = key;
        if (output) output.textContent = key;
    });

    input.addEventListener('focus', function() {
        currentState = 'pause';
    });
});