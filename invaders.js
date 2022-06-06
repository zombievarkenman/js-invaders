class Bullet {
    x;
    y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    update(){
        this.y -= 10;
    }

    draw(context){
        context.fillStyle = "red";
        context.beginPath();
        context.arc(this.x, this.y, 4, 0, Math.PI * 2);
        context.fill();
    }
}

class Enemy {
    x: ,
    y: ,
    health: ,

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    update();

    draw(context);
}

let player = {
    x: 400,
    y: 580,
    cooldown: 0,

    update: function() {
        if(keys.left && this.x > 10) {
            this.x -= 10;   
        }
    
        if(keys.right && this.x < 790) {
            this.x += 10;
            
        }
    
        if(keys.up && this.y > 0) {
            this.y -= 10;
        }
    
        if(keys.down && this.y < 580) {
            this.y += 10;
        }
        if(this.cooldown > 0){
            this.cooldown--;
        }
    },

    draw: function(context) {
        context.fillStyle = "pink";
        // context.fillRect(390, 580, 20, 20);
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x - 10, this.y + 20);
        context.lineTo(this.x + 10, this.y + 20);
        context.fill();
    },

    shoot: function(){
        this.cooldown = 17;
        return new Bullet(this.x, this.y);
    }

};

let bullets = [];

let enemy = [];

let keys ={
    up: false,
    down: false,
    left: false,
    right: false,
    space: false
}

function update() {
    player.update();
    if(keys.space && player.cooldown == 0){
        let bullet = player.shoot();
        bullets.push (bullet);
    }

    for(let index = 0; index < bullets.length; index++) {
        if(bullets[index.y] < 0) {
            bullets.splice(index, 1);
        } else {
            bullets[index].y -= 10;
        }
        
    }
    drawPlayer();
}

function setup() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 600);

    context.fillStyle = 'white';
    context.font = '48px Verdana';
    context.fillText("Space Invaders", 10, 50);
}

function drawPlayer() {
    let canvas = document.getElementById('invaders-canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, 800, 600);

    player.draw(context)

    for(let index = 0; index < bullets.length; index++) {
        bullets[index].draw(context);
    }
}

function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
            keys.left = true;
            break;
        case "ArrowRight":
            keys.right = true;
            break;
        case "ArrowUp":
            keys.up = true;
            break;
        case "ArrowDown":
            keys.down = true;
            break;
        case " ":
            keys.space = true;
            break;
    }

}

function keyUp(event) {
    switch(event.key) {
        case "ArrowLeft":
            keys.left = false;
            break;
        case "ArrowRight":
            keys.right = false;
            break;
        case "ArrowUp":
            keys.up = false;
            break;
        case "ArrowDown":
            keys.down = false;
            break;
        case " ":
            keys.space = false;
            break;
    }
}

window.addEventListener('load', setup);
window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', keyUp);

setInterval(update, 50);