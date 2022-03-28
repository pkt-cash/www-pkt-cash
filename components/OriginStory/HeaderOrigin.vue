<template>
  <div class="c-origin-header">
    <div class="container">
      <h1 class="c-origin-header__title">{{ title }}</h1>
      <h2 class="c-origin-header__sub-title" v-if="subtitle">{{ subtitle }}</h2>
    </div>
    <Aerials />
    <img src="/img/origin-aerials-mobile.png" alt="" class="c-origin-header_mobile" />
  </div>
</template>

<script>
import Aerials from "~/components/OriginStory/Aerials";
export default {
  name: "HeaderOrigin",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style lang="scss">
.c-origin-header {
  background-color:$dark_blue_new;
  height:100vh;
  @extend %df;
	@extend %jcc;
  @extend %aic;
  position:relative;
  @include for-width(-tablet) {
    padding:rem(250) 0 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @include for-width(-small-lg) {
    padding:rem(125) 0 0;
  }
  & .container {
    @extend %container_new;
    @extend %t-left;
    z-index:1;
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25);
      text-align:center;
      margin:0 auto;
    }
    @include for-width(-small-lg) {
      padding:0 rem(20);
    }
  }
  &__title {
    @extend %heading-xlarge;
    @extend %heading-gradient-light;
    @include for-width(-small-lg) {
      font-size: rem(44);
      line-height: rem(60);
      margin-bottom:rem(15);
    }
  }
  &__sub-title {
		@extend %subheading;
		margin:0 0 rem(20);
		color: $white;
    @extend %semibold;
	} 
  & svg {
    position:absolute;
    right: 0;
    z-index:0;
    @include for-width(-desktop-medium) {
      max-width:rem(475);
    }
    @include for-width(-tablet) {
      transform: rotate(90deg);
      bottom:0;
      left:0;
      margin:0 auto;
      width:100%;
      max-width:100%;
    }
    @include for-width(-small-lg) {
      display:none;
    }
  }
  &_mobile {
    display:none;
    @include for-width(-small-lg) {
      display:block;
      position:absolute;
      bottom:0;
      height:auto;
      width:100%;
    }
  }
}
</style>
