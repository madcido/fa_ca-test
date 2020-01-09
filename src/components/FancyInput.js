import getLabel from '../helpers/labels';

export default function FancyInput(id, initialValue) {
    const input = document.createElement('input');
    input.id = id;
    input.value = initialValue;
    input.addEventListener('focus', () => {
        input.parentNode.classList.add('fancy-input--focused');
    });
    input.addEventListener('blur', () => {
        input.parentNode.classList.remove('fancy-input--focused');
        if (input.value) {
            input.parentNode.classList.add('fancy-input--filled');
        } else {
            input.parentNode.classList.remove('fancy-input--filled');
        }
    });

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = getLabel(id);

    const inputBox = document.createElement('div');
    inputBox.className = 'fancy-input';
    inputBox.classList.add(input.value ? 'fancy-input--filled' : null);
    inputBox.appendChild(input);
    inputBox.appendChild(label);

    return inputBox;
}
