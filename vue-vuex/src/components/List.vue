<style>

.item {
    box-sizing: border-box;
    background-color: #eee;
    border: 1px solid black;
    display: inline-block;
    width: 100px;
    height: 100px;
}

.item-transition {
    transition: opacity .5s ease;
}

.item-enter {
    opacity: 0;
}

.item-leave {
    opacity: 0;
    position: absolute;
    /* important for removal move to work */
}

.item-move {
    color: red;
    transition: transform .5s cubic-bezier(.55, 0, .1, 1);
    /* applied when moving */
}

</style>

<template lang="html">

<input type="button" value="add" @click="add">
<ul>
    <li class="item" v-for="item in items" transition="item">
        {{item}}
    </li>
</ul>

</template>

<script>

import Vue from 'vue';
import VueAnimatedList from '../animated-list';
Vue.use(VueAnimatedList);

export default {
    data: function() {
        return {
            items: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        add: function() {
            this.items.unshift(this.items.length)
        }
    }
}

</script>
