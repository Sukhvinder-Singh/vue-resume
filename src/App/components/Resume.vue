<template>
  <div class="resume">
    <div class="resume__grid">
      <Header />
      <div class="resume__col resume__col--left">
        <section class="resume__section work">
          <h2>Work Experience</h2>
          <Work />
        </section>
        <section class="resume__section">
          <h2>Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            at cumque maxime dicta neque minima ipsa vero doloremque sunt
            nostrum optio saepe iste modi molestias cum voluptatum praesentium!
            Cumque, sunt modi! Nobis assumenda non animi, sed fugiat, quidem
            illo quae itaque quam dolor, facilis tempore aliquid ipsum earum
            beatae deleniti!
          </p>
        </section>
        <section class="resume__section">
          <h2>Certifications</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            at cumque maxime dicta neque minima ipsa vero doloremque sunt
            nostrum optio saepe iste modi molestias cum voluptatum praesentium!
            Cumque, sunt modi! Nobis assumenda non animi, sed fugiat, quidem
            illo quae itaque quam dolor, facilis tempore aliquid ipsum earum
            beatae deleniti!
          </p>
        </section>
      </div>
      <div class="resume__col resume__col--right">
        <section class="resume__section">
          <h2>Education</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            at cumque maxime dicta neque minima ipsa vero doloremque sunt
            nostrum optio saepe iste modi molestias cum voluptatum praesentium!
            Cumque, sunt modi! Nobis assumenda non animi, sed fugiat, quidem
            illo quae itaque quam dolor, facilis tempore aliquid ipsum earum
            beatae deleniti!
          </p>
        </section>
        <section class="resume__section">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            at cumque maxime dicta neque minima ipsa vero doloremque sunt
            nostrum optio saepe iste modi molestias cum voluptatum praesentium!
            Cumque, sunt modi! Nobis assumenda non animi, sed fugiat, quidem
            illo quae itaque quam dolor, facilis tempore aliquid ipsum earum
            beatae deleniti!
          </p>
        </section>
        <section class="resume__section">
          <h2>Achievements</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            at cumque maxime dicta neque minima ipsa vero doloremque sunt
            nostrum optio saepe iste modi molestias cum voluptatum praesentium!
            Cumque, sunt modi! Nobis assumenda non animi, sed fugiat, quidem
            illo quae itaque quam dolor, facilis tempore aliquid ipsum earum
            beatae deleniti!
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Work from "./Work.vue";

const props = defineProps({
  resumeData: Array,
});
</script>
