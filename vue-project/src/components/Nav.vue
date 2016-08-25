<template>
    <a @click="ccc">1232</a>
</template>
<script>
    const Vue = require('vue');
    const VueRouter = require('vue-router');
    Vue.use(VueRouter);
    const router = new VueRouter();
    
    module.exports = {
        methods: {
            ccc : function(){
                router.go({path: '/foo'});
            }
        }
    }
</script>
