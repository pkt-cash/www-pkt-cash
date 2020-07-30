<template>
  <div class="c-origin-car">
    <div class="container">
      <span
        class="c-origin-car__quote"
      >“The reason bandwidth markets have not yet emerged is not because we can’t subdivide bandwidth, it’s because current technology prohibits subdivision of routing hardware.”</span>
      <p
        class="c-origin-car__text"
      >By replacing “where do you want to go” with “how do you want to get there”, cjdns replaces the rigidity of a postal service with the flexibility of a road system, a road system where each driver can choose which GPS to use. In this new network, hundreds or even thousands of Virtual ISPs can compete for customers while leasing access to the same “road system” and each searching for the best ways to get their customers’ data where it needs to go.</p>
      <div class="c-origin-car__btns">
        <nuxt-link class="c-origin-car__link blue-btn-arrow" to="/">
          <span>PKT Roadmap</span>
        </nuxt-link>
        <nuxt-link class="c-origin-car__link blue-btn-arrow" to="/">
          <span>Letter from CJD</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginStoryCompass",
};
</script>

<style lang="scss">
.c-origin-car {
  padding: rem(100) rem(15) rem(400);
  background-image: url("/img/origin-story-car.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;

  .container {
    width: 100%;
    max-width: rem(1100);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(40);
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(20);
  }

  &__quote {
    display: block;
    @extend %italic-quote;
    margin: rem(80) auto;
    max-width: 85%;
    text-align: center;
  }

  &__btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: rem(50);
  }

  &__link:not(:last-child) {
    margin-right: rem(20);
  }
}
</style>