<template>
  <div class="c-simple-header" :style="{ 'background-image': 'url(' + bg + ')'}">
    <div class="container">
      <h1 class="c-simple-header__title">{{ title }}</h1>
      <h2 class="c-simple-header__sub-title">{{ subtitle }}</h2>
      <p class="c-simple-header__text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleHeader",
  props: {
    title: String,
    subtitle: String,
    text: String,
    bg: String,
  },
};
</script>

<style lang="scss">
.c-simple-header {
  padding: rem(108) 0 rem(171);
  color: $light_blue;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & .container {
    width: 100%;
    max-width: rem(1100);
    margin: 0 auto;
    padding: 0 rem(15);
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
}
</style>