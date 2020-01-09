import Button from './Button';
import Profile from './Profile';
import Tabs from './Tabs';

export default function Header() {
    const header = document.createElement('div');
    header.className = 'header col';
    header.appendChild(
        Button(
            'button--outlined header__logout-button',
            'Log out',
            () => alert('You clicked to log out.')
        )
    );
    header.appendChild(
        Button(
            'button--outlined header__coverpic-button',
            '<ion-icon name="camera"></ion-icon>Upload Cover Image',
            () => alert('You clicked to upload a cover image.')
        )
    );
    header.appendChild(Profile());
    header.appendChild(Tabs());

    return header;
}
