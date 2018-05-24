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
//ADMIN
const ADMIN = 'admin/';
const CRUD = ADMIN + 'crud/';
//TRAINING
const TRAINING = 'training/';
const TRAINING_CRUD = CRUD + TRAINING;

const trainingConstants  = {
    create: TRAINING_CRUD, //POST
    get: TRAINING_CRUD, //GET
    saveOrderAndDisplay: TRAINING_CRUD + 'saveOrderAndDisplay', //PUT
    delete: TRAINING_CRUD //DELETE
};

const SITE = 'site/';
const siteConstants = {
    trainings:  SITE + 'trainings',
};

export {API, homeConstants, instagramConstants, authenticate, trainingConstants, siteConstants}
