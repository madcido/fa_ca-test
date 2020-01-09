/* This is just a mock data importing, kindly ignore it.
In real world, it should be some API fetching instead. */
import data from '../../data';
import Button from '../Button';
import EditableField from '../EditableField';
import AboutForm from './AboutForm';

export default function About(userData = data) {
    const head = document.createElement('div');
    head.className = 'row j-between';
    head.innerHTML = `<h1>About</h1>`;
    head.appendChild(
        Button(
            'button--filled',
            '<ion-icon name="create"></ion-icon>',
            () => {
                content.parentNode.insertBefore(AboutForm(userData), content);
                content.remove();
            }
        )
    );

    const content = document.createElement('div');
    content.className = 'about col a-start';
    content.appendChild(head);
    content.appendChild(EditableField('name', 'about__name', userData.name));
    content.appendChild(EditableField('website', 'about__website', userData.website, 'globe'));
    content.appendChild(EditableField('phone', 'about__phone', userData.phone, 'call'));
    content.appendChild(EditableField('place', 'about__place', userData.place, 'home'));

    return content;
}
