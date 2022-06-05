<template>
  <div class="main-page">
    <div id="something">
      <calc-culator />
    </div>
  </div>
</template>

<script>
import CalcCulator from "@/components/Calc-price.vue";
export default {
  components: {
    CalcCulator,
  },
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  #something {
    width: 100%;
  }
}
</style>
