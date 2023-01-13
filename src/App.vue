<script setup lang="ts">
import LoadingComponent from "./components/loading/LoadingComponent.vue";
</script>

<template>
  <div>
    <router-view> </router-view>
    <loading-component> </loading-component>
  </div>
</template>

<style scoped></style>
