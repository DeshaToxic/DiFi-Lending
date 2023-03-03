// change nav bar when scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('scroll-down', window.scrollY > 0)
})


