const buttons = document.querySelectorAll('header button');

buttons.forEach(el => {
    const span = el.lastElementChild;
    const width = span.offsetWidth;
    span.style.width = 0;

    el.addEventListener('mouseenter', () => {
        span.style.width = `${width}px`;
    })

    el.addEventListener('mouseleave', () => {
        span.style.width = 0;
    });
});