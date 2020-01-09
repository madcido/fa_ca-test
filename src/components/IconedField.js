export default function IconedField(className, text, iconName = false) {
    const field = document.createElement('p');
    field.className = 'icon-field ' + className;
    field.innerHTML = `<span>${text}</span>`;
    if (iconName) {
        const icon = document.createElement('ion-icon');
        icon.setAttribute('name', iconName);
        field.prepend(icon);
    }

    return field;
}
