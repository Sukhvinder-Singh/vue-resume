<template>
  <div class="resume">
    <div class="resume__grid">
      <Header />
      <div class="resume__col resume__col--left">
        <section class="resume__section">
          <h2>Work Experience</h2>
          <Work />
        </section>
        <section class="resume__section">
          <h2>Projects</h2>
          <Projects />
        </section>
        <section class="resume__section" v-for="(i,idx) in leftColData">
          <h2>{{resumeSectionInterface(i).getHeading()}}</h2>
          <component :is="resumeSectionInterface(i).getSection()"></component>
        </section>
      </div>
      <div class="resume__col resume__col--right">
        <section class="resume__section">
          <h2>Education</h2>
          <Education />
        </section>
        <section class="resume__section">
          <h2>Skills</h2>
          <Skills />
        </section>
        <section class="resume__section">
          <h2>Certifications</h2>
          <Certifications />
        </section>
        <section class="resume__section">
          <h2>Achievements</h2>
          <Achievement />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Work from "./Work.vue";
import Projects from "./Projects.vue";
import Education from "./Education.vue";
import Skills from "./Skills.vue";
import Certifications from "./Certifications.vue";
import Achievement from "./Achievement.vue";
import { RESUME_DATA } from "../composables/data";
import {
  getColumnSections,
  getVisibleSections,
  resumeSectionInterface,
  sortSectionsByOrder,
} from "../composables/resume-interface";

const props = defineProps({
  resumeData: Array,
});

const leftColData = sortSectionsByOrder(
  getVisibleSections(getColumnSections(RESUME_DATA, "left"))
);
</script>
