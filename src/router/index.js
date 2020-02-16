import Vue from 'vue';
import VueRouter  from 'vue-router';
const Home = () => import('@/components/singlePage/Home');
const Page = () => import('@/components/multiPage/Page');
const Test = () => import('@/components/test/index');
Vue.use(VueRouter);
const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            name:"home",
            component:Home
        },
        {
            path:'/page',
            name:"page",
            component:Page
        },
        {
            path:'/test',
            name:"test",
            component:Test
        }
    ]
});
export default router;