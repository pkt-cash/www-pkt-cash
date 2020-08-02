<template>
  <div class="c-advantage">
    <template v-for="item of list">
      <div
        class="c-advantage__item"
        :class="{ 'c-advantage__item-blue': item.colorBlue }"
        :key="item.title"
        :style="{ 'background-image': 'url(' + item.img + ')' }"
      >
        <div class="container" :class="{ 'container-blue': item.colorBlue }">
          <div class="c-advantage__wrap" :class="{ 'c-advantage__wrap-right': item.aligh }">
            <h1 class="c-advantage__title">
              <svg
                v-if="item.textSVG"
                width="40"
                height="38"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 11.0232H40V31.0456C40 34.3593 37.3137 37.0456 34 37.0456H14V11.0232Z"
                  fill="#98E0F9"
                />
                <rect x="1" y="10.0223" width="9" height="9.00774" fill="#98E0F9" />
                <rect y="0.0137329" width="6" height="6.00516" fill="#98E0F9" />
                <rect x="15" y="1.01373" width="6" height="6.00516" fill="#98E0F9" />
                <rect x="9" y="2.01544" width="3" height="3.00258" fill="#98E0F9" />
              </svg>
              {{ item.title }}
            </h1>
            <h2 class="c-advantage__sub">{{ item.subTitle }}</h2>
            <p class="c-advantage__text">{{ item.text }}</p>
            <nuxt-link to="/" class="c-advantage__link blue-btn-arrow" v-if="item.btnText">
              <span>{{ item.btnText }}</span>
            </nuxt-link>
            <nuxt-link to="/" class="c-advantage__link-more blue-btn-arrow" v-if="item.learnMore">
              <span>Learn More</span>
            </nuxt-link>
          </div>
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
    padding: rem(127) rem(25) rem(74);
    @include for-width(-small-lg) {
      padding: rem(29) rem(25) rem(40);
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: $light_blue;
    @include for-width(-small-lg) {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top center;
    }
  }

  &__item-blue {
    color: $light_blue;
    background-color: $dark_blue;
  }

  .container {
    width: 100%;
    max-width: rem(1075);
    margin: 0 auto;
  }

  .container-blue {
    max-width: rem(1248);
  }

  @include for-width(+ tablet) {
    &__wrap {
      padding-right: 50%;
    }
    &__wrap-right {
      padding-left: 50%;
      padding-right: 0;
    }
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(40);
    @include for-width(-tablet) {
      margin-bottom: rem(21);
    }
    position: relative;

    & svg {
      position: absolute;
      top: 15%;
      left: rem(-10);
      transform: translateX(-100%);
      @include for-width(-tablet) {
        display: none;
      }
    }
  }

  &__sub {
    @extend %h2-title;
  }

  &__text {
    @extend %regular;
    margin-top: rem(20);
    @include for-width(-tablet) {
      margin-top: 92vw;
    }
    @include font_sizes(25, 40);
    @include for-width(-tablet-lg) {
      @include font_sizes(20, 32);
    }
    @include for-width(-tablet) {
      @include font_sizes(17, 27);
    }
  }

  &__link {
    margin-top: rem(50);
    @include for-width(-small-lg) {
      margin-top: rem(40);
    }

    &-more {
      background-color: transparent !important;
      border: 1px solid $light_blue;
      @include for-width(+ tablet) {
        margin-left: rem(18);
      }
      @include for-width(-tablet) {
        margin-top: rem(18);
      }
    }
  }
}
</style>