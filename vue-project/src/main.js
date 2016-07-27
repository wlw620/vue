var Vue = require('vue');
var App = require('./entry/App.vue');

new Vue({
    el: 'body',
    components: {
        app: App
    }
});
