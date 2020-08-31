<template>
  <div class="c-big-header" :class="{ 'net-mobile-bg': is_mobile && is_network_st, 'is_wallet': is_wallet, is_wallet_setup: is_wallet_setup }"
       :style="{ 'background-image': 'url(' + bg_image + ')'}">
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
      <template v-if="is_anchor">
        <a :href="btnLink" class="c-big-header__link blue-btn-arrow"
          v-if="btn"
        >{{ btn }}</a>
      </template>
      <template v-else>
        <nuxt-link
          class="c-big-header__link blue-btn-arrow"
          :to="{ path: btnLink }"
          v-if="btn"
        >{{ btn }}</nuxt-link>
      </template>

      <p class="c-big-header__sometext" v-if="sometext">{{ sometext }}</p>
      <div class="c-big-header__email" v-if="email">
        <div class="klaviyo-form-UMUDtg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigHeader",
  props: {
    is_anchor: Boolean,
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
    mobile_img: String,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 1024 : false;
    },
    bg_image() {
      return !!this.mobile_img && this.is_mobile ? this.mobile_img : this.bg;
    }
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
    @include for-width(-tablet) {
      line-height: rem(36);
    }
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
    @include for-width(-tablet) {
      display: flex !important;
      width: rem(223);
      padding-right: 0;
      padding-left: 0;
      min-width: auto;
      margin: rem(50) auto 0;
    }
  }

  &__email {
    display: block;
    position: relative;
    margin: rem(50) auto 0 0;
    max-width: rem(490);
    @include for-width(-tablet) {
      display: flex;
      flex-direction: column;
    }
    .tBOqQ.tBOqQ {
      position: absolute;
      top: 0;
      border-radius: 3rem;
      right: -6px;
    }
    .klaviyo-form-UMUDtg {

    }
    .bQDdTc.bQDdTc {

    }
    .jcyZHs.jcyZHs.jcyZHs.jcyZHs.jcyZHs.jcyZHs,
    .hEPcWW.hEPcWW.hEPcWW.hEPcWW.hEPcWW.hEPcWW,
    .bBQWYX.bBQWYX {
      color: $white !important;
      border-radius: 3rem;
      overflow: hidden;
    }
    .hEPcWW.hEPcWW.hEPcWW.hEPcWW.hEPcWW.hEPcWW:focus,
    .jcyZHs.jcyZHs.jcyZHs.jcyZHs.jcyZHs.jcyZHs:focus {
      color: $white !important;
      border-radius: 3rem;
      overflow: hidden;
    }
    .kl-private-quill-wrapper-Lkqws1.kl-private-quill-wrapper-Lkqws1.kl-private-quill-wrapper-Lkqws1 .ql-editor strong,
    .kl-private-quill-wrapper-Lkqws1.kl-private-quill-wrapper-Lkqws1.kl-private-quill-wrapper-Lkqws1 .ql-editor span {
      color: $white !important;
    }
    @include for-width(-tablet) {
      .tBOqQ.tBOqQ {
        position: static;
        padding-left: 10px;
        right: 0;
      }
      .bBQWYX.bBQWYX {
        overflow: visible;
        border-radius: 0;
      }
      .kgtZbf.kgtZbf {
        flex-direction: column;
      }
      .gXrOPj.gXrOPj.gXrOPj.gXrOPj.gXrOPj.gXrOPj {
        width: 100%;
      }
    }
    &-btn {
      height: rem(54);
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
      &__sub-title {
        @include for-width(-tablet) {
          @include font_sizes(25, 35);
        }
      }
      &__text {
        max-width: rem(340);
        @include for-width(-tablet) {
          margin-top: rem(30);
        }
      }
      &__list {
        max-width: rem(320);
        &-item {
          @include for-width(-tablet) {
            &:after {
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
      &__sometext {
      }
    }
  }
}
</style>
