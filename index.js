const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecerement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('mouseover', () => {
    curValue++   ;  // curValue = curValue + 1 OR curValue += 1 both are right
    mainTitle.textContent = curValue;
});

btnDecerement.addEventListener('mouseenter', ()=>{
    curValue -= 1;
    mainTitle.textContent = curValue;
})

btnReset.addEventListener("click", ()=>{
    curValue = 0;
    mainTitle.textContent = curValue;
})
