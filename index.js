MOVEFOOD();
document.getElementById("SNAKE0").style.left = "160px";
document.getElementById("SNAKE0").style.top = "160px";
var Direction = "";
var GAMESPEED = 150;
var TOP = Math.floor(document.getElementById("BOARD").getBoundingClientRect().top);
var LEFT = Math.floor(document.getElementById("BOARD").getBoundingClientRect().left);
var Direction = "";
var TIME = [0,0];
setInterval(() => {


var LOSTGAME = false;
if(document.getElementById("BC").checked == true && CHECKFORBODY() == true){
        LOSTGAME = true;
}
if(document.getElementById("WC").checked == true && CHECKFORWALL() == true){
        LOSTGAME = true;
}
 if(LOSTGAME == true){
        document.getElementById("LOSSANDWIN").className = "SEEME";
        Direction = "";
 }else{
        CHECKFOREAT();
        MOVEBODY();
        MOVESNAKEHEAD();
 }
    document.getElementById("SCORE").innerHTML = "Score: "+(document.querySelectorAll(".SNAKE").length - 1);
}, GAMESPEED);




function CHECKFORWALL() {
var HEAD = document.getElementById("SNAKE0");
if(Math.round(document.getElementById("SNAKE0").getBoundingClientRect().left - LEFT) == 320 || Math.round(document.getElementById("SNAKE0").getBoundingClientRect().left - LEFT) == -20){
 return true 
}else if(Math.round(document.getElementById("SNAKE0").getBoundingClientRect().top - TOP) == 320 || Math.round(document.getElementById("SNAKE0").getBoundingClientRect().top - TOP) == -20){
return true    
}
else{
return false
}
}
setInterval(() =>{
        if(Direction !=""){
        if(TIME[1] == 60){
                TIME[0]++;  
                TIME[1] = 0;
        }
var R1 = 0;
var R2 = 0;
        if(TIME[1] < 10){
                R2 = "0"+TIME[1]; 
        }else{
                R2 = TIME[1];  
        }
        if(TIME[0] < 10){
                R1 = "0"+TIME[0]; 
        }else{
                R1 = TIME[1];  
        }
document.getElementById("TIME").innerHTML = R1+":"+R2
TIME[1]++;
        }
},1000);
document.getElementById("SETTINGSBUTTON").addEventListener("click",()=>{
        var S = document.getElementById("SETTINGS");
if(S.classList.contains("HIDE")){
        S.classList.remove("HIDE");
        S.classList.add("SHOW");
}else if(S.classList.contains("SHOW")){
        S.classList.add("HIDE");
        S.classList.remove("SHOW");
}
});
function CHECKFOREAT(){
        var HEAD = document.getElementById("SNAKE0");
        var FOOD = document.getElementById("FOOD");
        console.log(HEAD.getBoundingClientRect().top)
     if(Math.floor(HEAD.getBoundingClientRect().top - TOP) == Math.floor(FOOD.getBoundingClientRect().top - TOP) && Math.floor(HEAD.getBoundingClientRect().left - LEFT) == Math.floor(FOOD.getBoundingClientRect().left - LEFT)){
        MOVEFOOD();
        ADDTOBODY();
     }
}
function MOVESNAKEHEAD(){
        var HEAD = document.getElementById("SNAKE0");
        var TOPHEAD = Math.floor(HEAD.getBoundingClientRect().top - TOP);
        var LEFTHEAD = Math.floor(HEAD.getBoundingClientRect().left - LEFT);
        if(Direction == "up"){
                HEAD.style.top = (TOPHEAD - 20) + "px"
        }else if(Direction == "down"){
                HEAD.style.top = (TOPHEAD+ 20) + "px"
        }
        else if(Direction == "right"){
                HEAD.style.left = (LEFTHEAD  + 20) + "px"
        }
        else if(Direction == "left"){
                HEAD.style.left = (LEFTHEAD - 20) + "px"
        }
        if(document.getElementById("WC").checked == false && LEFTHEAD == -20){
                HEAD.style.left = "300px"
        }else if(document.getElementById("WC").checked == false && LEFTHEAD == 320){
                HEAD.style.left = "0px"
        }
        else if(document.getElementById("WC").checked == false && TOPHEAD == -20){
                HEAD.style.top = "300px"
        }
        else if(document.getElementById("WC").checked == false && TOPHEAD == 320){
                HEAD.style.top = "0px"
        }

}
function MOVEFOOD(){
        document.getElementById("FOOD").style.left = Math.floor(Math.random()*15)*20+"px";
        document.getElementById("FOOD").style.top = Math.floor(Math.random()*15)*20+"px";
}
window.addEventListener("resize", ()=>{
        LEFT = document.getElementById("BOARD").getBoundingClientRect().left;
        Top = document.getElementById("BOARD").getBoundingClientRect().top;  
        RESETGAME();
    });
document.onkeydown = (e) => {
        if ((e.key === 'ArrowUp' || e.key == "w" || e.key == "W") && Direction != "down") {
                Direction = "up";
        } else if ((e.key === 'ArrowDown' || e.key == "s" || e.key == "S") && Direction != "up") {
                Direction = "down";
        } else if ((e.key === 'ArrowLeft' || e.key == "a" || e.key == "A") && Direction != "right") {
                Direction = "left";
        } else if ((e.key === 'ArrowRight' || e.key == "d" || e.key == "D") && Direction != "left") {
                Direction = "right";
        }
}
function ADDTOBODY(){
        var EL = document.createElement("div");
        EL.setAttribute("id","SNAKE"+document.querySelectorAll(".SNAKE").length);
        EL.className = 'SNAKE'
        document.getElementById("BOARD").appendChild(EL);
        EL.style.top=TOP*-2+"px";
        EL.style.left=LEFT*-2+"px";
}
function MOVEBODY(){
     var BODYLENGTH = document.querySelectorAll(".SNAKE").length;
     for(var i = BODYLENGTH-1;i > 0;i--){
        var SNAKE = document.getElementById("SNAKE"+(i));
        var SNAKE2 = document.getElementById("SNAKE"+(i-1));        
        SNAKE.style.left = Math.floor(SNAKE2.getBoundingClientRect().left - LEFT)+"px";
        SNAKE.style.top = Math.floor(SNAKE2.getBoundingClientRect().top - TOP) +"px";  
     }
}
var ROOT = document.querySelector(':root');
document.getElementById("BODYCOLOR").addEventListener("input",()=>{ROOT.style.setProperty('--SNAKE', document.getElementById("BODYCOLOR").value);});      
document.getElementById("FOODCOLOR").addEventListener("input",()=>{ROOT.style.setProperty('--FOOD', document.getElementById("FOODCOLOR").value);});
document.getElementById("BC").addEventListener("click",()=>{RESETGAME();})
document.getElementById("WC").addEventListener("click",()=>{RESETGAME();})
function CHECKFORBODY(){
        var BODYLENGTH = document.querySelectorAll(".SNAKE").length;
        var HEAD = document.getElementById("SNAKE0");

for(let i = 1; i < BODYLENGTH;i++){
        var HEAD2 = document.getElementById("SNAKE"+i);
        if(Math.floor(HEAD2.getBoundingClientRect().top - TOP) == Math.floor(HEAD.getBoundingClientRect().top - TOP) && Math.floor(HEAD.getBoundingClientRect().left - LEFT) == Math.floor(HEAD2.getBoundingClientRect().left - LEFT)){
        return true
        }
}
return false
}
document.getElementById("RESTART").addEventListener("click",()=>{
        RESETGAME();
})
function RESETGAME(){
        MOVEFOOD();
        document.getElementById("LOSSANDWIN").className = "DONTSEE";
        var HEAD = document.getElementById("SNAKE0");
        HEAD.style.left = "160px";
        HEAD.style.top = "160px";
        var BODYLENGTH = document.querySelectorAll(".SNAKE").length;
        TIME[0] = 0;
        TIME[1] = 0;
        document.getElementById("TIME").innerHTML = "00:00"
        for(let i = 1; i < BODYLENGTH ;i++){
                document.getElementById("SNAKE"+i).remove();
        }
}