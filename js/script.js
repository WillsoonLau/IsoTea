
document.addEventListener('DOMContentLoaded', function() {
    const headerNavButtons = document.querySelectorAll('header .nav-button');

    headerNavButtons.forEach(button => {
        button.addEventListener('click', () => {

            const sectionId = button.id.replace('navbutton-', '');

            const section = document.querySelector(`#${sectionId}`);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    let indexSlide = 0;

    function nextSlide() {
        showSlide(indexSlide += 1);
    }
    
    function previousSlide() {
        showSlide(indexSlide -= 1);
    }
    
    function showSlide(index) {
        let listImage = document.getElementsByClassName('footer-banner-image');
    
        if (index > listImage.length) indexSlide = 1;
        if (index < 1) indexSlide = listImage.length;
        for (let i = 0; i < listImage.length; i++) {
            listImage[i].style.display = 'none';
        }
        listImage[indexSlide - 1].style.display = 'block';
    }
    setInterval(nextSlide, 2000);
});