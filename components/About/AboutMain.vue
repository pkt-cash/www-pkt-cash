<template>
  <div class="c-about-main">
    <div class="container">
<!--      <h1 class="c-about-main__title">Letter from CJD</h1>-->
      <h2 class="c-about-main__subtitle">{{ $t('about.page_subtitle') }}</h2>
      <p class="c-about-main__text">{{ $t('about.about_main__text_1') }}</p>
      <p class="c-about-main__text">{{ $t('about.about_main__text_2') }}</p>
      <p class="c-about-main__text">{{ $t('about.about_main__text_3') }}</p>
      <span class="c-about-main__quote">{{ $t('about.about_main__quote_1') }}</span>
      <p class="c-about-main__text">{{ $t('about.about_main__text_4') }}</p>
      <p class="c-about-main__text">{{ $t('about.about_main__text_5') }}</p>
      <span class="c-about-main__quote">{{ $t('about.about_main__quote_2') }}</span>
      <p class="c-about-main__text">{{ $t('about.about_main__text_6') }}</p>
      <p class="c-about-main__text">{{ $t('about.about_main__text_7') }}</p>
      <p class="c-about-main__text">{{ $t('about.about_main__text_8') }}</p>
      <span class="c-about-main__quote">
       {{ $t('about.about_main__quote_3') }}
      </span>
      <p class="c-about-main__text">{{ $t('about.about_main__text_9') }}</p>
      <p class="c-about-main__text">{{ $t('about.about_main__text_10') }}</p>
      <figure class="c-about-main__signature">
        <img src="/img/signature.png" :alt="this.$t('about.signature')" />
        <figcaption class="c-about-main__signature-name">{{ $t('about.caleb_name') }}</figcaption>
      </figure>
      <div class="c-about-main__btns">
        <nuxt-link class="c-about-main__btns-link blue-btn-arrow" to="/roadmap">
          <span>{{ $t("about.about_main__btn") }}</span>
        </nuxt-link>
        <nuxt-link class="c-about-main__btns-link blue-btn-arrow" to="/origin-story">
          <span>{{ $t("origin_story.simple_header_title") }}</span>
        </nuxt-link>
      </div>
      <!-- <div class="c-about-main__separator"></div>
      <span class="c-about-main__involved">{{ $t("about.klaviyo_form_heading") }}</span>
      <div class="c-about-main__email">
        <div class="klaviyo-form-UX7hyQ"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMain",
};
</script>

<style lang="scss">
.c-about-main {
  padding: rem(93) rem(25) rem(197);
  @include for-width(-tablet) {
    padding: rem(30) rem(25) rem(55);
  }

  & .container {
    width: 100%;
    max-width: rem(1217);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    color: $dark_blue;
    text-align: center;
    margin-bottom: rem(40);
    @include for-width(-tablet) {
      margin-bottom: rem(20);
    }
  }

  &__subtitle {
    @extend %h2-title;
    color: $dark_blue;
    margin-bottom: rem(61);
    @include for-width(-tablet) {
      margin-bottom: rem(30);
    }
  }

  &__text {
    @extend %text-main;
    color: $dark_blue;
    margin-bottom: rem(20);
    @include for-width(-tablet) {
      margin-bottom: rem(10);
    }
  }

  &__quote {
    display: block;
    @extend %italic-quote;
    color: $dark_blue;
    margin: rem(60) auto;
    text-align: center;
    @include for-width(-tablet) {
      margin: rem(40) auto;
    }
    @include for-width(+ tablet) {
      max-width: 85%;
    }
  }

  &__signature {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: rem(40) rem(200) rem(66) auto;
    @include for-width(-tablet) {
      margin: rem(23) rem(0) rem(40) auto;
    }

    @include for-width(-tablet) {
      & img {
        height: rem(60);
      }
    }

    &-name {
      @include font_sizes(14, 16);
      color: $dark_blue;
      margin-top: rem(10);
    }
  }

  &__btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: rem(100);
    @include for-width(-tablet) {
      flex-direction: column;
      margin-bottom: rem(40);
    }
    &-link {
      @include for-width(-tablet) {
        display: block;
        width: 100%;
        max-width: rem(223);
      }
    }
    &-link:not(:last-child) {
      @include for-width(-tablet) {
        margin-bottom: rem(20);
      }
      @include for-width(+ tablet) {
        margin-right: rem(40);
      }
    }
  }
  &__separator {
    background-color: rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: rem(285);
    height: rem(1);
    margin: rem(60) auto rem(60);
    @include for-width(-tablet) {
      margin-bottom: rem(40);
    }
  }

  &__involved {
    @extend %h2-title;
    color: $dark_blue;
    display: inline-block;
    width: 100%;
    text-align: center;
    @include for-width(-tablet) {
      font-size: rem(33);
    }
  }

  &__email {
    display: block;
    position: relative;
    margin: rem(30) auto 0;
    max-width: rem(600);
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
    @include for-width(-tablet) {
      .tBOqQ.tBOqQ {
        position: static;
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
     /*{}*/
    @include for-width(-tablet) {
      display: flex;
      flex-direction: column;
      margin-top: rem(30);
    }

    &-input {
      width: 100%;
      background-color: $dark_blue;
      padding: rem(17) rem(34);
      @include font_sizes(14, 19);
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
      height: 100%;
      @include for-width(-tablet) {
        position: static;
        margin-top: rem(20);
        text-align: center;
      }
    }
  }
  &__email .klaviyo-form-UMUDtg  {
      @include for-width(-tablet) {
          width: 100%;
      }
      & .Row__FormRow-sc-1avh9u7-1 {
        @include for-width(-tablet) {
          display: block;
        }
        & .FormComponent__StyledFormComponentWrapper-sc-1gg8fea-0 {
          @include for-width(-tablet) {
            padding:0;
            width: 100%;
          }
          & .needsclick input.TextInput__FormStyledTextInput-sc-1ydur12-0 {
            font-family: Poppins-Regular,sans-serif;
            background: #fff;
            border-color: #191944;
            padding: 1.0625rem 2.125rem;
            @extend %text-main;
            line-height: 1.5rem;
            color: #191944;
            border-radius: 3rem;
            height:58px;
            margin-right:15px;
            @include for-width(-tablet) {
                margin-right:0;
              }
            &::-webkit-input-placeholder {color: #191944;@extend %text-main;font-family: Poppins-Regular,sans-serif;}
            &::-ms-input-placeholder {color: #191944;@extend %text-main;font-family: Poppins-Regular,sans-serif;}
            &:-ms-input-placeholder {color: #191944;@extend %text-main;font-family: Poppins-Regular,sans-serif;}
            &::-moz-placeholder {color: #191944;@extend %text-main;font-family: Poppins-Regular,sans-serif;}
            &:-moz-placeholder {color: #191944;@extend %text-main;font-family: Poppins-Regular,sans-serif;}
            &::placeholder {color: #191944;@extend %text-main;font-family: Poppins-Regular,sans-serif;}
          }
          .ValidationMessage__Container-ja3t6w-0 {
            display:none;
          }
          button.Button__FormStyledButton-sc-1of1qh3-0.gAmTGw {
            font-family: Poppins-Regular,sans-serif;
            background: #3cadef;
            padding: 1.0625rem 2.125rem;
            @extend %text-main;
            line-height: 1.5rem;
            border-radius: 3rem;
            @include for-width(-tablet) {
                width: 100%;
                margin-top: 15px;
            }
          }
        }
      }
  }
}
</style>
