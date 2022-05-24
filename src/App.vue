<template>
  <div class="app">
    <sidebar-menu-akahon />
    <router-view></router-view>
  </div>
</template>

<script>
import SidebarMenuAkahon from "@/components/Sidebar.vue";
export default {
  name: "MainPage",
  components: {
    SidebarMenuAkahon,
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: flex-end;
}
</style>
