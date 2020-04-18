<template>
  <li class="item" :class="{submited: isSubmitted}">
    <form @submit.prevent="requested">
      <input type="text" v-model="itemName" />
    </form>
  </li>
</template>

<script>
export default {
  data() {
    return {
      itemName: "",
      isSubmitted: false
    };
  },
  methods: {
    requested: function() {
      this.isSubmitted = true;
      this.$emit("requested", this.itemName);
    }
  }
};
</script>

<style scoped>
.form {
  width: 0%;
}
.submited,
.submited input {
  color: var(--background-color);
  background: var(--primary-color);
}

input {
  border: none;
  font-family: var(--font);

  font-size: 1em;
  background: #f0eab3;
  width: 100%;
}
input:active,
input:focus {
  outline: none;
}
li {
  background: #f0eab3;
}
</style>