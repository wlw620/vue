<template>
    <vm-header></vm-header>
    <vm-content></vm-content>
</template>

<script>

    const Header = require('../components/Header.vue');
    const Content = require('../components/Content.vue');

    module.exports = {
        components: {
            "vm-header": Header,
            "vm-content": Content
        }
    }
</script>
