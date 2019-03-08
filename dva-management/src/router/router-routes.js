import app from '../app';
import dynamic from 'dva/dynamic';

export default [{
    path: '/login',
    component: dynamic({
        app,
        model: [() => import('../models/login')],
        component: () => import('../containers/login')
    })
},{
    path: '/index',
    component: dynamic({
        app,
        component: () => import('../containers/index')
    }),
    children:[
        {
            path: '/index/home',
            component: dynamic({
                app,
                model: [() => import('../models/home')],
                component: () => import('../containers/home')
            })
        }
    ]
}]