<template>
  <div>
    <h1>This is Form Modifiers example , see FormModifier.vue</h1>

    <input type="text" placeholder="without form modifier" v-model="userText" />
    {{userText}}
    <br/>
    <br/>
    
    <input type="text" placeholder="lazy form modifier" v-model.lazy="userTextLazy" />
    {{userTextLazy}}
    <br/>
    <br/>

    <input type="text" placeholder="trim form modifier" v-model.trim="userTextTrim" />
    {{userTextTrim}}
    <br/>
    <br/>

    <input type="number" placeholder="type is number" v-model="userNumber" />
    {{typeof(userNumber)}}
    <br/>


    <input type="number" placeholder="number modifier" v-model.number="userNo" />
    {{typeof(userNo)}}
    <br/>

    <input type="text" placeholder=" several modifier" v-model.trim.lazy.number="everyThing" />
    {{typeof(everyThing)}}
    {{everyThing}}
    <br/>

  </div>
</template>

<script>
export default {
    name:"FormModifier",
    data(){
        return{
            userText:"",
            userTextLazy:"",
            userTextTrim:"",
            userNumber:"",
            userNo:"",
            everyThing:"",
        }
    },
};
</script>

<style></style>
