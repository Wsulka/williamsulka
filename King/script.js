/* 

user reads gametext describing the current challenge, and chooses one of three actions. 
When an action is chosen, first update the popup screen and then display it, showing the results of the chosen action. 
From here the player can click the onward! button, which updates the gametext and action buttons, then hides the popup. 

choose action, update popup, display popup, click onward, update gametext, update actions, hide popup



*/

let popupButton = document.getElementById('popbtn');
let gameText = document.getElementById('gametext');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let popup = document.getElementById('popup');
let poptext = document.getElementById('poptext');
let buttons = document.getElementById('buttons');
let picture = document.getElementById('picture');


//Counter to keep track of which scenario is active
let counter = 0;

//Ok this one takes the id passed in as argument and uses it to choose the correct popuptext based on what the player chose to do
function updatePopup(id) {

    console.log(id)
    poptext.innerHTML = popups[counter][id];

}

//Progress the game after the popup screen!
document.getElementById('maincontainer').addEventListener('click', function (e) {
    if (e.target.id == 'popbtn') {
        counter++;
        console.log("counter is at " + counter);

        gameText.innerHTML = events[counter].gametext;
        btn1.innerHTML = events[counter].btn1text;
        btn2.innerHTML = events[counter].btn2text;
        btn3.innerHTML = events[counter].btn3text;
        picture.src = `/images/${counter}.png`

        popup.style = "display: none;"

    }





});

//Player selects actions: listen for selection, update popupscreen according to selected action and then display it 
buttons.addEventListener('click', function (e) {
    if (e.target.classList.contains('actionBtn')) {
        updatePopup(e.target.id)
        console.log("nu borde det synas")
        popup.style = "display: flex;"
    }




})

