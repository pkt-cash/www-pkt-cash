<template>
  <div class="c-advantage">
    <template v-for="item of list">
      <div
        class="c-advantage__item"
        :key="item.title"
        :style="{ 'background-image': 'url(' + item.img + ')' }"
      >
        <div class="container" :class="{ 'container-right': item.aligh }">
          <h1 class="c-advantage__title">{{ item.title }}</h1>
          <h2 class="c-advantage__sub">{{ item.subTitle }}</h2>
          <p class="c-advantage__text">{{ item.text }}</p>
          <nuxt-link to="/" class="c-advantage__link blue-btn-arrow">
            <span>{{ item.btnText }}</span>
          </nuxt-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Advatage",
  props: {
    list: Array,
  },
};
</script>

<style lang="scss">
.c-advantage {
  &__item {
    padding: rem(100) rem(15);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
  }

  .container {
    width: 100%;
    max-width: rem(1072);
    margin: 0 auto;
  }

  .container-right {
    padding-left: rem(526);
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(30);
    max-width: rem(800);
  }

  &__sub {
    @extend %h2-title;
    margin-bottom: rem(20);
    max-width: rem(499);
  }

  &__text {
    @extend %regular;
    @include font_sizes(25, 40);
    margin-bottom: rem(50);
    max-width: rem(500);
  }
}
</style>