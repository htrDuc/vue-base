<script setup lang="ts">
import Loading from "./components/loading/Loading.vue";
</script>

<template>
  <div>
    <router-view></router-view>
    <Loading></Loading>
  </div>
</template>

<style scoped></style>
