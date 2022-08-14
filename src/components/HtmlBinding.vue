<template>
  <div>
  <hr />
  {{ txt }}
  <div v-html="tag"></div>
  <div v-html="tag2"></div>
  </div>
</template>

<script>
export default {
  name: "HtmlBinding",
  data() {
    return {
      txt: "Hello",
      tag: "<h1>Html Hello</h1>",
      tag2: "<h2>Html h2 tag </h2>",
    };
  },
};
</script>
