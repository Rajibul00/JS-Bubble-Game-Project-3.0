document.getElementById('Restart').addEventListener('click',function(){
    window.location.reload()
})
function bubblemaking(){
    let bubbles = "";
    for(i=1;i<=100;i++){
        let no1 = Math.floor(Math.random()*10);
        bubbles+= `<div class="bubble">${no1}</div>`
        document.querySelector('.container').innerHTML = bubbles
    }
}
bubblemaking()
let no2 = Math.floor(Math.random()*10);
function bubbleno2(){
   
    document.getElementById('bubbleno').innerText=no2
}
bubbleno2()
/*timesleft chapte */
function time(){
    let initialtime = 5;
    setInterval(() => {
   if(initialtime>0){
    initialtime--;
   
    document.getElementById('timesleft').innerText = initialtime
   }else{
    document.getElementById('timesleft').innerText ='Time Up';
    document.getElementById('timesleft').style.color ='red';
    document.querySelector('.container').innerText = "";
     document.querySelector('.container').innerText = `Your Score : ${score}`
   }
    
    }, 1000);
   
}
time()
/*score chapter*/
;
let score = 0;
function scorefnc(){
   
score+=10
 
document.getElementById('score').innerText =score;
}

/*Final Chapter*/
document.querySelector('.container').addEventListener('click',function(dets){


if(dets.target.innerText==document.getElementById('bubbleno').innerText){
bubblemaking()
scorefnc()

document.getElementById('bubbleno').innerText= Math.floor(Math.random()*10)
}

})
