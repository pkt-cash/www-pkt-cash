<template>
  <div class="c-community-list">
    <div class="container">
      <h1 class="c-community-list__title">{{ title }}</h1>
      <p class="c-community-list__text">{{ text }}</p>
      <a
        class="c-community-list__item"
        v-for="item of list"
        :key="item.title"
        :href="item.link"
        target="_blank"
      >
        <h1 class="c-community-list__item-title">{{ item.title }}</h1>
        <p class="c-community-list__item-text">{{ item.text }}</p>
        <figure class="c-community-list__item-img">
          <img :src="item.img" alt />
        </figure>
      </a>
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
  filters: {
    crop_text(value) {
      if(process.client) {
        if(window.innerWidth < 768) {
          return value.slice(0, 20) + '>>>'
        } else {
          return value
        }
      }
    }
  }
};
</script>

<style lang="scss">
.c-community-list {
  padding: rem(100) rem(25) rem(100);
  @include for-width(-tablet) {
    padding: rem(50) rem(25) rem(50);
  }

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(50);
    text-align: center;
    @include for-width(-tablet) {
      margin-bottom: rem(20);
    }
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(40);
    @include for-width(+ tablet) {
      text-align: center;
      margin-bottom: rem(80);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: rem(160);
    max-width: rem(748);
    margin: 0 auto;
    padding: 0 rem(30) 0 rem(126);
    background-color: $light_blue;
    border-radius: rem(30);
    margin-bottom: rem(30);
    box-shadow: 4px 4px 10px rgba(25, 25, 68, 0.1);
    position: relative;
    color: $dark_blue;
    @include for-width(-tablet) {
      height: auto;
      padding: 30px rem(15) 30px rem(83);
    }

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      @extend %semibold;
      @include font_sizes(25, 35);
      @include for-width(-tablet) {
        @include font_sizes(16, 26);
      }
      margin-bottom: rem(11);
    }

    &-text {
      @include font_sizes(17, 27);
    }

    &-img {
      position: absolute;
      left: rem(40);
      top: rem(35);
      @include for-width(-tablet) {
        left: rem(22);
        top: rem(30);
        max-width: rem(40);
        max-height: rem(40);
      }
    }
  }
}
</style>
