<template>
  <li class="item" @dblclick="bought">{{item.name}}</li>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    bought: function() {
      this.$emit("bought", this.item);
    }
  }
};
</script>

<style>


</style>