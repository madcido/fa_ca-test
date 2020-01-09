import About from './About';
import Button from '../Button';
import FancyInput from '../FancyInput';
import Profile from '../Profile';
import data from '../../data';
import { save } from '../../helpers/save';

export default function AboutForm(userData) {
    const buttons = document.createElement('div');
    buttons.className = 'row';
    buttons.appendChild(
        Button(
            'about__form-button button--outlined',
            'Cancel',
            () => {
                form.parentNode.appendChild(About(userData));
                form.remove();
            }
        )
    );
    buttons.appendChild(
        Button(
            'about__form-button button--outlined',
            'Save',
            () => {
                const values = {
                    avatar: data.avatar,
                    rating: data.rating,
                    reviews: data.reviews,
                    followers: data.followers,
                    name: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
                    website: document.getElementById('website').value,
                    phone: document.getElementById('phone').value,
                    place: document.getElementById('place').value,
                };
                const profile = document.querySelector('.profile');
                profile.parentNode.insertBefore(Profile(values), profile);
                profile.remove();
                form.parentNode.insertBefore(About(values), form);
                form.remove();
                save(values);
            }
        )
    );

    const head = document.createElement('div');
    head.className = 'row j-between';
    head.innerHTML = `<h1>About</h1>`;
    head.appendChild(buttons);

    const form = document.createElement('div');
    form.className = 'about__form col';
    form.appendChild(head);
    form.appendChild(FancyInput('first-name', userData.name.split(' ')[0]));
    form.appendChild(FancyInput('last-name', userData.name.split(' ')[1]));
    form.appendChild(FancyInput('website', userData.website));
    form.appendChild(FancyInput('phone', userData.phone));
    form.appendChild(FancyInput('place', userData.place));

    return form;
}
