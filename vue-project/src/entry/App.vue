<template>
    <nav-vm></nav-vm>
    <router-view></router-view>
    <!-- <vm-header></vm-header>
    <vm-content></vm-content> -->
</template>

<script>

    const Nav = require('../components/Nav.vue');

    module.exports = {
        components: {
            "nav-vm": Nav
        }
    }
</script>
