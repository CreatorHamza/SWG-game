let p = 0;

function Snakeimg() {
    let snakeimg = document.getElementById('dynamic');
    snakeimg.src = 'snake_pic.png';
    p = 1;

}

function Gunimg() {
    let gunimg = document.getElementById('dynamic');
    gunimg.src = 'gun_pic.webp';
    p = 2;

}

function Waterimg() {
    let waterimg = document.getElementById('dynamic');
    waterimg.src = 'water_pic-removebg-preview.png';
    p = 3;

}

function auto() {
    let random = Math.floor(Math.random() * 3); // Use Math.floor to get integer values

    if (random >= 0) {
        let cpuimg = document.getElementById('CPU');
        cpuimg.src = 'snake_pic.png';

        if (p === 1) {
            // alert("Tie");
            setTimeout(() => {
                window.location.href = "Tie.html";
            }, 800);

        } else if (p === 2) {
            // alert("You Win");
            setTimeout(() => {
                window.location.href = "Win.html";
            }, 800);

        } else if (p === 3) {
            // alert("You Lose"); 
            setTimeout(() => {
                window.location.href = "LOSE.html";
            }, 800);
        }


    } else if (random >= 1) {
        let cpuimg = document.getElementById('CPU');
        cpuimg.src = 'water_pic-removebg-preview.png';

        if (p === 1) {
            // alert("You Win");
            setTimeout(() => {
                window.location.href = "Win.html";
            }, 800);

        } else if (p === 2) {
            // alert("You Lose");
            setTimeout(() => {
                window.location.href = "LOSE.html";
            }, 800);

        } else if (p === 3) {
            // alert("Tie");
            setTimeout(() => {
                window.location.href = "Tie.html";
            }, 800);
        }
    }else if (random >= 2) {
        let cpuimg = document.getElementById('CPU');
        cpuimg.src = 'gun_pic.webp';

        if (p === 1) {
            // alert("You Lose");
            setTimeout(() => {
                window.location.href = "LOSE.html";
            }, 800);

        } else if (p === 2) {
            // alert("Tie");
            setTimeout(() => {
                window.location.href = "Tie.html";
            }, 800);

        } else if (p === 3) {
            // alert("You Win");
            setTimeout(() => {
                window.location.href = "Win.html";
            }, 800);

        }
    }
}








