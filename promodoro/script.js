let container = document.querySelector("#container");
let session = document.querySelector("#session");
let sessionTime = document.querySelector('#sessionTime');
let Break = document.querySelector("#Break");
let breakTime = document.querySelector("#breakTime");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let currentTime = document.querySelector("#currentTime");
let actualTime = document.querySelector("#actualTime");

let correctSessionTime = sessionTime.innerHTML; 
let correctBreakTime = breakTime.innerHTML;
let count = 1;
let id;
let isSession = true;
let remainingTime;

function fsession(time){
    currentTime.innerHTML = `SESSION-TIME(${count})`;
    id = setInterval(() => {
        let minutes = Math.floor(time/60);
        let seconds = time%60;
        sessionTime.innerHTML = `${minutes} : ${seconds}`;
        if(time<=0){
            clearInterval(id);
            isSession = false;
            fbreak(parseInt(correctBreakTime) * 60);
        }
        time--;
        remainingTime = time;
    },1000);
}

function fbreak(time){
    currentTime.innerHTML = `BREAK-TIME(${count})`;
    id = setInterval(() => {
        let minutes = Math.floor(time/60);
        let seconds = time%60;
        breakTime.innerHTML = `${minutes} : ${seconds}`;
        if(time<=0){
            clearInterval(id);
            count++;
            isSession = true;
            fsession(parseInt(correctSessionTime) * 60);
        }
        time--;
        remainingTime = time;
    },1000);
}

function startTimer(){
    if(remainingTime>0){
        if(isSession){ fsession(remainingTime); }
        else{ fbreak(remainingTime); }
    }
    else{
        count = 1;
        isSession = true;
        fsession(parseInt(correctSessionTime) * 60);
    }
}

function stopTimer() {
    clearInterval(id);
    currentTime.innerHTML = "TIMER STOPPED";
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);


/* 
let arr=[];
if(localStorage.getItem("task")!=null){
arr = JSON.parse(localStorage.getItem("task"));
}

function add(){
let obj = {

}
arr.push(obj);
localStorage.setItem("task",JSON.stringify(arr));
}
add(); // event submit input


function delet(){ 
arr.pop();
localStorage.setItem("task",JSON.stringify(arr));
}
delet() // event


function update(){
arr[0].title = "abcd"; // in our case it is id 
localStorage.setItem("task",JSON.stringify(arr));
}


*/