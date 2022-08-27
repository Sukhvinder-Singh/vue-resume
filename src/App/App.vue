<template>
  <Resume :resume-data="TEST_DATA" />
</template>

<script setup>
import Resume from "./components/Resume.vue";

/**
 * Test only
 */

const TEST_DATA = [
  {
    section: "work-experience",
    heading: "Work experience",
  },
  {
    section: "education",
    heading: "Education",
  },
];
</script>
