<template>
    <div>
        <h1> this is parent to child non props data transfer example, NonPropsDataChild and NonPropsDataParent </h1>
        {{name}}
        <h1> This is H1 </h1>
        <h2 v-bind="$attrs"> id wrapper ka sath or is ka sath attach ho ga </h2>
    </div>
</template>

<script>
export default {
    name:"NonPropsDataChild",
    props:{
        name:String,
    }
}
</script>

<style>

</style>