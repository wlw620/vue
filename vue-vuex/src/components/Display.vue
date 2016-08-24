

<template>

    <h3>Count is {{count}}</h3>

</template>

<script>

export default {
    vuex: {
        getters: {
            count: state => state.count
        }
    }
}

</script>
