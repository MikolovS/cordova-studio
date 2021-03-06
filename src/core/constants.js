const API = 'http://192.168.10.167:666/api/';

const homeConstants = {
    home: '',
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

const trainingConstants = {
    create: TRAINING_CRUD, //POST
    get: TRAINING_CRUD, //GET
    saveOrderAndDisplay: TRAINING_CRUD + 'saveOrderAndDisplay', //PUT
    delete: TRAINING_CRUD //DELETE
};

//TRAINERS
const TRAINER = 'trainer/';
const TRAINER_CRUD = CRUD + TRAINER;

const trainerConstants = {
    getUsers: TRAINER_CRUD + 'users', //GET
    update: TRAINER_CRUD, //GET + userName
    create: TRAINER_CRUD, //POST
    get: TRAINER_CRUD, //GET
    saveOrderAndDisplay: TRAINER_CRUD + 'saveOrderAndDisplay', //PUT
    delete: TRAINER_CRUD //DELETE
};

//USER GROUP TYPES
const USER_GROUP_TYPE = 'user-group-type/';
const USER_GROUP_TYPE_CRUD = CRUD + USER_GROUP_TYPE;
const userGroupTypeConstants = {
    getUsers: USER_GROUP_TYPE_CRUD, //GET
    sync: USER_GROUP_TYPE_CRUD, //post + userName
};

//SITE
const SITE = 'site/';
const siteConstants = {
    trainings: SITE + 'trainings',
    trainers: SITE + 'trainers',
    instagram: SITE + 'instagram/',
};

export {API, homeConstants, authenticate, trainingConstants, siteConstants, trainerConstants, userGroupTypeConstants}
