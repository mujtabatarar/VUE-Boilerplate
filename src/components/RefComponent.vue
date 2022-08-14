<template>
  <div>
        <label for="nameIn">Enter your Name </label>
        <input type="text" id="nameIn" placeholder="Please Enter your Name" v-model="name" />

        <label for="emailIn"> Email </label>
        <input type="text" id="emailIn" placeholder="Please enter your email" ref="input" />
        <button v-on:click="getData"> Submit</button>

    </div>
</template>

<script>
export default {
    name:"RefComponent",
    data(){
        return{
            name:""
        }
    },
    methods:{
        getData(){
            let val = this.$refs.input.value;
            alert(this.name + " " + val);

        }
    }
}
</script>

<style>

</style>