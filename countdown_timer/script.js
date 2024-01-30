var dest = new Date("February 17, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = dest - now ;

    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = +days;
    document.getElementById("hours").innerHTML = +hours;
    document.getElementById("minutes").innerHTML = +minutes;
    document.getElementById("seconds").innerHTML = +seconds;
    if (diff < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.display="none";
        document.getElementById("expired").style.display="block";
    }
},1000);
