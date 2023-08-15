<template>
  <div class="c-index-tech">
    <Sattelite/>
    <div class="container">
      <h1 class="c-index-tech__title">{{ $t('home.tech_title') }}</h1>
      <p class="c-index-tech__text">{{ $t('home.tech_descr_1') }} <a href="https://github.com/cjdelisle/cjdns" target="_blank">cjdns</a> {{ $t('home.tech_descr_2') }}</p>
      <div class="c-index-tech_technologies">
        <div class="c-index-tech_technologies_single">
          <h3 class="c-index-tech_technologies_single__title">{{ $t('home.tech_single_title_1') }}</h3>
          <p class="c-index-tech_technologies_single__description">{{ $t('home.tech_single_descr_1') }}</p>
        </div>
        <div class="c-index-tech_technologies_single">
          <h3 class="c-index-tech_technologies_single__title">{{ $t('home.tech_single_title_2') }}</h3>
          <p class="c-index-tech_technologies_single__description">{{ $t('home.tech_single_descr_2') }}</p>
        </div>
        <div class="c-index-tech_technologies_single">
          <h3 class="c-index-tech_technologies_single__title">{{ $t('home.tech_single_title_3') }}</h3>
          <p class="c-index-tech_technologies_single__description">{{ $t('home.tech_single_descr_3') }}</p>
        </div>
      </div>
    </div>
    <img src="/img/home-tech-main.svg" alt="" class="c-index-tech_bottom_img" />
  </div>
</template>

<script>
import Sattelite from "~/components/Index/Sattelite";
export default {
  name: "IndexTechnology",
};
</script>

<style lang="scss">
.c-index-tech {
  background-image: url(/img/home-tech-bg.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  padding-top:rem(250);
  position:relative;
  @include for-width(+desktop-lg) {
    padding-top:rem(350);
  }
  @include for-width(-small-lg) {
    background-color:$dark_blue_new;
    padding-top:rem(50);
    padding-bottom:rem(75);
    margin-top:rem(50);
  }
  &::before {
    @include for-width(-small-lg) {
      content:'';
      background-image: url(/img/home-tech-bg.png);
      background-repeat: no-repeat;
      background-position: center top;
      background-size: 100% auto;
      position:absolute;
      width: 100%;
      height: rem(100);
      position: absolute;
      top: -99px;
    }
  }
  &::after {
    @include for-width(-small-lg) {
      content:'';
      background-image: url(/img/home-tech-main.png);
      background-repeat: no-repeat;
      background-position: center top;
      background-size: cover;
      width: 100vw;
      height: 400px;
      display: block;
      position: absolute;
      bottom: 0;
    }
  }
  #sattelite {
    position:absolute;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    @include for-width(+desktop-lg) {
      top: 75px;
    }
    @include for-width(-small-lg) {
      top: -175px;
    }
  }
  & .container {
    @extend %container_new;
    @extend %t-center;
    z-index: 3;
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25);
    }
    @include for-width(-small-lg) {
      padding:0 rem(25);
    }
  }
  &__title {
    @extend %heading-xlarge;
    @extend %heading-gradient-light;
    margin-bottom:rem(25);
    @include for-width(-small-lg) {
      font-size: rem(40);
      line-height: rem(60);
      margin-bottom:rem(15);
    }
  }
  &__text {
    @extend %pn;
    color:$white;
    max-width: 30rem;
    margin: 0 auto;
    @extend %regular;
    & a {
      color: #08A5FC;
      text-decoration:underline;
    }
  }
  &_technologies {
    @extend %df;
		@extend %fw;
		@extend %jcsb;
		padding:rem(100) 0 rem(50);
    background-image: url(/img/home-tech-stars.svg);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    @include for-width(-small-lg) {
      display:block;
      padding:rem(35) rem(25) rem(35);
    }
    &_single {
      width: 25.333%;
			flex: 1 1 auto;
			margin:	0 4%;
      @include for-width(-tablet) {
        width: 29.333%;
        margin:	0 2%;
      }
      @include for-width(-small-lg) {
        width: 100%;
        margin:	0 0 rem(35);
      }
      &__title {
        color:$light_blue_new;
        @extend %semibold;
				@extend %heading-small;
				margin-bottom:rem(15);
      }
      &__description {
        color:$white;
        @extend %pn;
				@extend %light;
      }
    }
  }
  &_bottom_img {
    margin:-33% 0;
    position: relative;
    z-index: 2;
    @include for-width(+desktop-lg) {
      width: 100%;
    }
    @include for-width(-small-lg) {
      display:none;
    }
  }
}
</style>
