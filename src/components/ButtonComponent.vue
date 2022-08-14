<template>
    <div>
    <button>click me </button>
    <button v-on:click="test('hi')"> click me to</button>
    <button v-on:dbclick="test('helllo')">double click me</button>
    <button v-on:click="inc()">inc count</button>
    <h1 v-on:mousemove="newtest()">mouse over</h1>
    <h1>{{count}}</h1>
    </div>
</template>


<script>
    export default{
        name: "ButtonComponent",
        data(){
            return{
                count:0,
                
            }
        },
        methods:{
            inc(){
                this.count = this.count + 1;
            },
            test(a){
                alert (a);

                
            },
            newTest(){
                console.warn("hihihihi");
            }
        }

    }
       
</script>

<style scoped>

</style>
