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
        <nuxt-link class="c-origin-car__link blue-btn" to="/">
          <span>PKT Roadmap</span>
        </nuxt-link>
        <nuxt-link class="c-origin-car__link blue-btn" to="/">
          <span>Letter from CJD</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginStoryCar",
};
</script>

<style lang="scss">
.c-origin-car {
  padding: rem(100) rem(25) rem(455);
  @include for-width(-small-lg) {
    padding: rem(40) rem(25) rem(297);
  }
  background-image: url("/img/origin-story-car.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  @include for-width(-small-lg) {
    background-image: url("/img/origin-story-car-mobile.png");
    background-size: 100% auto;
  }

  .container {
    width: 100%;
    max-width: rem(1040);
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
    margin: 0 auto rem(40);
    text-align: center;
    @include for-width(+ small-lg) {
      max-width: 96%;
      margin-bottom: rem(70);
    }
  }

  &__btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: rem(50);
    @include for-width(-small-lg) {
      flex-direction: column;
      align-items: center;
      margin-top: rem(40);
    }
  }

  &__link:not(:last-child) {
    @include for-width(-small-lg) {
      margin-bottom: rem(20);
    }
    @include for-width(+ small-lg) {
      margin-right: rem(20);
    }
  }
}
</style>