import FancyInput from './FancyInput';
import Button from './Button';
import { save } from '../helpers/save';
import { Backdrop, close } from '../helpers/backdrop';

export default function EditPopup(id) {
    const buttons = document.createElement('div');
    buttons.className = 'row';
    buttons.appendChild(
        Button(
            'button--outlined about__save-button',
            'Save',
            () => {
                const input = document.getElementById(id);
                const headerItem = document.querySelector(`.profile__info--${id} span`);
                if (headerItem) {
                    headerItem.innerHTML = input.value;
                }
                const aboutItem = document.querySelector(`.about__${id} span`);
                aboutItem.innerHTML = input.value;
                save(input.value);
                close(popup);
            }
        )
    );
    buttons.appendChild(
        Button(
            'button--outlined',
            'Cancel',
            () => close(popup)
        )
    );

    const popup = document.createElement('div');
    popup.className = 'about__edit-popup';
    popup.appendChild(FancyInput(id, document.querySelector(`.about__${id} span`).innerHTML));
    popup.appendChild(buttons);
    document.body.appendChild(Backdrop(popup));

    return popup;
}
