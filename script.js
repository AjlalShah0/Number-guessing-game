let randonnumb = parseInt(Math.random() * 100 +1);

const UserInput = document.querySelector('input');
const prev_num = document.querySelector('.prev-guess');
const remaining_num = document.querySelector('.num');
const from = document.querySelector('form');
const submit = document.querySelector('.btn');
const lowandhi = document.querySelector('.lowAndhi');
const startover = document.querySelector('.resultpara')

const p = document.createElement('p');

let numGuess = 1;
let prev = [];

let playgame = true;

if (playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(UserInput.value)
        validateguess(guess)
    });
}


function validateguess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please enter valid number');
    }  else{
        prev.push(guess)
        if (numGuess === 10){
            displayguess(guess)
            displaymessage(`Game over.The number was ${randonnumb} `)
            endgame()
        }else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(randonnumb === guess){
        displaymessage('You guessed it right.');
        endgame();
    }else if(randonnumb > guess){
        displaymessage('Number is higher.');
    }else if(randonnumb < guess){
        displaymessage('Number is lower.');
    }
}
function displayguess(guess){
    UserInput.value= "";
    prev_num.innerHTML += `${guess}, `;
    numGuess++;
    remaining_num.innerHTML = `${11 - numGuess}`
}
function displaymessage(message){
    lowandhi.innerHTML = `<h3>${message}</h3>`

}
function endgame(){
    UserInput.value = ""
    UserInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h4 id="newgame">RESTART</h4>`;
    p.style.backgroundColor= '#212121' ;
    p.style.width= '100px' ;
    p.style.padding= '1px' ;
    p.style.borderRadius= '5px' ;
    p.style.margin= 'auto' ;
    p.style.cursor= 'pointer' ;
    startover.appendChild(p)
    playgame = false;
    newgame();
}
function newgame(){
    const newGamebutton = document.querySelector('#newgame')
    newGamebutton.addEventListener('click', function(e){
        randonnumb = parseInt(Math.random() * 100 +1);
        prev = []
        numGuess = 0
        prev_num.innerHTML=''
        remaining_num.innerHTML = `${10 - numGuess}`;
        UserInput.removeAttribute('disabled')
        p.innerHTML = '' 
        p.style.width= '0px' ;
        displaymessage('')
        playgame = true;
    })
}