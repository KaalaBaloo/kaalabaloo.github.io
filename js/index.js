
// Use requestAnimationFrame or fallback to setTimeout
var scroll = window.requestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000/60);
    };

// Select elements to show on scroll
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

// Start the loop
loop();

// Helper function to check if the element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}