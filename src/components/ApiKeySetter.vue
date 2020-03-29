<template>
  <div v-if="!hidden_">
    <span class="close" @click="hide">×</span>
    restdb.io API key:
    <input type="text" v-model="apiKeyModel" />
  </div>
</template>

<script>
export default {
  props: ["apiKey"],

  data() {
    return {
      hidden_: false
    };
  },
  computed: {
    apiKeyModel: {
      get() {
        return this.apiKey;
      },
      set(val) {
        this.$emit("update:apiKey", val);
      }
    },

    hidden: {
      get() {
        return JSON.parse(localStorage.ApiKeySetterHidden);
      },
      set(val) {
        this.hidden_ =  JSON.parse(val);
        localStorage.ApiKeySetterHidden = val;
      }
    }
  },
  mounted() {
    if (localStorage.ApiKeySetterHidden) {
      this.hidden = localStorage.ApiKeySetterHidden;
    }
  },
  methods: {
    hide: function() {
      this.hidden = true;
    }
  }
};
</script>

<style scoped>
div {
  background: var(--primary-color);
  padding: 3px;
  width: 100%;
}
input {
  width: 18em;
}
.close {
  background: dimgray;
  color: white;
  padding: 2px;
  border-radius: 10px;
}
</style>