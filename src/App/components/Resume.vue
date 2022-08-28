<template>
  <div class="resume">
    <div class="resume__grid">
      <section class="resume__section resume__section--header">
        <div class="resume__container">
          <h1 class="resume__name">First name Last name</h1>
          <p class="resume__role">Your current role</p>
          <div class="links">
            <div class="links__link">
              <span class="links__icon"></span>
              <a href="" class="links__content">Phone: 00000000</a>
            </div>
            <div class="links__link">
              <span class="links__icon"></span>
              <a href="" class="links__content">Email: 00000000</a>
            </div>
            <div class="links__link">
              <span class="links__icon"></span>
              <a href="" class="links__content">LinkedIn: 00000000</a>
            </div>
          </div>
        </div>
      </section>
      <div class="resume__col resume__col--left">
        <section class="resume__section">
          <h2 class="resume__sectionHeading">Work Experience</h2>
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
          <h2 class="resume__sectionHeading">Projects</h2>
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
          <h2 class="resume__sectionHeading">Certifications</h2>
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
          <h2 class="resume__sectionHeading">Education</h2>
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
          <h2 class="resume__sectionHeading">Skills</h2>
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
          <h2 class="resume__sectionHeading">Achievements</h2>
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
const props = defineProps({
  resumeData: Array,
});
</script>
