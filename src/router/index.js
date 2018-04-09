import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content/Content'
// import {auth} from '@/services/auth'

import home from '@/components/home/home.router'
import training from '@/components/training/training.router'
import command from '@/components/command/command.router'
import timetable from '@/components/timetable/timetable.router'
import blog from '@/components/blog/blog.router'
import instagram from '@/components/instagram/instagram.router'
import contact from '@/components/contact/contact.router'

let appRoutes = [...home, ...training, ...command, ...timetable, ...blog, ...instagram, ...contact];

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
    next();
});

export default router
