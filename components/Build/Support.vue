<template>
  <div class="c-roadmap-support">
    <div class="container">
      <div class="c-roadmap-support_left">
        <h1 class="c-roadmap-support__title">{{ $t("build.support_heading") }}</h1>
        <p class="c-roadmap-support__text_large">{{ $t("build.support_text_01") }}</p>
        <p class="c-roadmap-support__text">{{ $t("build.support_text_02") }}</p>
        <p class="c-roadmap-support__text">{{ $t("build.support_text_03") }}</p>
        <div class="c-roadmap-support__btns">
          <nuxt-link class="btn_blue_new button_new" to="/network-steward">
            <span>{{ $t("header.network_st") }}</span>
          </nuxt-link>
          <nuxt-link class="btn_blue_new button_new" to="/community">
            <span>{{ $t("home.join_community_title") }}</span>
          </nuxt-link>
        </div>
      </div>
      <div class="c-roadmap-support_right">
          <img src="img/build-support.svg" alt="Support" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapSupport",
};
</script>

<style lang="scss">
.c-roadmap-support {
  padding: rem(100) rem(25);
  @include for-width(-tablet) {
    padding: rem(75) rem(25);
  }
  @include for-width(-small-lg) {
    padding: rem(50) rem(20);
  }
  .container {
    @extend %container_new;
    @extend %df;
		@extend %aib;
		@extend %jcsb;
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25);
      display:block;
    }
    @include for-width(-small-lg) {
      padding:0;
    }
  }
  &_left {
    @extend %t-left;
		width:50%;
		padding-right:rem(55);
    @include for-width(-laptop) {
      width:60%;
    }
    @include for-width(-tablet) {
      width:100%;
		  padding-right:0;
    }
  }
  &__title {
    @extend %heading-large;
    @extend %heading-gradient-dark;
    text-transform:initial;
    margin-bottom: rem(30);
    @include for-width(-tablet) {
      font-size: rem(50);
      line-height: rem(70);
    }
  }
  &__text_large {
    @extend %heading-super-small;
    margin-bottom:rem(25);
  }
  &__text {
    @extend %pn;
  }
  &_right {
			@include for-width(-tablet) {
				display:none;
			}
			img {
				width:rem(375);
        margin-bottom:rem(100);
        @include for-width(-laptop) {
          width:rem(325);
        }
			}
		}
  &__btns {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    @extend %t-left;
    margin-top:rem(50);
    @include for-width(-tablet) {
      justify-content: flex-start;
    }
    @include for-width(-small-lg) {
      justify-content: space-between;
    }
    .button_new {
      display: inline-block;
      margin: 0;
      @extend %btn-new;
      @extend %btn_blue_new;
      @include for-width(-tablet) {
        margin-right: rem(25);
      }
      @include for-width(-small-lg) {
        margin:0 auto 0;
        padding:rem(10) rem(25);
      }
    }
  }
}
</style>
