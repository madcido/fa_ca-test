import IconedField from './IconedField';
import Button from './Button';
import EditPopup from './EditPopup';

export default function EditableField(id, className, data, icon) {
    const field = document.createElement('div');
    field.className = 'row';
    field.appendChild(
        IconedField(className, data, icon)
    );
    field.appendChild(
        Button(
            'button--filled',
            '<ion-icon name="create"></ion-icon>',
            () => field.appendChild(EditPopup(id))
        )
    );

    return field;
}
