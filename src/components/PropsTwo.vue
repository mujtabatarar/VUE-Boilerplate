<template>
    <div>
    <PropsOne name="petter" />
    <props-one :name="name" />
    </div>
</template>

<script>
import PropsOne from "./PropsOne.vue"

export default {
    name:"PropsTwo",
    components:{
        PropsOne,
    },
    data(){
        return{
            name:"BRUCE"
        }
    }
}
</script>

<style>

</style>