

<template>

<div>
    <button @click="increment">Increment + 1</button>
</div>

</template>

<script>

export default {
    vuex: {
        actions: {
            increment: function(store) {
                store.dispatch('INCREMENT');
            }
        }
    }
}

</script>
