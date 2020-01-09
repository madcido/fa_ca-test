import About from './About';
import Settings from './Settings';

const pages = [
    {
        name: 'About',
        content: About(),
    },
    {
        name: 'Settings',
        content: Settings(),
    },
    {
        name: 'Option1',
        content: option(1),
    },
    {
        name: 'Option2',
        content: option(2),
    },
    {
        name: 'Option3',
        content: option(3),
    },
];

function changePage(n) {
    document.querySelectorAll('.header__tab')
        .forEach(tab => tab.classList.remove('header__tab--selected'));
    document.querySelector(`.header__tab:nth-child(${n + 1})`)
        .classList.add('header__tab--selected');
    const display = document.querySelector('#display');
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    display.appendChild(pages[n].content);
}

export { pages, changePage };






/* This is just an example for simplicity,
every page content should be in its own file like About and Settings */
function option(n) {
    const option = document.createElement('div');
    option.innerHTML = `<h1>Option${n}</h1>`;

    return option;
}
