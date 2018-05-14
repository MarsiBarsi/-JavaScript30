const sliderImages = document.querySelectorAll('.slide-in');
const screen = window.outerHeight;

function scrollFetcher(scrollEvent) {
    sliderImages.forEach( image => {
        if (!image.classList.contains('active') && window.scrollY + screen > image.y && window.scrollY < image.y + screen) {
            image.classList.add('active');
        }
        if (image.classList.contains('active') && (window.scrollY + screen < image.y || window.scrollY > image.y + screen)){
            console.log(image.classList.contains('active'));
            image.classList.remove('active');
        }
    })
}
console.log(screen,sliderImages);
window.addEventListener('scroll', scrollFetcher);