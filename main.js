function computerOption() {
    const options = ["rock", "paper", "scissors"];
    let ranInt = Math.floor(Math.random() * 3);
    return options[ranInt];
};
// function cleanInsults() {
//     const insults = document.querySelector('.fancy');
//     const button = document.querySelector('.restart');
//     button.addEventListener('click', function() {
//         if (!insults) return;
//         insults.remove();
//     })
//}

function playGame(){
    let a = 'default';
    const body = document.querySelector('.content');
    const btns = Array.from(document.querySelectorAll('.btn'));
    btns.forEach(btn=> btn.addEventListener('click', function(e) {
        a = e.target.innerText.toLowerCase();
        let b = computerOption();
        
        if (a === b) {
            if(confirm("It's a draw! Play again?")) {
                
            } else {
                const newEle = document.createElement('h2');
                newEle.classList.add('fancy');
                newEle.textContent = "You are a bitch!"
                body.appendChild(newEle);
            }
        } else if (a==='paper' && b==='rock') {
            if(confirm("YOU WON! Play again?")) {
                
            } else {
                const newEle = document.createElement('h2');
                newEle.classList.add('fancy');
                newEle.textContent = "You are a bitch!"
                body.appendChild(newEle);
            }
        } else if (a === 'scissors' && b === 'paper') {
            if(confirm("YOU WON! Play again?")) {

                
            } else {
                const newEle = document.createElement('h2');
                newEle.classList.add('fancy');
                newEle.textContent = "You are a bitch!"
                body.appendChild(newEle);
            }
        } else if (a === 'rock' && b === 'scissors') {
            if(confirm("YOU WON! Play again?")) {
                
            } else {
                const newEle = document.createElement('h2');
                newEle.classList.add('fancy');
                newEle.textContent = "You are a bitch!"  
                body.appendChild(newEle);
            }
        } else {
            if (confirm(`PC WON! ${b} beats ${a}! Play again?`)) {
                const vanish = document.querySelector('.fancy')
                if (!vanish) return;
                vanish.remove();
                
            } else {
                const newEle = document.createElement('h2');
                newEle.classList.add('fancy');
                newEle.textContent = "You are a bitch!"
                body.appendChild(newEle);
            }
        }
    }));
    
}