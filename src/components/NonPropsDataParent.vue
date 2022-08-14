<template>
    <div>
        <non-props-data-child name="Mujtaba" id="user1" />
    </div>
</template>

<script>
    import NonPropsDataChild from "./NonPropsDataChild.vue"

export default {
    name:"NonPropsDataParent",
    components:{
        NonPropsDataChild,
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style>

</style>