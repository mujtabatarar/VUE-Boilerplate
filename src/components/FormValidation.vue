<template>
  <div>
    <hr/>
    <h1> This is Form Validation, Component name is FormValidation.vue </h1>
    <ul>
        <li v-for="error in errorArray" :key="error">
            {{error}} is empty
            </li>
    </ul>
    <br/>
    {{form}}
    <br/>
    <br/>
    <br/>
    <label for="emailIn">Email </label>
    <input type="text" placeholder="Enter email" id="emailIn" v-model="form.email" /> 
    <br/>

    <label for="nameIn">Name</label>
    <input type="text" placeholder="Enter Name" id="nameIn" v-model="form.name" />
    <br/>

    <label>Gender</label>
    <br/>
    <label for="maleIn">men</label>
    <input type="radio" id="maleIn" name="sex" value="male" v-model="form.gender"/>

    <label for="femaleIn">Female</label>
    <input type="radio" id="femaleIn" name="sex"  value="female" v-model="form.gender"/>
    <br/>

    <label>Technology </label>
    <br/>

    <label>Java</label>
    <input type="checkbox" value="Java" v-model="form.tech"/>
    <br/>

    <label>C#</label>
    <input type="checkbox" value="c#" v-model="form.tech" />
    <br/>

    <label>Java Script</label>
    <input type="checkbox" value="java script" v-model="form.tech"/>
    <br/>

    <select v-model="form.country">
    <option disabled value="">Country</option>
    <option>Pakistan</option>
    <option>India</option>
    <option>Israel</option>
    </select>

    <br/>
    <br/>
    <button v-on:click="logIn">Login</button>

  </div>
</template>

<script>
export default {
    name:"CompleteForm",
    data(){
        return{
            form:{
                email:"",
                name:"",
                gender:"",
                tech:[],
                country:"",
            },
            errorArray:[],
        }
    },
    methods:{
        logIn(){
            this.errorArray = []
             for(const item in this.form){
                if(this.form[item]=="" || item === ""){
                    this.errorArray.push(item)
                }
            }
           
        }
    },
}
</script>

<style>

</style>