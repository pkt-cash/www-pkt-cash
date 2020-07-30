<template>
  <div class="c-big-header" :style="{ 'background-image': 'url(' + bg + ')'}">
    <div class="container">
      <h1 class="c-big-header__title">{{ title }}</h1>
      <h2 class="c-big-header__sub-title">{{ subtitle }}</h2>
      <p class="c-big-header__text">{{ text }}</p>
      <nuxt-link class="c-big-header__link blue-btn-arrow" to="/" v-if="btn">{{ btn }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigHeader",
  props: {
    title: String,
    subtitle: String,
    text: String,
    btn: String,
    bg: String,
  },
};
</script>

<style lang="scss">
.c-big-header {
  padding: rem(108) 0 rem(171);
  color: $light_blue;
  min-height: calc(100vh - 100px);
  @include for-width(-small-md) {
    min-height: calc(100vh - 45px);
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & .container {
    width: 100%;
    max-width: rem(1100);
    margin: 0 auto;
    padding: 0 rem(300) 0 rem(15);
    @include for-width(-desktop-med) {
      padding: 0 rem(15);
    }
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(41);
  }

  &__sub-title {
    @extend %h2-title;
  }

  &__text {
    @extend %text-main;
  }

  &__link {
    margin-top: rem(50);
  }
}
</style>