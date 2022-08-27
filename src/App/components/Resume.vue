<template>
  <div class="resume">
    <div
      class="resume__section"
      v-for="(resumeSection, index) in resumeData"
      :key="`${resumeSection.section}-${index}`"
    >
      <h1 class="resume__sectionHeading">{{ resumeSection.heading }}</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  resumeData: Array,
});
</script>
