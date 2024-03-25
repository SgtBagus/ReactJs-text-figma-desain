import Dashboard from './assets/dashboard.png';
import Job from './assets/job.png';
import Vehicle from './assets/vehicle.png';

export const MENU_LIST = [
    {
        id: 1,
        menuName: 'Dashboard',
        path: '/',
        imageIcon: Dashboard,
    },
    {
        id: 2,
        menuName: 'Job',
        path: '/job',
        imageIcon: Job,
    },
    {
        id: 3,
        menuName: 'Vehicle Lists',
        path: '/vehicle',
        imageIcon: Vehicle,
    },
];

export const MENU_LIST_FOOTER = [
    {
        id: 1,
        menuName: 'Settings',
        path: '/setting',
        imageIcon: Dashboard,
    },
    {
        id: 2,
        menuName: 'Logout',
        path: '/logout',
        imageIcon: Job,
    },
]