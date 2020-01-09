function Backdrop(element) {
    const backdrop = document.createElement('span');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', () => close(element));

    backdrop.style.zIndex = '100';
    element.style.zIndex = '101';

    return backdrop;
}

function close(element) {
    element.remove();
    document.querySelector('.backdrop').remove();
}

export { Backdrop, close };
