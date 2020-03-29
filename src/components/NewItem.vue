<template>
  <li class="item">
    <form @submit.prevent="requested">
      <input type="text" v-model="itemName" />
    </form>
  </li>
</template>

<script>
export default {
  data() {
    return {
      itemName: ""
    };
  },
  methods: {
    requested: function() {
      this.$emit("requested", this.itemName);
    }
  }
};
</script>

<style scoped>
.form {
  width: 0%;
}
input {
  border: none;
  font-family: var(--font);

  font-size: 1em;
  background: #f0eab3;
  width: 75%;
}
input:active,
input:focus {
  outline: none;
}
li {
  background: #f0eab3;
}
</style>