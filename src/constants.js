const API = 'http://192.168.10.167:666/api/';

const homeConstants = {
    home: '',
};

const instagramConstants = {
    feed: 'instagram',
};

const authenticate = {
    login: 'auth/login',
    logout: 'auth/logout',
    getUser: 'auth/user',
    register: 'auth/register'
};

const ADMIN = 'admin/';
const CRUD = ADMIN + 'crud/';

const trainingConstants  = {
    create: CRUD + 'training', //POST
    get: CRUD + 'training' //GET
};

export {API, homeConstants, instagramConstants, authenticate, trainingConstants}
