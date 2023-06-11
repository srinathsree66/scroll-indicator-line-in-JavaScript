const div = document.querySelector('div');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement; // here we are getting properties from the documentElement

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    div.style.width = `${scrolled}%`;
});
