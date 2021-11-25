<template>
  <div class="c-origin-compass">
    <div class="container">
      <h1 class="c-origin-compass__title">{{ $t("origin_story.compass_title") }}</h1>
      <div class="c-origin-compass__wrap">
        <p class="c-origin-compass__text">{{ $t("origin_story.compass_text_01") }}</p>
        <p class="c-origin-compass__text">{{ $t("origin_story.compass_text_02") }}</p>
        <p class="c-origin-compass__text">{{ $t("origin_story.compass_text_03") }}</p>
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
.c-origin-compass {
  padding: rem(75) rem(25) rem(85);
  @include for-width(-small-lg) {
    padding: rem(50) rem(25) 105vw;
  }
  background-color: $dark_blue;
  background-image: url("/img/origin-story-compass.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  @include for-width(-small-lg) {
    background-image: url("/img/origin-story-compass-mobile.png");
    background-size: contain;
    background-position: bottom center;
  }
  color: $light_blue;

  .container {
    width: 100%;
    max-width: rem(1035);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(40);
    @include for-width(-small-lg) {
      margin-bottom: rem(30);
    }
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(20);
    @include for-width(-small-lg) {
      margin-bottom: rem(10);
    }
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include for-width(-tablet) {
      flex-direction: column;
    }

    & p {
      width: 49%;
      @include for-width(-tablet) {
        width: 100%;
      }
    }
  }
}
</style>