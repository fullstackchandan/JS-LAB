//declare color array
const colors = ['red', 'green','rgba(122,155,0)', '#f1f2f8']

// select html elements
const btn  = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    //change textcontent and doc.body.style
    const randomNo = getRandomNum();
    document.body.style.background = colors[randomNo]
    color.textContent = colors[randomNo]
})


//generate randomno 
function getRandomNum(){
    return  Math.floor(Math.random()*colors.length);
}
    