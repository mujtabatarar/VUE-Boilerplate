<template>
  <h1> {{getUserName("mujtaba")}} </h1>
</template>

<script>
export default {
    name:"UperLevelDataPassChild.vue",
    props:{
        getUserName:Function,
    }
}
</script>

<style>

</style>