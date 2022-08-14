<template>
  <div class="user">
    <h4>{{ item.name }}</h4>
    <h4>{{ item.email }}</h4>
    <button v-on:click="showData()">Child show Data</button>
    <button v-on:click="parentShowData()">Parent Show Data </button>
  </div>
</template>

<script>
export default {
  name: "ChildReuse",
  props: {
    item: Object,
    parentShowData:Function,
  },
  data() {
    return {};
  },
  methods: {
    showData(){
        alert("child function not prefered way, because it is heavy, it create function for each child.");
    },
  },
};
</script>

<style scoped>
.user{
    background-color: dimgrey;
    padding: 1px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>
