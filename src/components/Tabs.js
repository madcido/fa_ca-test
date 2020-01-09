import { changePage, pages } from './pages';
import { holdSlider, unholdSlider, dragSlider } from '../helpers/slider';

export default function Tabs() {
    const tabs = document.createElement('div');
    tabs.className = 'header__tabs row';
    tabs.addEventListener('mousedown', holdSlider);
    tabs.addEventListener('mouseleave', unholdSlider);
    tabs.addEventListener('mouseup', unholdSlider);
    tabs.addEventListener('mousemove', dragSlider);

    pages.forEach((page, index) => {
        const tab = document.createElement('div');
        tab.className = 'header__tab';
        tab.innerHTML = page.name;
        tab.addEventListener('click', () => changePage(index));

        tabs.appendChild(tab);
    });

    return tabs;
}
