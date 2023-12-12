
const colors = ['red', 'green', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//click event listener
btn.addEventListener('click', function(){
    //get random no btw 0-3
    const randomNo = getRandomNumber();
    document.body.style.background = colors[randomNo]; 
    color.textContent = colors[randomNo];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
