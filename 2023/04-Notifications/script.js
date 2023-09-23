const notifications = [
    {
        id: '1',
        profilePic: 'https://i.pravatar.cc/150?img=4',
        name: 'William Philips',
        activity: 'Uploaded 4 new pictures into album',
        post: 'Landscapes',
        date: { year: '2023', month: '8', day: '23' },
        time: { hour: '9', minute: '30' }
    },
    {
        id: '2',
        profilePic: 'https://i.pravatar.cc/150?img=12',
        name: 'Shane Wills',
        activity: 'Rated your page',
        post: 'ildesign',
        date: { year: '2023', month: '8', day: '23' },
        time: { hour: '9', minute: '30' }
    },
    {
        id: '3',
        profilePic: 'https://i.pravatar.cc/150?img=30',
        name: 'Nancy Williams',
        activity: 'Commented on your post',
        post: 'Breakfast',
        date: { year: '2023', month: '8', day: '23' },
        time: { hour: '1', minute: '0' }
    },
    {
        id: '4',
        profilePic: 'https://i.pravatar.cc/150?img=32',
        name: 'Katy Purr',
        activity: 'Liked your comment',
        post: '',
        date: { year: '2023', month: '8', day: '18' },
        time: { hour: '9', minute: '30' }
    },
    {
        id: '5',
        profilePic: 'https://i.pravatar.cc/150?img=16',
        name: 'Emma Davis',
        activity: 'Liked your post',
        post: 'Breakfast',
        date: { year: '2023', month: '8', day: '17' },
        time: { hour: '9', minute: '30' }
    },
    {
        id: '6',
        profilePic: 'https://i.pravatar.cc/150?img=10',
        name: 'Mia Miller',
        activity: 'Liked your comment',
        post: '',
        date: { year: '2023', month: '7', day: '20' },
        time: { hour: '9', minute: '30' }
    },
    {
        id: '7',
        profilePic: 'https://i.pravatar.cc/150?img=18',
        name: 'Liam Jones',
        activity: 'Replied to your comment',
        post: '',
        date: { year: '2023', month: '5', day: '23' },
        time: { hour: '9', minute: '30' }
    },
    {
        id: '8',
        profilePic: 'https://i.pravatar.cc/150?img=7',
        name: 'Aiden Smith',
        activity: 'Liked your comment',
        post: '',
        date: { year: '2022', month: '8', day: '23' },
        time: { hour: '9', minute: '30' }
    },
]

let viewAll = false;

renderNotifications(viewAll);


function renderNotifications(viewAll) {

    let notificationsHTML = '';

    if (viewAll === false) {
        for (let i = 0; i < 4; i++) {
            const notification = notifications[i];

            notificationsHTML += generateNotificationHTML(notification);
        }

    } else if (viewAll === true) {
        notifications.forEach(notification => {
            notificationsHTML += generateNotificationHTML(notification);
        });
    }

    document.querySelector('.js-notifications')
        .innerHTML = notificationsHTML;


    addNewElement();

    document.querySelectorAll('.profile-pic').forEach((element) => {
        element.addEventListener('mouseover', () => {
            const profileId = element.dataset.profileId;

            document.querySelectorAll('.profile-pop-up').forEach((popUp) => {
                const popUpId = popUp.dataset.profileId;
                if (popUpId === profileId) {
                    popUp.classList.add('profile-pop-up-hover');
                }
            });
        });
    });

    document.querySelectorAll('.profile-pic').forEach((element) => {
        element.addEventListener('mouseout', () => {
            document.querySelector('.profile-pop-up-hover').classList.remove('profile-pop-up-hover');
        });
    });
}

function generateNotificationHTML(notification) {
    const html = `
  <div class="notification">
      <img class="profile-pic" src="${notification.profilePic}" alt="" data-profile-id=${notification.id}>
      <div class="profile-pop-up" data-profile-id=${notification.id}>
          <img src="${notification.profilePic}" alt="">
          <h4>${notification.name}</h4>
      </div>
      <div class="notification-info">
          <h4>${notification.name}</h4>
          <p>${notification.activity} <span>${notification.post}</span></p>
          <p class="time-passed" data-notification-id=${notification.id}>
            ${timePassed(notification.date, notification.time)}
          </p>
      </div>
      <p class="new-element" data-notification-id=${notification.id}></p>
  </div>
`

    return html;
}

const viewAllBtn = document.querySelector('.view-all');

viewAllBtn.addEventListener('click', () => {

    if (viewAll === true) {
        viewAll = false;
        renderNotifications(viewAll);
        viewAllBtn.innerHTML = 'View All'
        document.querySelector('.notifications').classList.remove('notifications-view-all');
    } else {
        viewAll = true;
        renderNotifications(viewAll);
        viewAllBtn.innerHTML = 'View Less'
        document.querySelector('.notifications').classList.add('notifications-view-all');
    }
});


function timePassed(notificationDate, notificationTime) {
    const targetTimeZone = 'America/New_York';

    const options = {
        timeZone: targetTimeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    };

    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    // Extracting time components
    const dateObject = new Date(formattedTime); // Convert formattedTime to a Date object
    const currentYear = dateObject.getFullYear();
    const currentMonth = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    const currentDay = dateObject.getDate();
    const currentHour = dateObject.getHours();
    const currentMinute = dateObject.getMinutes();

    const notificationYear = Number(notificationDate.year);
    const notificationMonth = Number(notificationDate.month);
    const notificationDay = Number(notificationDate.day);
    const notificationHour = Number(notificationTime.hour);
    const notificationMinute = Number(notificationTime.minute);

    if (currentYear - notificationYear !== 0) {

        if (currentYear - notificationYear === 1) {
            return `${currentYear - notificationYear} year ago`;
        } else return `${currentYear - notificationYear} years ago`;

    } else if (currentMonth - notificationMonth !== 0) {
        if (currentMonth - notificationMonth === 1) {
            return `${currentMonth - notificationMonth} month ago`
        } else return `${currentMonth - notificationMonth} months ago`

    } else if (currentDay - notificationDay !== 0) {
        if (currentDay - notificationDay === 1) {
            return `${currentDay - notificationDay} day ago`
        } else {
            return `${currentDay - notificationDay} days ago`
        }

    } else if (currentHour - notificationHour > 16) {
        return `${currentHour - notificationHour} hours ago`
    } else {
        return 'Just now';
    }

}

function addNewElement() {

    document.querySelectorAll('.time-passed').forEach((element) => {

        const timePassedId = element.dataset.notificationId;
        if (element.innerText === 'Just now') {
            document.querySelectorAll('.new-element').forEach(newElement => {
                const newElementId = newElement.dataset.notificationId;
                if (timePassedId === newElementId) {
                    newElement.classList.add('new-notification');
                    newElement.innerHTML = 'New';
                }
            });
        }
    });

}

