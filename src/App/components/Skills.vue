<template>
  <article class="skills resume__article">
    <ul class="skills__list">
      <li class="skills__item" v-for="(skill, index) in skillsList" :key="`${skill}-${index}`">
        {{ skill }}
      </li>
    </ul>
  </article>
</template>

<script setup>
const skillsList = [
  "Web development",
  "Object-oriented programming",
  "HTML",
  "CSS",
  "JavaScript",
  "SASS",
  "Vue 3",
  "React",
  "Node",
  "NPM",
  "Git",
  "VSCode",
  "Bootstrap",
  "WebPack",
  "Babel",
  "EJS",
  "jQuery",
  "PostCSS",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
];
</script>
