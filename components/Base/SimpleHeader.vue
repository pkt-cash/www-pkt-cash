<template>
  <div class="c-simple-header" :class="{ is_road: is_road }" :style="{ 'background-image': 'url(' + bg_image + ')'}">
    <div class="container">
      <h1 class="c-simple-header__title">{{ title }}</h1>
      <h2 class="c-simple-header__sub-title" v-if="subtitle">{{ subtitle }}</h2>
      <p class="c-simple-header__text" v-if="text">{{ text }}</p>
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
    mobile_img: String,
    is_road: Boolean,
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
.c-simple-header {
  padding: rem(208) 0 rem(171);
  min-height: 30vw;
  @include for-width(-small-lg) {
    height: rem(406);
    padding: rem(100) 0 rem(28);
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &.is_road {
      justify-content: center;
    }
  }
  color: $light_blue;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & .container {
    width: 100%;
    max-width: rem(1118);
    margin: 0 auto;
    padding: 0 rem(400) 0 rem(25);
    @include for-width(-desktop-med) {
      padding: 0 rem(25);
    }
  }

  &__title {
    @extend %h1-title;
    @include for-width(-tablet) {
      font-size: rem(33);
    }
  }

  &__sub-title {
    @extend %h2-title;
    margin-top: rem(41);
    @include for-width(-small-lg) {
      margin-top: rem(14);
    }
    @include for-width(-tablet) {
      font-size: rem(16);
    }
  }

  &__text {
    @extend %text-main;
    margin-top: rem(41);
    @include for-width(-small-lg) {
      margin-top: rem(14);
    }
  }
}
</style>
