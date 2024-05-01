const hour = document.getElementById('hour');
const min = document.getElementById('mins');
const second = document.getElementById('sec');

const body = document.querySelector('body');
const box = document.querySelector('.box');
const hrMinSec = document.querySelectorAll('.hour, .mins, .sec');
const text = document.querySelectorAll('h3');
const col = document.querySelector('h2');


function formatTwoDigits(num) {
    return num.toString().padStart(2, '0');
}

setInterval(function() {
    let date = new Date();
    hour.innerText = formatTwoDigits(date.getHours());
    min.innerText = formatTwoDigits(date.getMinutes());
    second.innerText = formatTwoDigits(date.getSeconds());
}, 1000);


let darkTheme = true;
function changeTheme(){
    if (darkTheme){
        body.style.background = 'linear-gradient(to right, lightseagreen, pink)';
    
        box.style.height = '200px';
        box.style.width = '800px';
        box.style.boxShadow = 'none';
        box.style.border = 'none'
    
        hrMinSec.forEach(element => {
            element.style.width = '200px';
            element.style.height = '100%';
            element.style.color = 'black'
            element.style.fontSize = '45px';
            element.style.borderRight = '1px solid gray';
            element.style.backgroundColor = '#ccc';
            element.style.borderRadius = '20px';
            element.style.boxShadow = '2px 2px 10px black';
            element.style.position = 'relative';
        });
    
        col.style.fontSize = '90px';
    
        text.forEach(h3 => {
            h3.style.display = 'block';
        });
        darkTheme = false;
    } else {
        body.style.background = 'black';
    
        box.style.height = '100px';
        box.style.width = '420px';
        box.style.boxShadow = '2px 2px 40px red, inset 1px 1px 10px red';
        box.style.border = '3px solid red';
    
        hrMinSec.forEach(element => {
            element.style.width = 'auto';
            element.style.height = 'auto';
            element.style.color = 'white';
            element.style.fontSize = '35px';
            element.style.borderRight = 'none';
            element.style.backgroundColor = 'transparent';
            element.style.borderRadius = '0';
            element.style.boxShadow = 'none';
            element.style.position = 'relative';
        });
    
        col.style.fontSize = '70px';
    
        text.forEach(h3 => {
            h3.style.display = 'none';
        });
        darkTheme = true;
    }
}