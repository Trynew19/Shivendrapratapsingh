const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// slider 

let currentSlide = 0;

    function showSlide(index) {
        document.querySelector('.slides').style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
        showSlide(currentSlide);
    }
