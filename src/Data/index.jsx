import { fetchApi } from './config/index';

const endPoints = {
    getVehicle: 'public/vehicle',
};

export const getVehicle = payload => fetchApi(endPoints.getVehicle, payload);
