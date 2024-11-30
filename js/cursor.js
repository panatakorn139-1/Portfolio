const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (event) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const cursorX = Math.min(event.clientX, viewportWidth - 20);
    const cursorY = Math.min(event.clientY, viewportHeight - 20);

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
});
