import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content/Content'
import auth from '@/services/auth';
// import {auth} from '@/services/auth'

import home from '@/components/home/home.router'
import training from '@/components/training/training.router'
import command from '@/components/command/command.router'
import timetable from '@/components/timetable/timetable.router'
import blog from '@/components/blog/blog.router'
import instagram from '@/components/instagram/instagram.router'
import contact from '@/components/contact/contact.router'
import login from '@/components/login/login.router'
import admin from '@/components/admin/admin.router'

// CRUD
import crudTraining from '@/components/admin/training/crudTraining.router'
import crudTrainer from '@/components/admin/trainer/crudTrainer.router'
import crudGroup from '@/components/admin/group/crudGroup.router'

let appRoutes = [...home, ...training, ...command, ...timetable, ...blog, ...instagram, ...contact, ...login, ...crudTraining, ...admin, ...crudTrainer, ...crudGroup];

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            component: Content,
            children: appRoutes,
        },
    ]
});

router.beforeEach((to, from, next) => {

    document.title = to.meta.title;
    let user = JSON.parse(localStorage.getItem('user'));

    //Если пользователь авторизирован - не пускаем на страницу
    if (to.path === '/login' && user !== null) {
        Vue.prototype.$notify({
            title: 'Вы уже авторизированы!',
            type: 'error'
        });
        next(false);
        return;
    }

    // если путь ведёт в админку - чекаем наличие роли
    if (to.path.match(/admin[\/\w]+/i) !== null) {

        if (user === null){
            Vue.prototype.$notify({
                title: 'Не авторизированый пользователь',
                type: 'error'
            });
            next(false);
        } else {
            if (! auth.isAdmin()) {
                Vue.prototype.$notify({
                    title: 'Нет прав доступа',
                    type: 'error'
                });
                next(false);
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router
