<template>
  <div class="main-page">
    <div id="something">
      <calc-culator :services="services" @toggle-active="toggleActive" />
    </div>
  </div>
</template>

<script>
import CalcCulator from "@/components/Calc-price.vue";
export default {
  components: {
    CalcCulator,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Главная страница",
          price: 1000,
          active: true,
        },
        {
          id: 2,
          name: "Контакты",
          price: 5000,
          active: false,
        },
        {
          id: 3,
          name: "Сообщения",
          price: 2000,
          active: false,
        },
      ],
    };
  },
  methods: {
    toggleActive(id) {
      const service = this.services.find((service) => service.id === id);
      service.active = !service.active;
    },
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
