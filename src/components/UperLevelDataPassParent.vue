<template>
  <div>
    <h1> This Component show way to pass Data to Uper level of Component </h1>
    {{username}}
    <uper-level-data-pass-child :getUserName="getUserName" />
  </div>
</template>

<script>
import UperLevelDataPassChild from "./UperLevelDataPassChild.vue";
export default {
    name:"UperLevelDataPassParent",
    data(){
        return{
            username:"a",
        }
    },
    components:{
        UperLevelDataPassChild,
    },
    methods:{
        getUserName(username){
            this.username=username
        }
    }
}
</script>

<style>

</style>