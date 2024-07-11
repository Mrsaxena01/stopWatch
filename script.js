let text = document.querySelector("#text");
let stopBtn = document.querySelector("#stop");
let clearBtn = document.querySelector("#clear");
let startBtn = document.querySelector("#start");

let time = [0, 0, 0];
let int = null;

startBtn.addEventListener("click", ()=>{

    int = setInterval(displayTimer, 1000);
    
});

function displayTimer(){
    time[2]++;
    if(time[2] == 60){
        time[2] = 0;
        time[1]++;
        if(time[1] == 60){
            time[1] = 0;
            time[0]++;
        }
    }

    let h = time[0]< 10 ?"0" + time[0] : time[0];
    let m = time[1]< 10 ?"0" + time[1] : time[1];
    let s = time[2]< 10 ?"0" + time[2] : time[2];

    text.innerHTML = `${h} : ${m} : ${s}`
};

stopBtn.addEventListener("click", ()=>{
    clearInterval(int);
});

clearBtn.addEventListener("click", ()=>{
    clearInterval(int);
    time = [0, 0, 0];

    text.innerHTML = `00 : 00 : 00`;
})


let btns = document.querySelectorAll("button");

btns.forEach((e)=>{
    e.addEventListener("click", ()=>{
        e.classList.add("disable");
    })
})


