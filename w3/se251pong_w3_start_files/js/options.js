/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var option = document.querySelector(`#options h2`);

var side = document.querySelector(`#options .sides`);

if (option && side) {
    option.addEventListener(`click`, ()=> {
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

fill.forEach((input, index) => {
    var output = input.nextElementSibling; 
    var paddle = player[index].pad;
    var p = player[index];

    input.value = p.fill || `#ffffff`

    if(output) output.innerHTML  = input.value;
    input.addEventListener(`input`, (e) => {
        var color = e.target.value;
        p.fill = color;
        paddle.fill = color;
        if(output) output.innerHTML = color; 
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

const keyClasses = ['u', 'd']; 

keyClasses.forEach((keyClass) => {
    var inputs = document.querySelectorAll(`.${keyClass}`);
    inputs.forEach((input, index) => {
        var p = player[index];
        var output = input.nextElementSibling;

        input.value = p.keys[keyClass];
        if (output) output.textContent = p.keys[keyClass];

        input.addEventListener(`keydown`, (e) => {
            e.preventDefault();
            let keyName = e.key;
            input.value = keyName;
            p.keys[keyClass] = keyName;
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
    var output = input.nextElementSibling;
    var paddle = player[index].pad;
    var p = player[index];
    
    input.value = p.stroke || `#000000`
    if (output) output.textContent = input.value;

    input.addEventListener(`input`, (e) => {
        var color = e.target.value;
        p.stroke = color;
        paddle.stroke = color;
        if(output) output.textContent = color;
    });
});
//Straight Keys
var straight = document.querySelectorAll('.s');

straight.forEach(function(input, index) {
    var p = player[index];
    var output = input.nextElementSibling;

    input.value = p.keys.s;
    if (output) output.textContent = p.keys.s;

    input.addEventListener('keydown', function(e) {
        e.preventDefault();
        var key = e.key;
        input.value = key;
        p.keys.s = key;
        if (output) output.textContent = key;
    });


    input.addEventListener('focus', () => {
        currentState = 'pause';
    });
});

//Background Color
var BackgroundColorInput = document.querySelector('#background-color');
var BackgroundOutput = document.querySelector('#background-output');
var canvas = document.querySelector('#pong');

if (BackgroundColorInput && canvas) {
    // Set the initial color
    var initialColor = BackgroundColorInput.value || '#f7f0f0';
    canvas.style.backgroundColor = initialColor;
    if (BackgroundOutput) BackgroundOutput.textContent = initialColor;

    // Listen for changes
    BackgroundColorInput.addEventListener('input', (e) => {
        var color = e.target.value;
        canvas.style.backgroundColor = color;
        if (BackgroundOutput) BackgroundOutput.textContent = color;
    });
}