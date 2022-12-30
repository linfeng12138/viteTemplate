import * as vueRouter from 'vue-router'
const routers = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home.vue')
    },{
        path: '/test',
        name: 'Test',
        component: () => import('../views/test/index.vue'),
        // children: [
        //     {
        //         path: '/test/testOne',
        //         name: 'TestOne',
        //         component: () => import('../views/test/test_one.vue')
        //     }
        // ]
    },{
        path: '/test/testOne',
        name: 'TestOne',
        component: () => import('../views/test/test_one.vue')
    },{
        path: '/obj/todoList',
        name: 'ToDoList',
        component: () => import('../views/obj/todoList.vue')
    },{
        path: '/obj',
        name: 'Obj',
        component: () => import('../views/obj/index.vue')
    },{
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue')
    },{
        path: '/test/testTwo',
        name: 'TestTwo',
        component: () => import('../views/test/test_two.vue')
    },{
        path: '/test/testMixins',
        name: 'TestMixins',
        component: () => import('../views/test/test_mixins.vue')
    },{
        path: '/test/testComposition',
        name: 'TestComposition',
        component: () => import('../views/test/test_composition.vue')
    },{
        path: '/test/testNew',
        name: 'TestNew',
        component: () => import('../views/test/test_four.vue')
    }
]

const router = vueRouter.createRouter({
    history: vueRouter.createWebHashHistory(),
    routes: routers
})

export default router
