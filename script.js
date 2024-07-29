let topProgress = document.querySelector('#topProgress');
    let leftProgress = document.querySelector('#leftProgress');
    let rightProgress = document.querySelector('#rightProgress');
    let bottomProgress = document.querySelector('#bottomProgress');
    let maindiv = document.querySelector('#maindiv');

    function start(){
        let min = parseInt(prompt("Enter the time in only minutes"));
        if(min<1){
            alert("Please enter more than one minute");
            start();
        }
        let time = min*60;
        let totalTime = time;

        let interval = setInterval(() => {
            let minutes = Math.floor(time/60);
            let seconds = time%60;
            maindiv.innerHTML = `${minutes} : ${seconds}`;

            let progress = ((totalTime-time) / totalTime)*100;
            if(progress<=25){
                let tpWidth = progress*4;
                topProgress.style.width = tpWidth + '%';
                topProgress.innerHTML = tpWidth.toFixed(2) + '%';
                topProgress.style.backgroundColor = 'green';
            }
            else if(progress<=50){
                let rpHeight = (progress-25)*4;
                rightProgress.style.height = rpHeight + '%';
                rightProgress.innerHTML = rpHeight.toFixed(2) + '%';
                rightProgress.style.backgroundColor = 'green';
            }
            else if(progress<=75){
                let bpWidth = (progress-50)*4;
                bottomProgress.style.width = bpWidth + '%';
                bottomProgress.innerHTML = bpWidth.toFixed(2) + '%';
                bottomProgress.style.backgroundColor = 'green';
            } 
            else if(progress<=100){
                let lpHeight = (progress-75)*4;
                leftProgress.style.height = lpHeight + '%';
                leftProgress.innerHTML = lpHeight.toFixed(2) + '%';
                leftProgress.style.backgroundColor = 'green';
            }    

            if(time<=0){
                clearInterval(interval);
            }
            time--;
        },1000);
    }

    start();