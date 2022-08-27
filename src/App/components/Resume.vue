<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
const props = defineProps({
  message: String,
});
</script>
