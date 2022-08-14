// lets transfer data between PropsOne and PropsTwo

<template>
  <div>
    <hr />
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "PropsOne",
  props: {
    name: String,
  },
};
</script>

<style></style>
