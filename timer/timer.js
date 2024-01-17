let secconds = 0
let minutes = 0
let hours = 0

//display vars
let displaySecconds = 0
let displayminutes = 0
let displayhours = 0

//var to control setinterval
let interval = null

//var to control stopwath
let status = "stopped"



//watch function
function stopWatch(){
    secconds++

    if (secconds/60 === 1){
        secconds = 0
        minutes ++

        if (minutes/60 === 1){
            minutes = 0
            hours ++
        }
    }


    //add 0 if number had only one digit
    if(secconds < 10){
        displaySecconds = '0'+secconds.toString()
    }else{
        displaySecconds = secconds
    }

    if(minutes < 10){
        displayminutes = '0'+minutes.toString()
    }else{
        displayminutes = minutes
    }

    if(hours < 10){
        displayhours = '0'+hours.toString()
    }else{
        displayhours = hours
    }
    //display updated time
    document.getElementById('timeDisplay').innerHTML = `${displayhours}:${displayminutes}:${displaySecconds}`
}


function startStop(){

    //status default mode is stopeed
    if(status === "stopped"){
        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }

}

function reset(){

    secconds = 0
    minutes = 0
    hours = 0
    displaySecconds = 0
    displayminutes = 0
    displayhours = 0
    window.clearInterval(interval);
    document.getElementById("timeDisplay").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";

}