circle = document.getElementById('circle')

window.addEventListener('scroll',function(){
    let value = window.scrollY;


    circle.style.rotate = value/-4 + 'deg'
})