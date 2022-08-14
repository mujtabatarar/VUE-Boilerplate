<template></template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      email: "anilsharma@gmail.com",
    }
  },
  methods: {
    getName(name) {
      return name;
    },
    getData() {
      return {
        name: "anikl",
        email: this.email,
      };
    },
  },
};
</script>

<style scoped></style>
