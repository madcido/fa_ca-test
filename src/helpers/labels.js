const labels = [
    {
        id: 'first-name',
        label: 'First Name',
    },
    {
        id: 'last-name',
        label: 'Last Name',
    },
    {
        id: 'name',
        label: 'Full Name',
    },
    {
        id: 'phone',
        label: 'Phone Number',
    },
    {
        id: 'place',
        label: 'City, State & ZIP',
    },
];

export default function getLabel(id) {
    const i = labels.findIndex(el => el.id === id);
    if (i === -1) {
        return id;
    } else {
        return labels[i].label;
    }
}
