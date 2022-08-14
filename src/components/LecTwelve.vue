<template>
    <h1>Lecture 12 </h1>

    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="transitArray" id="java"/>

    <label for="python">python</label>
    <input type="checkbox" value="python" v-model="transitArray" id="python"/>

    <label for="unity">Unity</label>
    <input type="checkbox" value="unity" v-model="transitArray" id="unity" />

    <br/>
    <hr/>
    <label for="student">Student</label>
    <input type="radio" value="student" v-model="wow" name="rad" id="student" />

    <label for="professional">Professional</label>
    <input type="radio" value="professional" v-model="wow" name="rad" id="student" />

    <h1>I am a {{wow}} knows {{transitArray}}</h1>
</template>

<script>
    export default{
        name:"LecTwelve",
        data(){
            return{
            transitArray:[],
            wow:null
            }
        }
    }


</script>

<style scoped>

</style>
