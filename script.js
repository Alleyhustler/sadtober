// Scroll-triggered animations
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const tokenomicsSection = document.querySelector('.tokenomics');
    const howToBuySection = document.querySelector('.how-to-buy');

    const scrollPosition = window.scrollY;

    // Slide in the about section
    if (scrollPosition > aboutSection.offsetTop - window.innerHeight / 1.5) {
        aboutSection.classList.add('visible');
    }

    // Slide in tokenomics section
    if (scrollPosition > tokenomicsSection.offsetTop - window.innerHeight / 1.5) {
        tokenomicsSection.classList.add('visible');
    }

    // Slide in how to buy section
    if (scrollPosition > howToBuySection.offsetTop - window.innerHeight / 1.5) {
        howToBuySection.classList.add('visible');
    }
});

// Additional animations or effects can be added here
