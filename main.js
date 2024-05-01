const hour = document.getElementById('hour');
const min = document.getElementById('mins');
const second = document.getElementById('sec');


setInterval(function(){
    let date = new Date();
    hour.innerText = date.getHours();
    min.innerText = date.getMinutes();
    second.innerText = date.getSeconds();
}, 1000);