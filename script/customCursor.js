let cursorSmall = document.querySelector('.cursor');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursorSmall.style.left = x + 'px';
    cursorSmall.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
    cursorSmall.classList.add('click')
});

document.addEventListener('mouseup', function(){
    cursorSmall.classList.remove('click')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorSmall.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursorSmall.classList.remove('hover');
    });
})