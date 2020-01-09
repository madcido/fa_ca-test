/* This is just a mock data importing, kindly ignore it.
In real world, it should be some API fetching instead. */
import data from '../data';
import IconedField from './IconedField';

export default function Profile(userData = data) {
    function ratingStars(n) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= n) {
                stars += `<ion-icon name='star'></ion-icon>`;
            } else {
                stars += `<ion-icon name='star-outline'></ion-icon>`;
            }
        }
        return stars;
    }

    const profile = document.createElement('div');
    profile.className = 'profile row a-end';
    profile.innerHTML = `
        <div class='profile__avatar'>
            <img src=${userData.avatar} alt='user avatar' />
        </div>
        <div class='profile__info row j-between'>
            <div class='col a-start'>
                ${IconedField(
                    'profile__info--name',
                    userData.name
                ).outerHTML}
                ${IconedField(
                    'profile__info--place',
                    userData.place,
                    'pin'
                ).outerHTML}
                ${IconedField(
                    'profile__info--phone',
                    userData.phone,
                    'call'
                ).outerHTML}
            </div>
            <div class='row'>
                <p class='profile__info--rating'>
                    ${ratingStars(userData.rating)}
                </p>
                <p class='profile__info--reviews'>
                    <span>${userData.reviews}</span>Reviews
                </p>
            </div>
            ${IconedField(
                'profile__info--followers',
                '<span>' + userData.followers + '</span>Followers',
                'add-circle'
            ).outerHTML}
        </div>
    `;

    return profile;
}
