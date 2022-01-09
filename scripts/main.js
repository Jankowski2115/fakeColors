let timeContainer = document.querySelectorAll(".timeChoice");
let time = document.querySelectorAll(".time");
let start = document.querySelectorAll(".start");
let table = document.querySelectorAll(".scoreTable");
let score = document.querySelectorAll(".score");
let answer = document.querySelectorAll(".answer");
let box = document.querySelectorAll(".box");
let pointsSC = document.querySelectorAll(".points");
let audio = document.querySelectorAll(".audio");

let timeValue = 15;
let colorTab = [["red","#ed4956"],["yellow","#fffc00"],["blue","#1d9bf0"],["green","#1ed760"]];
let timer;
let roundTimer;
let points = 0;
let helper = 0;

function shuffle(array) {
    let i = array.length,
    j = 0,
    temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function prepare(){
    answer[0].innerHTML = colorTab[Math.trunc(Math.random()*4)+0][0];
    answer[0].style.color = colorTab[Math.trunc(Math.random()*4)+0][1];
    ranNums = shuffle([0,1,2,3]);
    box[0].style.backgroundColor = colorTab[ranNums[0]][1];
    box[1].style.backgroundColor = colorTab[ranNums[1]][1];
    box[2].style.backgroundColor = colorTab[ranNums[2]][1];
    box[3].style.backgroundColor = colorTab[ranNums[3]][1];
    clearTimeout(timer);
    timer = setTimeout(function(){
        audio[1].play()
        points--;
        pointsSC[0].innerHTML = points;
        prepare()
    }, 3*1000);
}

start[0].addEventListener("click", _=>{
    prepare();
    timeContainer[0].style.visibility = "hidden";
    start[0].style.visibility = "hidden";
    table[0].style.visibility = "hidden";
    answer[0].style.visibility = "visible";
    for(let i=0;i<4;i++){
        box[i].style.visibility = "visible";
    }
    pointsSC[0].style.visibility = "visible";
    pointsSC[0].innerHTML = points;    
    clearTimeout(roundTimer);
    roundTimer = setTimeout(function(){
        clearTimeout(timer);
        answer[0].style.visibility = "hidden";
        for(let i=0;i<4;i++){
            box[i].style.visibility = "hidden";
        }
        pointsSC[0].style.visibility = "hidden";
        timeContainer[0].style.visibility = "visible";
        start[0].style.visibility = "visible";
        table[0].style.visibility = "visible";
        score[helper].innerHTML = `${helper+1}. ${points}pkt ${timeValue}s`;
        points = 0;
        pointsSC[0].innerHTML = points;
        helper++;
        if(helper == 5){
            helper = 0;
        }
    },(timeValue*1000));
})

time[0].addEventListener("click", _=>{
    timeValue = 15;
    time[0].style.border = "0.3vh solid #ffd700"
    for(let i=1;i<3;i++){
        time[i].style.border = "none"
    }
})

time[1].addEventListener("click", _=>{
    timeValue = 30;
    time[1].style.border = "0.3vh solid #ffd700"
    time[0].style.border = "none"
    time[2].style.border = "none"
})

time[2].addEventListener("click", _=>{
    timeValue = 60;
    time[2].style.border = "0.3vh solid #ffd700"
    for(let i=0;i<2;i++){
        time[i].style.border = "none"
    }
})
box[0].addEventListener("click", _=>{
    if(colorTab[ranNums[0]][0] ==  answer[0].innerHTML){
        audio[0].play()
        points++;
        pointsSC[0].innerHTML = points;
    } else {
        audio[1].play()
        points--;
        pointsSC[0].innerHTML = points;
    }
    prepare();
})

box[1].addEventListener("click", _=>{
    if(colorTab[ranNums[1]][0] ==  answer[0].innerHTML){
        audio[0].play()
        points++;
        pointsSC[0].innerHTML = points;
    } else {
        audio[1].play()
        points--;
        pointsSC[0].innerHTML = points;
    }
    prepare();
})

box[2].addEventListener("click", _=>{
    if(colorTab[ranNums[2]][0] ==  answer[0].innerHTML){
        audio[0].play()
        points++;
        pointsSC[0].innerHTML = points;
    } else {
        audio[1].play()
        points--;
        pointsSC[0].innerHTML = points;
    }
    prepare();
})

box[3].addEventListener("click", _=>{
    if(colorTab[ranNums[3]][0] ==  answer[0].innerHTML){
        audio[0].play()
        points++;
        pointsSC[0].innerHTML = points;   
    } else {
        audio[1].play()
        points--;
        pointsSC[0].innerHTML = points;
    }
    prepare();
})