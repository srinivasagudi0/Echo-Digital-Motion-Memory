function cords() {
    document.addEventListener("mousemove", (event) => {
        console.log(event.clientX, event.clientY);
        let x = event.clientX;
        let y = event.clientY;
        const showCords = document.getElementById("cords");
        showCords.textContent = "X: "+x + ", Y: "+y;
    });
}
cords();