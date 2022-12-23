<template>
  <div class="app-loading">
    <div class="loading">
      <div class="bounceball"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useRootStore from "@store/useRootStore";

const rootStore = useRootStore();
const { isLoading} = storeToRefs(rootStore)
</script>

<style scoped></style>
