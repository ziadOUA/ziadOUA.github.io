let cursor = document.querySelector('.cursor');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('click')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})