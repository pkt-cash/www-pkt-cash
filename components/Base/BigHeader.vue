<template>
  <div class="c-big-header" :class="{ 'net-mobile-bg': is_mobile && is_network_st, 'is_wallet': is_wallet, is_wallet_setup: is_wallet_setup }" :style="{ 'background-image': 'url(' + bg + ')'}">
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
      <nuxt-link
        class="c-big-header__link blue-btn-arrow"
        :to="{ path: btnLink }"
        v-if="btn"
      >{{ btn }}</nuxt-link>
      <p class="c-big-header__sometext" v-if="sometext">{{ sometext }}</p>
      <div class="c-big-header__email" v-if="email">
        <input type="text" placeholder="Email" class="c-big-header__email-input" />
        <button class="c-big-header__email-btn blue-btn">Join The Community</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigHeader",
  props: {
    is_network_st: Boolean,
    is_wallet_setup: Boolean,
    is_wallet: Boolean,
    title: String,
    subtitle: String,
    text: String,
    list: Array,
    listTick: Array,
    btn: String,
    sometext: String,
    bg: String,
    email: Boolean,
    btnLink: String,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 1024 : false;
    },
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
  &.net-mobile-bg {
    padding-top: rem(230);
    background-position: right top;
  }
  &.is_wallet {
    .c-big-header {
      &__title{
        @include for-width(-tablet) {
          font-size: rem(33);
        }
      }
      &__sub-title {
        max-width: rem(481);
        @include for-width(-tablet) {
          font-size: rem(25);
        }
      }
      &__list--tick {
          max-width: rem(539);
      }
      &__list--tick-item {
        @include for-width(-tablet) {
          align-items: flex-start;
          font-size: rem(17);
          padding-left: rem(20);
          &:after {
            top: 10px;
            transform: translateY(0);
            width: rem(10);
            height: rem(10);
          }
        }
      }
    }
  }
  &.is_wallet_setup {
    .c-big-header {
      &__text {
        max-width: rem(340);
      }
      &__list {
        max-width: rem(320);
      }
      &__sometext {;
      }
    }
  }
  & .container {
    width: 100%;
    max-width: rem(1100);
    margin: 0 auto;
    padding: 0 rem(300) 0 rem(15);
    @include for-width(-desktop-med) {
      padding: 0 rem(25);
    }
  }

  &__title {
    @extend %h1-title;
    @include for-width(-tablet) {
      font-size: rem(34);
    }
  }

  &__sub-title {
    @extend %h2-title;
    margin-top: rem(40);
  }

  &__text {
    @extend %text-main;
    margin-top: rem(40);
    @include for-width(-tablet) {
      margin-top: rem(65);
      font-size: rem(16);
    }
  }

  &__sometext {
    @extend %text-main;
    margin-top: rem(130);
    @include for-width(-tablet) {
      margin-top: rem(70);
    }
  }

  &__list {
    margin-top: rem(40);

    &-item {
      @extend %text-main;
      padding-left: rem(30);
      @include for-width(-tablet) {
        padding-left: rem(25);
      }
      margin-bottom: rem(20);
      position: relative;

      &::after {
        position: absolute;
        content: "";
        top: rem(20);
        @include for-width(-tablet) {
          top: rem(0);
          transform: translateY(0);
        }
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

  &__email {
    display: block;
    position: relative;
    margin: rem(50) auto 0 0;
    max-width: rem(750);
    @include for-width(-tablet) {
      display: flex;
      flex-direction: column;
    }

    &-input {
      width: 100%;
      background-color: $dark_blue;
      padding: rem(17) rem(34);
      @include font_sizes(14, 20);
      border-radius: rem(48);
      border: none;
      color: $light_blue;

      &::placeholder {
        color: $light_blue;
        opacity: 0.8;
      }
    }

    &-btn {
      position: absolute;
      top: 0;
      right: 0;
      @include for-width(-tablet) {
        position: static;
        margin-top: rem(20);
        text-align: center;
      }
    }
  }
}
</style>
