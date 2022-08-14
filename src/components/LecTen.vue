<template>
<div>
    <input type="text" v-model="count" />
    <h1>{{count}}</h1>
    </div>
</template>

<script>
    export default{
        name: "LecTen",
        data(){
            return{
            count:10
            }
        }
    }
</script>

<style scoped>

</style>
