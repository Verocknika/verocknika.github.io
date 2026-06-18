const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const languageSwitches = document.querySelectorAll('.language-switch');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        const isEnglish = document.documentElement.lang.toLowerCase().startsWith('en');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute(
            'aria-label',
            isOpen
                ? (isEnglish ? 'Close navigation menu' : 'Zatvoriť navigačné menu')
                : (isEnglish ? 'Open navigation menu' : 'Otvoriť navigačné menu')
        );
    });
}

languageSwitches.forEach((switcher) => {
    const button = switcher.querySelector('.language-button');

    if (!button) {
        return;
    }

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = switcher.classList.toggle('open');
        button.setAttribute('aria-expanded', String(isOpen));
    });
});

document.addEventListener('click', () => {
    languageSwitches.forEach((switcher) => {
        switcher.classList.remove('open');
        switcher.querySelector('.language-button')?.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    languageSwitches.forEach((switcher) => {
        switcher.classList.remove('open');
        switcher.querySelector('.language-button')?.setAttribute('aria-expanded', 'false');
    });
});
