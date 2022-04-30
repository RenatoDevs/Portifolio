window.addEventListener('load', () => {
    const load = document.querySelector('.load');
    const body = document.querySelector('body')

    setTimeout(() => {
        load.style.display = 'none';
        body.style.overflow = 'auto';
    }, 1000);
}); 