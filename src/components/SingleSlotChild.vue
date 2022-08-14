<template>
  <div class="box">
    <header>
      <slot name="header"></slot>
    </header>
    <content>
      <slot name="content"></slot>
    </content>
    <br/>
    <submit>
      <slot name="submit"></slot>
    </submit>
  </div>
</template>

<script>
export default {
  name: "SingleSlotChild",
  props: {
    data: String,
  },
};
</script>

<style>
.box{
    margin: 20px;
    border-color: black;
    border: 5px solid;
    padding: 20px;
    width: 300px;
}
</style>
