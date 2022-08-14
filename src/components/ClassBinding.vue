// css classes ko bind karna ka tariqa.
// 1- simple
// 2- dynamic
// 2.1 multiple css classes 
// 2.2 css classes via a computed.

<template>
    <div>
    <hr/>
    <h1 class="green">Mujtaba Gul Tarar</h1> 
    <h1 :class="{green:doColor}"> Rima Tarar </h1>
    <button v-on:click="doColor=!doColor">Click me to color </button>
    <h1 class="green" :class="{boldText:doColor, styleText:true}">Long time no see </h1>
    <h1 :class="applyStyles"> lets moved on </h1>
    </div>
</template>

<script>
export default {
    name:"ClassBinding",
    data(){
        return{
            doColor:true,
        }
    },
    computed:{
        applyStyles(){
            return{
                green:this.doColor,
                boldText:this.doColor,
                styleText:this.doColor,           
            }
        }
    }


}
</script>

<style>
    .green{
        color: greenyellow;
        background-color: cadetblue;
    }
    .boldText{
        font-weight: bold;
    }
    .styleText{
          font-style: italic;
    }
    

</style>