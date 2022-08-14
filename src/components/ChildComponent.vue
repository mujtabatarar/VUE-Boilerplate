//child component
<template>
    <div>
    <h1>{{name}} is what have been passed as string. </h1>
    <h2>{{user.name}}  email address is {{user.email}} </h2>
    <h3> function called{{getData()}} </h3>
    <button v-on:click="getData()"> Click me to run getData </button>
    </div>
</template>

<script>
export default {
    name:"ChildComponent",
    props:{
        name:String,
        user:Object,
        getData:Function,
    }
}
</script>