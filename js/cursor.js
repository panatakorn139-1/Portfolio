const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    if (x > 0.98*x) {
        x = e.clientX * 0.98;
    }

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})