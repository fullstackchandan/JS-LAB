const hex = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D' ,'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//hex color - #f124596 - #+6 char

btn.addEventListener('click', function(){
    //generate hex color
    let hexColor = '#'

    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.background = hexColor;
    color.textContent = hexColor;

    function getRandomNumber(){
        return Math.floor(Math.random()*hex.length)
    }
})