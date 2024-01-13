<template>
  <div class="v-about">
    <section class="v-about-section-header">
      <HeaderInternal
        :title="this.$t('letter_cjd.header_title')" 
        :subtitle="this.$t('letter_cjd.header_subtitle')" 
        :button_1="this.$t('header.origin_story')" 
        :button_1_link="localePath('origin-story')"
        />
    </section>
    <section class="v-about-section">
      <div class="container_narrow">
        <h2 class="v-about-section-title_h2">{{ $t("letter_cjd.main_heading_1") }}<br />{{ $t("letter_cjd.main_heading_2") }}</h2>
        <hr />
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_1") }}</p>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_2") }}</p>
        <h3 class="v-about-section-quote">“{{ $t("letter_cjd.main_text_3") }}”</h3>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_4") }}</p>
        <h3 class="v-about-section-quote">“{{ $t("letter_cjd.main_text_5") }}”</h3>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_6") }}</p>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_7") }}</p>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_8") }}</p>
        <h3 class="v-about-section-quote">"{{ $t("letter_cjd.main_text_9") }}"</h3>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_10") }}</p>
        <p class="v-about-section-text">{{ $t("letter_cjd.main_text_11") }}</p>
        <img src="/img/letter-signature.svg" alt="Caleb James DeLisle" class="v-about-section-signature-image" />
        <p class="v-about-section-signature">{{ $t("letter_cjd.main_text_12") }}</p>
      </div>
      <div class="v-about-section__links">
        <div class="container">
          <nuxt-link :to="localePath('build') + '#roadmap'" class="btn_blue_new button_new"><span>{{ $t("build.roadmap_title") }}</span></nuxt-link>
          <nuxt-link :to="localePath('origin-story')" class="btn_blue_new button_new"><span>{{ $t("header.origin_story") }}</span></nuxt-link>
        </div>
      </div>
    </section>
    <section class="v-about-section_involved">
      <div class="container">
        <h2 class="v-about-section-title_h2">{{ $t("letter_cjd.heading_last") }}</h2>
        <nuxt-link :to="localePath('resources')" class="btn_blue_new button_new"><span>{{ $t("home.join_community_title") }}</span></nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
export default {
  components: {
    HeaderInternal,
  },
  head() {
    return {
      title: "Letter from CJD - PKT",
      meta: [{ hid: "description", name: "description", content: "This is a letter about the inspiration for PKT, written by PKT lead developer and creator of cjdns, Caleb James DeLisle." }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>

<style lang="scss">
.v-about {
  &-section-header {
    & .c-internal-header {
      height:125vh;
      @include for-width(-tablet) {
        height:100vh;
      }
      @include for-width(-small-lg) {
        height:auto;
      }
      &__title {
        @include for-width(-small-lg) {
          font-size: rem(36);
          line-height: rem(42);
          margin-bottom:rem(25);
        }
      }
      &__sub-title {
        max-width:55%;
        margin:rem(15) auto 0;
        text-transform:initial;
        @include for-width(+desktop-xl) {
          max-width:65%;
        }
        @include for-width(+desktop-er) {
          max-width:60%;
        }
        @include for-width(-desktop-med) {
          max-width:65%;
        }
        @include for-width(-laptop) {
          max-width:60%;
        }
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(24);
          max-width:80%;
        }
      }
      &__links {
        @include for-width(-small-lg) {
          justify-content: center;
          margin:rem(45) 0 0;
        }
        & .button_new {
          @include for-width(-small-lg) {
            width:auto;
            padding:rem(10) rem(25);
          }
        }
      }
      & .container {
        padding-bottom:25vh;
        @include for-width(-tablet) {
          padding-bottom:15vh;
        }
        @include for-width(-small-lg) {
          margin:0;
          padding:10vw 0 40vw;
        }
      }
      & #stars {
        top:25vh;
        @include for-width(-tablet) {
          top:15vh;
        }
        @include for-width(-small-lg) {
          top:5vh;
        }
      }
    }
  }
  &-section {
    & .container_narrow {
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      background-color:$light_bg;
      max-width:rem(870);
      padding:rem(75) rem(135);
      width:90%;
      margin: auto;
      position: relative;
      margin-top:-40vh;
      @include for-width(-tablet) {
        margin-top:-25vh;
      }
      @include for-width(-small-lg) {
        margin-top:-35vw;
        padding:rem(35) rem(20) rem(65);
        width:calc(100% - 40px);
      }
      &::before {
        content:'';
        background:url(/img/letter-logo.jpg);
        background-repeat:no-repeat;
        background-size:contain;
        background-position:center;
        display:block;
        width:rem(150);
        height:rem(60);
        position:absolute;
        top:0;
        right:rem(60);
        @include for-width(-small-lg) {
          width:rem(55);
          height:rem(25);
          right:rem(24);
          top:-2px;
        }
      }
    }
    &-title_h2 {
      @extend %heading-gradient-dark;
      @extend %heading_internal;
      @extend %t-center;
      margin:0;
      @include for-width(-small-lg) {
        font-size: rem(36);
        line-height: rem(42);
      }
    }
    & hr {
      height:1px;
      background:$light_grey_new;
      width:rem(235);
      max-width:60%;
      margin:rem(45) auto rem(55);
      @include for-width(-small-lg) {
        width:rem(90);
        margin:rem(20) auto;
      }
    }
    &-text {
      @extend %pn;
      @extend %t-center;
      margin-bottom:rem(25);
    }
    &-quote {
      @extend %subheading;
      @extend %t-center;
      text-transform:initial;
      margin-bottom:rem(45);
      padding-top:rem(20);
      @include for-width(-small-lg) {
        font-size: rem(26);
        line-height: rem(36);
        margin-bottom:rem(25);
        padding-top:0;
        font-family: "Poppins-Medium", sans-serif;
      }
    }
    &-signature-image {
      max-width:rem(200);
      display:block;
      margin-right:0;
      margin-left:auto;
      margin-top:rem(50);
      @include for-width(-small-lg) {
        text-align:center;
        margin:rem(40) auto 0;
        max-width:rem(100);
      }
    }
    &-signature {
      @extend %pn;
      @extend %t-right;
      @include for-width(-small-lg) {
        text-align:center;
      }
    }
    &__links {
      padding:rem(100) 0;
      @include for-width(-desktop-medium) {
        padding:rem(75) 0;
      }
      @include for-width(-small-lg) {
        padding:rem(50) 0;
      }
      & .container {
        @extend %df;
        @extend %aic;
        @extend %jcc;
      }
      & .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display:inline-block;
        padding:rem(15) rem(60) rem(14);
        width:auto;
        margin:0 rem(15);
        @include for-width(-small-lg) {
          padding:rem(10) rem(25);
        }
      }
    }
    &_involved {
      padding:rem(75) 0 rem(90);
      background-color:$light_bg;
      @include for-width(-small-lg) {
        padding:rem(45) 0 rem(60);
      }
      & .container {
        @extend %container_new;
        @extend %t-center;
        @include for-width(-tablet) {
          max-width:100%;
          width:100%;
          padding:0 rem(25);
        }
        @include for-width(-small-lg) {
          padding:0 rem(20);
        }
      }
      & .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display:inline-block;
        padding:rem(15) rem(60) rem(14);
        width:auto;
        margin:rem(45) 0 0;
        @include for-width(-small-lg) {
          padding:rem(10) rem(35);
          margin-top:rem(25);
        }
      }
    }
  }
}
</style>
