<script setup lang="ts">
import SidebarIcon from "./SidebarIcon.vue";
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow">
    <SidebarIcon icon="fa-flag" text="Flag" />
    <SidebarIcon icon="oi-graph" text="Stocks" />
    <SidebarIcon icon="pr-apple" text="Apple" />
    <SidebarIcon icon="pr-euro" text="Cash" />
  </div>
</template>

<style scoped></style>
