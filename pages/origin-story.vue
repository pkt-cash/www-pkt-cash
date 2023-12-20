<template>
  <div class="v-origin">
    <section class="v-origin-header_section">
      <HeaderOrigin 
      :title="this.$t('origin_story.heading_title')" 
      :subtitle="this.$t('origin_story.heading_subtitle')" 
       />
    </section>
    <section class="v-origin-section v-origin-section-first">
      <div class="container">
        <div class="v-origin-section-first_left">
          <CjdnstoPkt />
        </div>
        <div class="v-origin-section-first_right">
          <p class="v-origin-section-first_right_text">{{ $t("origin_story.first_section_text_01") }}:</p>
          <p class="v-origin-section-first_right_text_special first_special">{{ $t("origin_story.first_section_list_item_01") }}</p>
          <p class="v-origin-section-first_right_text_special second_special">{{ $t("origin_story.first_section_list_item_02") }}</p>
          <p class="v-origin-section-first_right_text">{{ $t("origin_story.first_section_text_02") }}</p>
        </div>
      </div>
    </section>
    <section class="v-origin-section v-origin-section-last">
      <div class="container">
        <div class="v-origin-section-last_left">
          <h2 class="v-origin-section-last_left_title">{{ $t("origin_story.compass_title") }}</h2>
          <p class="v-origin-section-last_left_text">{{ $t("origin_story.compass_text_01") }}</p>
          <p class="v-origin-section-last_left_text">{{ $t("origin_story.compass_text_02") }}</p>
          <p class="v-origin-section-last_left_text">{{ $t("origin_story.compass_text_03") }}</p>
          <p class="v-origin-section-last_left_quote">“{{ $t("origin_story.car_quote") }}”</p>
          <p class="v-origin-section-last_left_text">{{ $t("origin_story.car_text") }}</p>
          <div class="v-origin-section-last_left_links">
            <nuxt-link :to="localePath('build') + '#roadmap'" class="btn_blue_new button_new"><span>{{ $t("build.roadmap_title") }}</span></nuxt-link>
            <nuxt-link :to="localePath('letter')" class="btn_blue_new button_new"><span>{{ $t("letter_cjd.header_title") }}</span></nuxt-link>
          </div>
        </div>
        <div class="v-origin-section-last_right">
          <div class="v-origin-section-last_right_inner">
            <img src="/img/origin-board.png" alt="PKT board" class="v-origin-section-last_right_inner_desktop" />
          </div>
        </div>
      </div>
      <img src="/img/origin-board-mobile.png" alt="PKT board" class="v-origin-section-last_mobile" />
    </section>
  </div>
</template>

<script>
import HeaderOrigin from "~/components/OriginStory/HeaderOrigin";
import CjdnstoPkt from "~/components/OriginStory/CjdnstoPkt";
export default {
  components: {
    HeaderOrigin,
  },
  head() {
    return {
      title: "Origin Story - PKT",
      meta: [{ hid: "description", name: "description", content: "Cjdns and humble beginnings" }],
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
.v-origin {
  &-section {
    & .container {
      @extend %container_new;
      padding:rem(75) 0;
      @extend %df;
      @extend %jcsb;
    }
  }
  &-section-first {
    background:$light_bg;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    margin-bottom:rem(15);
    @include for-width(-small-lg) {
      box-shadow: none;
    }
    & .container {
      @extend %aic;
      max-width:90%;
      @include for-width(-small-lg) {
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
        padding:rem(25) rem(10) rem(50);
      }
    }
    &_left {
      width:45%;
      text-align:center;
      @include for-width(-small-lg) {
        order:2;
        width:100%;
      }
      & svg {
        width:rem(350);
        @include for-width(-small-lg) {
          width:55%;
        }
      }
    }
    &_right {
      width:55%;
      padding-left:rem(75);
      @include for-width(-small-lg) {
        width:100%;
        padding-left:0;
      }
      &_text {
        @extend %pn;
        margin-bottom:rem(25);
        @include for-width(-small-lg) {
          text-align:center;
        }
      }
      &_text_special {
        @extend %pn;
        background: $dark_blue_new;
        border-radius: 15px;
        padding:rem(20) rem(45) rem(20) rem(55);
        color:$white;
        height:auto;
        min-height:rem(100);
        @extend %aic;
        @extend %df;
        position:relative;
        @include for-width(-small-lg) {
          padding:rem(20) rem(25) rem(20) rem(55);
          margin-left:rem(15);
        }
        &:before {
          display: block;
          width: rem(75);
          height:rem(75);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          position:absolute;
          left:-35px;
        }
      }
      & .first_special {
        &:before {
          content:'';
          background-image:url(/img/origin-special-first.png);
        }
      }
      & .second_special {
        &:before {
          content:'';
          background-image:url(/img/origin-special-second.png);
        }
      }
    }
  }
  &-section-last {
    background:$white;
    & .container {
      @extend %fw;
      @include for-width(-small-lg) {
        display:block;
        padding-top:rem(25);
        padding-bottom:0;
      }
    }
    &_left {
      max-width:55%;
      padding-right:rem(50);
      @include for-width(-small-lg) {
        max-width:100%;
        padding-right:0;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        display: none;
      }
      &_title {
        @extend %heading-gradient-dark;
        @extend %heading_internal;
        margin-bottom:rem(35);
        text-transform:initial;
        @include for-width(-small-lg) {
          font-size: rem(36);
          line-height:rem(42);
          margin-bottom:rem(25);
        }
      }
      &_text {
        @extend %pn;
        margin-bottom:rem(25);
        padding-right:rem(50);
        @include for-width(-tablet-lg) {
          padding-right:0;
        }
        @include for-width(-small-lg) {
          padding-right:rem(20);
          font-size: rem(16);
          line-height: rem(26);
        }
      }
      &_quote {
        @extend %subheading;
        margin:rem(35) 0;
        text-transform:initial;
        padding-right:rem(50);
        @include for-width(-tablet-lg) {
          padding-right:0;
        }
        @include for-width(-small-lg) {
          padding-right:rem(20);
        }
      }
      &_links {
        margin-top:rem(35);
        padding-right:rem(50);
        @extend %df;
        @extend %jcs;
        @extend %aic;
        @include for-width(-tablet-lg) {
          padding-right:0;
        }
        @include for-width(-small-lg) {
          justify-content: space-between;
        }
        & .button_new {
          @extend %btn-new;
          @extend %btn_blue_new;
          display:inline-block;
          padding:rem(15) rem(40) rem(14);
          @include for-width(-small-lg) {
            padding:rem(10) rem(25);
          }
          &:first-child {
            margin-right:rem(50);
            @include for-width(-small-lg) {
              margin-right:0;
            }
          }
        }
      }
    }
    &_right {
      max-width:45%;
      position:relative;
      @include for-width(-small-lg) {
        max-width:100%;
        padding:0;
      }
      &_inner {
        padding:0 0 0 rem(50);
        @include for-width(-small-lg) {
          &_desktop {
            display:none;
          }
        }
      }
    }
    &_mobile {
      display:none;
      @include for-width(-small-lg) {
        display:block;
        width: 100%;
      }
    }
  }
}
</style>
