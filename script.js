document.querySelector('.humburger').addEventListener('click', function () {
    document.querySelector('.menu').style.opacity = '1'
    document.querySelector('.menu').style.zIndex = '1'
})

document.querySelector('.menu__crossburger').addEventListener('click', function () {
    document.querySelector('.menu').style.opacity = '0'
    document.querySelector('.menu').style.zIndex = '-1'
})