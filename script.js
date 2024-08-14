const zoomScreen = document.querySelector(".container");

let zoom = 1;
let zoomSpeed = 0.1;

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        zoomScreen.style.transform = `scale(${(zoom += zoomSpeed)})`;
    } else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomSpeed)})`;
    }
});
