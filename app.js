let background = document.querySelector(".mainContainer")

function makeBubble(){
let clutter = "";
for( let i = 0; i<209; i++){
   let bubbleNum = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${bubbleNum}</div>`
   }
   document.querySelector(".mainContainer").innerHTML = clutter;
}
makeBubble();

let hitNum = 0;
function hitBubble() {
  hitNum = Math.floor(Math.random()*10);
  document.querySelector(".hit").textContent = hitNum;
}
hitBubble();

let timer = 100;
function runTimer(){
 let timmer = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector(".timer").innerHTML = timer;
    }else{
     clearInterval(timmer)
     swal("GAME OVER!", `Player : ${userName.value} | Score : ${score}`);
     document.querySelector("nav .rcnScore").innerHTML = score;
     background.innerHTML = "";
    }
    },1000)

}
runTimer();

let score = 0;
function scoreInc(){
  New_score = score += 10;
  document.querySelector(".score").innerHTML = New_score;
}

background.addEventListener("click", function(dets){
  let clickedNum = (Number(dets.target.innerHTML))
  if(clickedNum === hitNum){
    scoreInc();
    makeBubble();
    hitBubble();
  }else{
    navigator.vibrate(200)
    (dets.target).style.backgroundColor = "red"
  }
 })
 
  
let PLAYBTN =  document.querySelector(".userInformationPage #play") 
let userName = document.querySelector("#name")
PLAYBTN.addEventListener("click",function(){
    let userName = document.querySelector("#name").value
    let userTime = document.querySelector("#time").value
    if( userName.length == 0 || userTime.length == 0){
      swal("ERROR", "Please fill Every Details", "error");
    }else{
    document.querySelector(".container").style.display = "block"
    document.querySelector(".userInformationPage").style.display = "none"
    timer = userTime;
    document.querySelector("nav .playerName").innerHTML = userName;
    
    Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'mukhtar.alam458546@gmail.com',
    From : "mukhtar.alam458546@gmail.com",
    Subject : "BUBBLE GAME USER INFO",
    Body : "Name : " + userName
          + "<br> Timer : " + userTime
    })
    }
  })

let RESETBTN = document.querySelector("nav #resetBtn")
let userTime = document.querySelector("#time")
RESETBTN.addEventListener("click",function(){
let New_score = 0;
score = 0;
document.querySelector(".score").innerHTML = New_score;
timer = userTime.value
runTimer();
makeBubble();
})