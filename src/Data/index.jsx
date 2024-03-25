import { fetchApi } from './config/index';

const endPoints = {
    getUser: 'api/users',

    getUserCreate: 'api/users/create',
    getUserUpdate: 'api/users/update',
    
    getUserDelete: 'api/users/delete',

    // <======================>

    getInventaris: 'api/items',

    getInventarisCreate: 'api/items/create',
    getInventarisUpdate: 'api/items/update',
    getInventarisUpdateStatus: 'api/items/updatestatus',
    
    getCusomerDelete: 'api/items/delete',

    
    // <======================>
};

export const getUser = payload => fetchApi(endPoints.getUser, payload);
export const getUserCreate = payload => fetchApi(endPoints.getUserCreate, payload, 'post');
export const getUserUpdate = (payload, id) => fetchApi(`${endPoints.getUserUpdate}/${id}`, payload, 'post');
export const getCustomerUpdateStatus = (payload, id) => fetchApi(`${endPoints.getCustomerUpdateStatus}/${id}`, payload, 'post');
export const getUserDelete = id => fetchApi(`${endPoints.getUserDelete}/${id}`, {}, 'delete');


export const getInventaris = payload => fetchApi(endPoints.getInventaris, payload);
export const getInventarisCreate = payload => fetchApi(endPoints.getInventarisCreate, payload, 'post');
export const getInventarisUpdate = (payload, id) => fetchApi(`${endPoints.getInventarisUpdate}/${id}`, payload, 'post');
export const getInventarisDelete = id => fetchApi(`${endPoints.getInventarisDelete}/${id}`, {}, 'delete');


