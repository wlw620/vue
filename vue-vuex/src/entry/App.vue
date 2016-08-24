

<template>

<div>
    <Display></Display>
    <Increment></Increment>
    <list></list>
</div>

</template>

<script>

import Display from '../components/Display.vue';
import Increment from '../components/Increment.vue';
import List from '../components/List.vue';
import store from '../store';

export default {
    components: {
        Display: Display,
        Increment: Increment,
        list: List
    },
    store
};

</script>
