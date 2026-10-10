function cords() {
    let previous = Date.now();
    let previousX = 0;
    let previousY = 0;
    document.addEventListener("mousemove", (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let dx = x - previousX;
        let dy = y - previousY;
        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        previousX = x;
        previousY = y;
        let current = Date.now();
        const showCords = document.getElementById("cords");
        showCords.textContent = "X: "+x + ", Y: "+y;
        let difference = current-previous;
        let speed = difference > 0 ? (distance / (difference / 1000)).toFixed(2) : 0; // speed (px/s) = distance/time in secs
        spd=document.getElementById("speed")
        spd.textContent = speed+ " px/second";
        previous = current;
    });
}

function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(400,300);
    ctx.strokeStyle = "cyan";
    ctx.lineWidth = 3;
    ctx.stroke();
}
draw();
cords();