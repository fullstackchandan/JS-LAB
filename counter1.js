//initiaize count
let count = 0;

//select html elements
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

//btns read for each-- btn addevent--- save classlist
// based on classlist type inc/dec count and change color

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        } else if( styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        } 
        if (count < 0) {
            value.style.color = "red";
        } 
        if(count === 0) {
            value.style.color = "#222"
        }

        value.textContent = count;
    });
});