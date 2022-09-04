<template>
  <div class="resume">
    <div class="resume__grid">
      <Header />
      <div class="resume__col resume__col--left">
        <section v-for="sectionData in leftColData" class="resume__section">
          <h2>{{ resumeSection(sectionData).getHeading() }}</h2>
          <component
            :is="resumeSection(sectionData).getSection()"
            :data="resumeSection(sectionData).getContent()"
          ></component>
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

<script>
import WorkExperience from "./Work.vue";
export default {
  components: {
    WorkExperience,
  },
};
</script>

<script setup>
import Header from "./Header.vue";
import Education from "./Education.vue";
import Skills from "./Skills.vue";
import Certifications from "./Certifications.vue";
import Achievement from "./Achievement.vue";
import { RESUME_DATA } from "../composables/data";
import {
  resumeSection,
  getColumnSections,
  getVisibleSections,
  sortSectionsByOrder,
} from "../composables/resume-interface";

const props = defineProps({
  resumeData: Array,
});

const leftColData = sortSectionsByOrder(
  getVisibleSections(getColumnSections(RESUME_DATA, "left"))
);
</script>
