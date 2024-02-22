function updateDate(){
    var date = new Date();
    var settime = document.getElementById("setTime");
    settime.innerHTML = date.getHours() + ":" + date.getMinutes() +":"+date.getSeconds() ;
    var setDate = document.getElementById("setdate");
    setDate.innerHTML = date.getDate() + "-" + parseInt( date.getMonth()+1)  +"-"+ date.getFullYear()
}
setInterval(updateDate,100);
onload = updateDate();
function getcolor(){
    var getColor = document.getElementById("setcolor").value;
    localStorage.setItem("color",getColor);
    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");


}
function setcolor(){
    document.getElementById("setcolor").value = localStorage.getItem("color");

    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");
    
}
setInterval(setcolor(),100)