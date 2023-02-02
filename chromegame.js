
var container = document.getElementById("container");
var block = document.getElementById("block");
// var dinoimage=document.getElementsById("dino");
// dinoimage.style.color="red";
var counter=0;
function jump() {

    if (container.classList != "animate") {
        container.classList.add("animate");
    }
    setTimeout(function () {
        container.classList.remove("animate");
    }, 500)
}
var deadend =setInterval(function() {
    let containertop =parseInt(window.getComputedStyle(container).getPropertyValue("top"));
    let blockleft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
 if (blockleft < 77 && blockleft > 0 && containertop >= 230) {
        block.style.animation = "none";
        // bird.style.animation="none";

        alert("Game Over. score: " + Math.floor(counter / 100));
        // result.innerHTML=`Game Over.Score:${ Math.floor(counter / 100)}`
        
        counter = 0;
    }
//     else if (birdleft<100&&birdleft>0&&containertop>=250){
// bird.style.animation="none";
// alert(`Game over.Score:${Math.floor(counter/100)}`);
// counter=0;


//     }
     else {
        block.style.animation = "block 1s infinite linear";
        // bird.style.animation="bird 2s infinite linear"
        counter++;

        document.getElementById("scorespan").innerHTML = Math.floor(counter/100);
    }
}, 10);
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32 || event.keyCode === 38) {
        jump();
    }
});


