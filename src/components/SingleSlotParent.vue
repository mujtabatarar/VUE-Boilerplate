<template>
<div>
  <single-slot-child>
    <template v-slot:header>
        <h1>this is named slot</h1>
    </template>
    <template v-slot:content>
        <img src="../assets/rice.jpg" alt="Girl in a jacket" width="280" height="140">
    </template>
    <template v-slot:submit>
        <button>Details</button>
    </template>
  </single-slot-child>

   <single-slot-child>
    <template v-slot:header>
        <h1>This is slot data no 2</h1>
    </template>
    <template v-slot:content>
        <img src="../assets/rice.jpg" alt="Girl in a jacket" width="280" height="140">
    </template>
    <template v-slot:submit>
        <button>Click me</button>
    </template>
  </single-slot-child>
  </div>
</template>

<script>
import SingleSlotChild from "./SingleSlotChild.vue";

export default {
  name: "SingleSlotParent",
  components: {
    SingleSlotChild,
  },
};
</script>

<style></style>
