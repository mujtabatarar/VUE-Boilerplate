<template>
  <div>
    <hr/>
    <br/>
    <br/>
    <h1>This is watcher example: WatcherComponent.vue</h1>
    {{count}}
    <button v-on:click="count=count+1">+</button>
    <button v-on:click="count=count-1">-</button>
  </div>
</template>

<script>
export default {
  name: "WatcherComponent",
  data() {
    return{
    count: 0
    }
  },
  watch: {
    count(val, prev) {
        if(this.count>5 && !(val<=prev)){
            alert( val + " " + prev + "dont go to hight");
        }
    },
  },
};
</script>

<style></style>
