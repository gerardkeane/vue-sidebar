<script setup lang="ts">
const props = defineProps({
  icon: String,
  text: {
    default: "tooltip 💡",
    type: String,
  },
});

// defineProps<{ icon: string }>();
</script>

<template>
  <div class="sidebar-icon group">
    <v-icon :name="icon" />

    <span class="sidebar-tooltip group-hover:scale-100">
      {{ text }}
    </span>
  </div>
</template>

<style scoped></style>
