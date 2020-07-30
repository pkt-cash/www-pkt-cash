<template>
  <div class="c-community-list">
    <div class="container">
      <h1 class="c-community-list__title">{{ title }}</h1>
      <p class="c-community-list__text">{{ text }}</p>
      <div class="c-community-list__item" v-for="item of list" :key="item.title">
        <h1 class="c-community-list__item-title">{{ item.title }}</h1>
        <p class="c-community-list__item-text">{{ item.text }}</p>
        <figure>
          <img :src="item.img" alt />
        </figure>
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
  padding: rem(100) rem(15);

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
    margin-bottom: rem(20);
  }

  &__item {
    padding: rem(30);
  }
}
</style>