// tell VS Editor this is a Canvas project, 
// so will suggest Canvas built-in methods automatically

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const numberOfEnemies = 50;
const enemiesArray = [];

let gameFrame = 0;

// set height and width to match values set in CSS
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

class Enemy {
    // mandatory constructor method for JS classes
    constructor(){
        // new image for each NPC
        this.image = new Image();
        this.image.src = 'media/enemy2.png'    
        
        // random number between -2 and 2; range 0-4, -2
        this.speed = Math.random() * 4 + 1;
        // width and height of sprite images
        this.spriteWidth = 266;
        this.spriteHeight = 188;

        // set width and height of enemy relative to width and height of NPC image
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        // frame on sprite sheet image
        this.frame = 0;
        // randomise animation frequency/timing so NPCs flap at different times
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        // determines position NPC appears on sine wave
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 5;
    }
    update(){
        // increase x by speed with each loop to add flying movement
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        // randomise wave shape for each NPC
        this.angle += this.angleSpeed;

        // reset x position when NPC exit canvas, to enable endless R to L movement
        if (this.x + this.width < 0) this.x = canvas.width;
        // cycle through sprite sheet images every two loops of main animation loop
        if (gameFrame % this.flapSpeed === 0){
            // slows down flying animation
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        // draw image based on sprite image size, position and speed
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 
        this.x, this.y, this.width, this.height);
    }
}

// variable to create enemy using Enemy class


// loop to generate multiple NPCs
for (let i = 0; i < numberOfEnemies; i++){
    /* loops through number of enemies, 
    uses Enemy class to create NPC, 
    pushes new NPC to enemies Array */
    enemiesArray.push(new Enemy());
}

// custom animation loop
function animate(){
    // clear old paint!
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    /* loop through enemies array with built-in forEach method, 
    use ES6 => function, call update() and draw() methods 
    of Enemy class*/
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();