// tell VS Editor this is a Canvas project, 
// so will suggest Canvas built-in methods automatically

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// set height and width to match values set in CSS
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

class Enemy {
    // mandatory constructor method for JS classes
    constructor(){
        this.x = 10;
        this.y = 50;
        this.width = 100;
        this.height = 100;
    }
    update(){
        // increase x and y coordinate with each loop
        this.x++;
        this.y++;
    }
    draw(){
        // draw enemy using properties of Enemy class
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// variable to create enemy using Enemy class
const enemy1 = new Enemy();

// custom animation loop
function animate(){
    // clear old paint!
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // call update() method of Enemy class
    enemy1.update();
    // call draw() method of Enemy class
    enemy1.draw();
    requestAnimationFrame(animate);
}
animate();