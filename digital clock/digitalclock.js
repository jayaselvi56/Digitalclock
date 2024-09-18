function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if(h === 0){ //12 hour format
        h=12
    }else if (h>12) {
        h= h-12;   //12 hour format
        session = "PM"
    }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;
    document.getElementById('digital-clock').innerHTML = h + ":" + m + ":" + s + " " +session;

    setTimeout(showTime,1000)
}

showTime()
