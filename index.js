const COLORS = ["GREEN","YELLOW","BLUE","PURPLE","RED","ORANGE","LIGHTBLUE"];

var BLOXS = [];



var MINUTES = 0;
var SECONDS = 0;


var SCORE = 0;




setInterval(()=>{
    TIMEUPDATE();
},1000);


function TIMEUPDATE(){
    SECONDS++;
    if(SECONDS == 60){
        SECONDS = 0;
        MINUTES++;
    }
    var SEC = SECONDS;
    var MIN = MINUTES;
    if(SECONDS < 10){
        SEC = `0${SECONDS}`;
    }
    if(MINUTES < 10){
        MIN = `0${MINUTES}`;
    }
    document.getElementById("TIME").innerHTML = MIN +":"+SEC;
}



function FALL(){
    for(let i =0;i<BLOXS.length;i++){

        document.getElementById(BLOXS[i]).style.top =  document.getElementById(BLOXS[i]).getBoundingClientRect().top - 30 + "px";
    }
}









function MAKESHAPE(){
    
}







function GENERATECODE(){
  var CODE = Math.floor(Math.random()*400)+1;
  for(let i =0;i<BLOXS.length;i++){
    if(CODE == BLOXS[i]){
      GENERATECODE();
    }
  }
  return CODE;
}