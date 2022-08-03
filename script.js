// tell VS Editor this is a Canvas project, 
// so will suggest Canvas built-in methods automatically

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// set height and width to match values set in CSS
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

// factory function to produce multiple NPC elements

enemy1 = { 
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}

// custom animation loop
function animate(){
    // clear old paint!
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // increase x and y coordinate with each loop
    enemy1.x++;
    enemy1.y++;
    // draw enemy using x,y and width, height values
    ctx.fillRect(enemy1.x, enemy.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}
animate();