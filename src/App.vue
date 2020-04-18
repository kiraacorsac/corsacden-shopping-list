<template>
  <div id="app">
    <ApiKeySetter :apiKey.sync="apiKey" />
    <!-- {{apiKey}} -->
    <main>
      <ShoppingList :api-key="apiKey" />
    </main>
  </div>
</template>

<script>
import ApiKeySetter from "./components/ApiKeySetter";
import ShoppingList from "./components/ShoppingList";

export default {
  components: {
    ApiKeySetter,
    ShoppingList
  },
  data() {
    return {
      apiKey: ""
    };
  },
  mounted() {
    if (localStorage.apiKey) {
      this.apiKey = localStorage.apiKey;
    }
  },
  watch: {
    apiKey(newApiKey) {
      localStorage.apiKey = newApiKey;
    }
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');

body {
  --primary-color: #fed766;
  --background-color: #525252;
  --darker-color: #020101;
  --standard-text-color: white;
  --font: 'Comfortaa';

  padding: 0px;
  margin: 0px;
  font-family: var(--font);
  background: var(--background-color);
}
header {
  background: #313131;
}
h1 {
  color: var(--standard-text-color);
  text-align: center;
  font-weight: 100;
}
main {
  display: flex;
  justify-content: center;
  padding: 0px 10px;
}
</style>
