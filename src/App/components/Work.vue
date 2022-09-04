<template>
  <article v-for="workData in data" class="work resume__article">
    <div class="work__details">
      <div>
        <h3 class="mb-0">
          {{ workExperience(workData).getOrganization() }}
        </h3>
        <h4>{{ workExperience(workData).getRole() }}</h4>
      </div>
      <ul class="work__progression">
        <li v-for="progression in workExperience(workData).getProgression()">
          <strong>{{ progressionData(progression).getRole() }}</strong>
          ({{ progressionData(progression).getStart() }} -
          {{ progressionData(progression).getEnd() }})
        </li>
      </ul>
    </div>
    <ul>
      <li
        v-for="detail in workExperience(workData).getDetails()"
        v-html="detail"
      ></li>
    </ul>
  </article>
</template>

<script setup>
import {
  workExperience,
  progressionData,
} from "../composables/work-experience";

const props = defineProps({
  data: Object,
});
</script>
