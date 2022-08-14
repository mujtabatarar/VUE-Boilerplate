<template>
  <form>
    <hr/>
    <label for="emailIn">Email</label>
    <input type="text" id="emailIn" v-model="form.email" />

    <label for="passwordIn"> Password </label>
    <input type="text" id="passwordIn" v-model="form.password" />
    <button v-on:click="login()"> Login </button>
  </form>
</template>

<script>
export default {
    name:"SimpleForm",
    data(){
        return{
            form:{  
                email:"",
                password:"",
            }
        }
    },
    methods:{
        login(){
            alert(this.form.email + " " + this.form.password);
        }
    }

}
</script>

<style>

</style>