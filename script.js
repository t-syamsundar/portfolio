console.log("Welcome to T SYAM SUNDAR's Portfolio!");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

const backToTop = document.createElement('button');

backToTop.innerHTML = '↑';
backToTop.id = 'backToTop';

document.body.appendChild(backToTop);

backToTop.style.display = 'none';

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

console.log("Portfolio loaded successfully!");
