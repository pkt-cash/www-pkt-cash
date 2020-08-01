<template>
  <div class="c-community-list">
    <div class="container">
      <h1 class="c-community-list__title">{{ title }}</h1>
      <p class="c-community-list__text">{{ text }}</p>
      <div class="c-community-list__item" v-for="item of list" :key="item.title">
        <nuxt-link class="c-community-list__item-wrap" to="/">
          <h1 class="c-community-list__item-title">{{ item.title }}</h1>
          <p class="c-community-list__item-text">{{ item.text }}</p>
          <figure class="c-community-list__item-img">
            <img :src="item.img" alt />
          </figure>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityList",
  props: {
    title: String,
    text: String,
    list: Array,
  },
};
</script>

<style lang="scss">
.c-community-list {
  padding: rem(100) rem(15) rem(0);

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(50);
    text-align: center;
  }

  &__text {
    @extend %text-main;
    text-align: center;
    margin-bottom: rem(80);
  }

  &__item {
    padding: rem(30) rem(30) rem(30) rem(120);
    background-color: $light_blue;
    border-radius: rem(30);
    margin-bottom: rem(30);
    box-shadow: 4px 4px 10px rgba(25, 25, 68, 0.1);
    position: relative;

    &-wrap {
      cursor: pointer;
    }

    &-title {
      @extend %h3-title;
      margin-bottom: rem(16);
    }

    &-text {
      @include font_sizes(17, 27);
    }

    &-img {
      position: absolute;
      left: rem(30);
      top: rem(30);
    }
  }
}
</style>