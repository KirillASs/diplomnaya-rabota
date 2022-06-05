<template>
  <div id="main" v-cloak>
    <h1 class="heading">Калькулятор</h1>
    <ul class="services">
      <li
        v-for="service in services"
        :key="service.id"
        class="services__item"
        :class="{ active: service.active }"
        @click="$emit('toggle-active', service.id)"
      >
        <span>{{ service.name }}</span> <span>{{ service.price }} $</span>
      </li>
    </ul>
    <p class="total">
      <span>Total:</span> <span>{{ total }} $</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CalcCulator",
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    total() {
      return this.services.reduce((sum, service) => {
        if (service.active) {
          sum += service.price;
        }
        return sum;
      }, 0);
    },
  },
};
</script>

<style lang="scss">
$sans: "Open Sans", sans-serif;
$script: "Rochester", script;

$background: #37718e;
$text: #ffffff;
$primary: #aef3e7;
$primary-text: #006080;
$accent: #c33c54;

html {
  box-sizing: border-box;
  font-size: 18px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: $sans;
  color: $text;

  background-color: $background;
}
.heading {
  font-family: $script;
  font-size: 3.5rem;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.01rem;
  text-align: center;
  text-shadow: 0 3px 0 darken($background, 10%);
  margin: 40px 0;
}
.services {
  margin-bottom: 1rem;
  min-width: 50vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;

  list-style: none;
}

.services__item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;

  border-radius: 0.25rem;
  box-shadow: 0 3px 3px 0 darken($background, 10%);

  color: $primary-text;

  background-color: $primary;

  &.active {
    color: $text;

    background-color: $accent;
  }
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  border-top: 1px solid $text;
}
</style>
