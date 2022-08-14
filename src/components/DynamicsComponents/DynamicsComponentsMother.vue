 <template>
    <div>
        <DynamicsComponentsChildOne />
    </div>
 </template>
 
 <script>
    import DynamicsComponentsChildOne from "./DynamicsComponentsChildOne.vue";
    import DynamicsComponentsChildTwo from "./DynamicsComponentsChildTwo.vue";
    import DynamicsComponentsChildThree from "./DynamicsComponentsChildThree.vue";

 export default {
    name:"DynamicsComponentsMother",
    components:{
        DynamicsComponentsChildOne,DynamicsComponentsChildTwo,DynamicsComponentsChildThree,
    }

 
 }
 </script>
 
 <style>
 
 </style>