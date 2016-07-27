<template>
    <p @click="reverse">{{msg}}</p>
    <p>{{date}}</p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: "content Text...",
                date: new Date()
            }
        },
        methods: {
            reverse : function(){
                this.msg = this.msg.split('').reverse().join('');
            }
        }
    }
</script>
