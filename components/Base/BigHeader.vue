<template>
  <div class="c-big-header" :style="{ 'background-image': 'url(' + bg + ')'}">
    <div class="container">
      <h1 class="c-big-header__title">{{ title }}</h1>
      <h2 class="c-big-header__sub-title" v-if="subtitle">{{ subtitle }}</h2>
      <p class="c-big-header__text" v-if="text">{{ text }}</p>
      <ul class="c-big-header__list" v-if="list">
        <li v-for="item of list" :key="item" class="c-big-header__list-item">{{ item }}</li>
      </ul>
      <ul class="c-big-header__list--tick" v-if="listTick">
        <li v-for="item of listTick" :key="item" class="c-big-header__list--tick-item">{{ item }}</li>
      </ul>
      <nuxt-link class="c-big-header__link blue-btn-arrow" to="/" v-if="btn">{{ btn }}</nuxt-link>
      <p class="c-big-header__sometext" v-if="sometext">{{ sometext }}</p>
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
    list: Array,
    listTick: Array,
    btn: String,
    sometext: String,
    bg: String,
  },
};
</script>

<style lang="scss">
.c-big-header {
  padding: rem(208) 0 rem(171);
  @include for-width(-tablet) {
    padding: rem(170) 0 rem(30);
  }
  color: $light_blue;
  min-height: 100vh;
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
  }

  &__sub-title {
    @extend %h2-title;
    margin-top: rem(40);
  }

  &__text {
    @extend %text-main;
    margin-top: rem(40);
  }

  &__sometext {
    @extend %text-main;
    margin-top: rem(130);
  }

  &__list {
    margin-top: rem(40);

    &-item {
      @extend %text-main;
      padding-left: rem(30);
      @include for-width(-tablet) {
        padding-left: rem(15);
      }
      margin-bottom: rem(20);
      position: relative;

      &::after {
        position: absolute;
        content: "";
        top: rem(20);
        left: 0;
        transform: translateY(-50%);
        display: block;
        width: rem(10);
        height: rem(10);
        border-radius: 50%;
        background-color: $light_blue;
      }
    }
  }

  &__list--tick {
    margin-top: rem(40);

    &-item {
      @extend %text-main;
      padding-left: rem(100);
      @include for-width(-tablet) {
        padding-left: rem(50);
      }
      margin-bottom: rem(20);
      position: relative;

      &::after {
        position: absolute;
        content: "";
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        display: block;
        width: rem(29);
        height: rem(22);
        background-image: url("/img/tick.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  &__link {
    margin-top: rem(50);
  }
}
</style>