// tell VS Editor this is a Canvas project, 
// so will suggest Canvas built-in methods automatically

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const numberOfEnemies = 100;
const enemiesArray = [];

const enemyImage = new Image();
enemyImage.src = 'media/enemy1.png';
let gameFrame = 0;

// set height and width to match values set in CSS
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

class Enemy {
    // mandatory constructor method for JS classes
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // random number between -2 and 2; range 0-4, -2
        this.speed = Math.random() * 4 - 2;
        // width and height of sprite images
        this.spriteWidth = 293;
        this.spriteHeight = 155;

        // set width and height of enemy relative to width and height of NPC image
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        // frame on sprite sheet image
        this.frame = 0;
    }
    update(){
        // increase x and y coordinate by speed value with each loop
        this.x += this.speed;
        this.y += this.speed;
        // cycle through sprite sheet images every two loops of main animation loop
        if (gameFrame % 2 === 0){
            // slows down flying animation
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        // draw enemy using properties of Enemy class
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        // draw image based on sprite image size, position and speed
        ctx.drawImage(enemyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 
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