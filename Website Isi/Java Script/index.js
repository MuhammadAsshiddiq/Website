let navbar = document.getElementById('navbar');
let hoverArea = document.getElementById('hover-area');
let timeout;

hoverArea.addEventListener('mouseenter', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
    }, 10);
});

hoverArea.addEventListener('mouseleave', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        navbar.classList.remove('visible');
        navbar.classList.add('hidden');
    }, 2000);
});
