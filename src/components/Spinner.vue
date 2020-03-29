<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 160px;
  height: 160px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 14px solid var(--primary-color);
  border-color: var(--primary-color) transparent var(--primary-color) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>