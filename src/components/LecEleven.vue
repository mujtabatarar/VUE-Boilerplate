<template>
    <div>
    <input type="text" placeholder="email" v-model="email" />
    <input type="text" placeholder="password" v-model="password" />
    <button v-on:click="showData()">Set Data</button>
    </div>
</template>


<script>
export default{
    name:"LecEleven",
    data(){
        return{
            email:null,
            password:null
        }
    },
    methods:{
        showData(){
            alert(this.email + this.password);
        }
    }
    
}

</script>


<style scoped>

</style>
