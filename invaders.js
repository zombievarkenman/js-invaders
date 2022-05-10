let player = {
    X: 600,
    Y: 520
}

function setUp(){
    let canvas = document.getElementById("invaders-canvas");
    let ctx = canvas.getContext("2d");

    drawBackground();

    ctx.fillStyle = "white";
    ctx.font = " 40px comic-sans";
    ctx.fillText("SPACE INVADERS", 10,50);

    drawPlayer();
}

function drawBackground(){
    let canvas = document.getElementById("invaders-canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1200, 550);
}

function drawPlayer(){
    let canvas = document.getElementById("invaders-canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "turquoise";
    ctx.beginPath();
    ctx.moveTo(player.X, player.Y);
    ctx.lineTo(player.X-15, player.Y+30);
    ctx.lineTo(player.X+15, player.Y+30);
    ctx.fill();
}

window.addEventListener("load",setUp);

function movePlayer(event){
    switch(event.key){
        case "ArrowLeft":
            player.X -= 10;
            drawBackground();
            drawPlayer();
            break;
        case "ArrowRight":
            player.X += 10;
            drawBackground();
            drawPlayer();
            break;
        case "ArrowUp":
            player.Y -= 10;
            drawBackground();
            drawPlayer();
            break;
        case "ArrowDown":
            player.Y += 10;
            drawBackground();
            drawPlayer();
            break;
    }
    if(player.Y <= 425){
        player.Y = 425;
        drawBackground();
        drawPlayer();
    }
    if(player.Y >=520){
        player.Y = 520;
        drawBackground();
        drawPlayer();
    }
    if(player.X <= 15){
        player.X = 15;
        drawBackground();
        drawPlayer();
    }
    if(player.X >= 1185){
        player.X = 1185;
        drawBackground();
        drawPlayer();
    }
}
window.addEventListener("keydown",movePlayer);