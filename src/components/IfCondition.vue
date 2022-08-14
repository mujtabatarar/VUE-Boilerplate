<template>
    <hr />
    <h1> If Condition ( v-if="show" and v-else ) </h1>
    <h1 v-if="show">Show upon true </h1>
    <h1 v-else></h1>
    <hr/>
    <h1>Toggle Example </h1>
    <h1 v-if="show">Show upon True again </h1>
    <h1 v-else> Show this upon else</h1>
    <hr/>
    <button v-on:click="hide=!hide"show=!show">Toggle </button>
</template>


<script>
export default{
    name:"IfCondition",
    data(){
        return{
        show:false
        }
    }

}
</script>
