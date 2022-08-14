<template>
    <div>
    <hr/>
    <h1>Pass data From ParentComponent to ChildComponent </h1>
    <ChildComponent name="Mujtaba Gul Tarar"  :user="user" :getData="getData"/>
    </div>
</template>
<script>



import  ChildComponent  from './ChildComponent.vue'
export default{
    name:"ParentComponent",
    components:{
        ChildComponent
    },

    data(){
        return{
            user:{name:"danial", email:"danialkhan69@hotmail.com"}
        }
    },
    methods:{
        getData () {
            console.warn("in getdata");
        }
    }
}
</script>



