const Vue = require('vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

const router = new VueRouter();

const Foo = require('./components/Header.vue');
const Bar = require('./components/Content.vue');

const App = Vue.extend({});
const Entry = require('./entry/App.vue');

router.map({
    '/': {
        component: Entry,
        subRoutes: {
            '/foo': {
                component:Foo
            }
        }
    }
});

router.start(App, '#app');
