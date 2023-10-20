<template>
  <div class="v-wpkt">
    <section class="v-header-section">
      <HeaderInternal 
      title="WPKT" 
      :subtitle="this.$t('wpkt.header_subtitle')" 
      :text="this.$t('wpkt.header_text_1')" 
      :text_2="this.$t('wpkt.header_text_2')"
      :button_1="this.$t('wpkt.header_button')" 
      button_1_link="https://pancakeswap.finance/info/token/0x1c25222994531c4ac35e4d94bbf7552c9aa92e32" />
    </section>
    <section class="v-wpkt-section v-wpkt-section__leveraging">
      <div class="container">
        <h2 class="v-wpkt-section__title_small">{{ $t("wpkt.leveraging_title") }}</h2>
        <p class="v-wpkt-section__text">{{ $t("wpkt.leveraging_text") }}</p>
        <a href="https://odapp.io/" target="_blank" class="v-wpkt-section__button"><span>{{ $t("wpkt.leveraging_link") }}</span></a>
      </div>
    </section>
    <section class="v-wpkt-section v-wpkt-section__buy">
      <div class="container">
        <h2 class="v-wpkt-section__title">{{ $t("wpkt.buy_title") }}</h2>
        <img src="/img/wpkt-arrow.svg" width="40" height="44" alt="icon-arrow" class="v-wpkt-section__arrow" />
        <p class="v-wpkt-section__step"><span>{{ $t("wpkt.buy_step_1_title") }}</span></p>
        <h4 class="v-wpkt-section__subtitle">{{ $t("wpkt.buy_step_1_subtitle") }}</h4>
        <p class="v-wpkt-section__text">{{ $t("wpkt.buy_step_1_text") }}</p>
        <ol class="v-wpkt-section__list">
          <li>{{ $t("wpkt.buy_step_1_list_1") }}</li>
          <li>{{ $t("wpkt.buy_step_1_list_2") }}</li>
          <li>{{ $t("wpkt.buy_step_1_list_3") }}</li>
        </ol>
        <img src="/img/wpkt-step-1.svg" alt="Create Your MetaMask Wallet" class="v-wpkt-section__screen" width="800" height="440" />
        <p class="v-wpkt-section__step"><span>{{ $t("wpkt.buy_step_2_title") }}</span></p>
        <h4 class="v-wpkt-section__subtitle">{{ $t("wpkt.buy_step_2_subtitle") }}</h4>
        <p class="v-wpkt-section__text">{{ $t("wpkt.buy_step_2_text_1") }}</p>
        <img src="/img/wpkt-step-2-1.svg" alt="Add Binance Smart Chain" class="v-wpkt-section__screen" width="580" height="125" />
        <p class="v-wpkt-section__text">{{ $t("wpkt.buy_step_2_text_2") }}</p>
        <img src="/img/wpkt-step-2-2.svg" alt="Scroll down until you find Custom RPC" class="v-wpkt-section__screen" width="550" height="110" />
        <p class="v-wpkt-section__text">{{ $t("wpkt.buy_step_2_text_3") }}</p>
        <p class="v-wpkt-section__supersmall">{{ $t("wpkt.buy_step_2_text_4") }}</p>
        <ul class="v-wpkt-section__list_regular">
          <li><strong>{{ $t("wpkt.buy_step_2_list_1_1") }}:</strong> {{ $t("wpkt.buy_step_2_list_1_2") }}</li>
          <li><strong>{{ $t("wpkt.buy_step_2_list_2") }}:</strong> https://bsc-dataseed1.binance.org/ or https://bsc-dataseed2.binance.org/</li>
          <li><strong>{{ $t("wpkt.buy_step_2_list_3_1") }}:</strong> {{ $t("wpkt.buy_step_2_list_3_2") }}</li>
          <li><strong>{{ $t("wpkt.buy_step_2_list_4_1") }}:</strong> {{ $t("wpkt.buy_step_2_list_4_2") }}</li>
          <li><strong>{{ $t("wpkt.buy_step_2_list_5") }}:</strong> https://bscscan.com/</li>
        </ul>
        <img src="/img/wpkt-step-2-3.svg" alt="Enter in the following details" class="v-wpkt-section__screen" width="360" height="595" />
        <p class="v-wpkt-section__step"><span>{{ $t("wpkt.buy_step_3_title") }}</span></p>
        <h4 class="v-wpkt-section__subtitle">{{ $t("wpkt.buy_step_3_subtitle") }}</h4>
        <p class="v-wpkt-section__text v-wpkt-section__text_long">{{ $t("wpkt.buy_step_3_text") }}</p>
        <img src="/img/wpkt-step-3.svg" alt="Purchase BNB" class="v-wpkt-section__screen" width="825" height="95" />
        <p class="v-wpkt-section__step"><span>{{ $t("wpkt.buy_step_4_title") }}</span></p>
        <h4 class="v-wpkt-section__subtitle">{{ $t("wpkt.buy_step_4_subtitle") }}</h4>
        <p class="v-wpkt-section__text v-wpkt-section__text_long">{{ $t("wpkt.buy_step_4_text_1") }}</p>
        <p class="v-wpkt-section__text v-wpkt-section__text_long">{{ $t("wpkt.buy_step_4_text_2") }}</p>
        <img src="/img/wpkt-step-4-1.svg" alt="Purchase wPKT on PancakeSwap" class="v-wpkt-section__screen" width="770" height="110" />
        <p class="v-wpkt-section__text v-wpkt-section__text_long">{{ $t("wpkt.buy_step_4_text_3") }}</p>
        <img src="/img/wpkt-step-4-2.svg" alt="Click Trade" class="v-wpkt-section__screen" width="1280" height="135" />
        <p class="v-wpkt-section__text_highlighted">{{ $t("wpkt.buy_step_4_text_4") }}</p>
        <a href="https://odapp.io/" target="_blank" class="v-wpkt-section__button"><span>{{ $t("wpkt.buy_step_4_link") }}</span></a>
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
      title: "WPKT - PKT",
      meta: [{ hid: "description", name: "description", content: this.$t("wpkt.meta_descr") }],
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
.v-wpkt {
  // Top section
  & .v-header-section {
    & .c-internal-header {
      position:relative;
      padding-bottom:0;
      @include for-width(+desktop-xl) {
        padding-bottom:rem(50);
      }
      @include for-width(+desktop-er) {
        padding-top:rem(50);
      }
      @include for-width(-desktop-lg) {
        padding-bottom:rem(50);
      }
      @include for-width(-desktop-medium) {
        padding-bottom:rem(25);
      }
      @include for-width(-tablet) {
        padding-bottom:rem(100);
      }
      @include for-width(-small-lg) {
        padding:rem(100) 0 rem(75);
      }
      &:after {
        content: '';
        background-image: url(/img/wpkt-header-bg.jpeg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center bottom;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: rem(75);
        @include for-width(-desktop-medium) {
          height: rem(85);
        }
        @include for-width(-tablet) {
          height: rem(75);
        }
        @include for-width(-small-lg) {
          height: rem(35);
        }
      }
      & .container {
        @include for-width(-tablet) {
          display: -webkit-flex;
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: flex;
          -webkit-flex-direction: column;
          -moz-flex-direction: column;
          -ms-flex-direction: column;
          -o-flex-direction: column;
          flex-direction: column;
        }
      }
      &__title {
        padding-top:rem(35);
        @include for-width(-tablet) {
          order:1;
        }
        @include for-width(-small-lg) {
          font-size: rem(84);
          line-height: rem(100);
        }
      }
      &__sub-title {
        @include for-width(+desktop-er) {
          margin-bottom:rem(10);
        }
        @include for-width(-tablet) {
          order:2;
        }
        @include for-width(-small-lg) {
          margin: 0 rem(25) rem(15);
        }
      }
      &__text {
        @include for-width(+desktop-er) {
          max-width: 70%;
        }
        @include for-width(-laptop) {
          max-width: 65%;
        }
        @include for-width(-tablet) {
          max-width: 75%;
          order:4;
        }
        @include for-width(-small-lg) {
          max-width: 90%;
        }
      }
      &__text_2 {
        @include for-width(-tablet) {
          order:5;
          margin-bottom:rem(25);
        }
      }
      &__links {
        margin-top:rem(35);
        @include for-width(-desktop-medium) {
          margin-top:rem(35);
        }
        @include for-width(-laptop) {
          margin-top:rem(35);
        }
        @include for-width(-tablet) {
          order:3;
          margin:rem(10) auto rem(35);
        }
        @include for-width(-small-lg) {
          margin-bottom:rem(30)
        }
      }
    }
  }
  // Common
  &-section {
    @extend %t-center;
    & .container {
      @extend %container_new;
      @include for-width(-tablet) {
        max-width:100%;
        width:100%;
        padding:0 rem(25);
      }
      @include for-width(-small-lg) {
        padding:0 rem(20);
      }
    }
    &__title {
      @extend %heading-mlarge;
      @extend %heading-gradient-dark;
      margin-bottom:rem(30);
      @include for-width(+desktop-xl) {
        margin-bottom:rem(40);
      }
      @include for-width(-desktop-lg) {
        margin-bottom:rem(25);
      }
      @include for-width(-laptop) {
        margin-bottom:rem(15);
      }
      @include for-width(-small-lg) {
        font-size: rem(50);
        line-height:rem(60);
        margin-bottom:rem(20);
      }
    }
    &__title_small {
      @extend %heading_internal;
      @extend %heading-gradient-dark;
      margin-bottom:rem(35);
      @include for-width(-laptop) {
        margin-bottom:rem(25);
      }
      @include for-width(-small-lg) {
        font-size:rem(36);
        line-height:rem(42);
      }
    }
    &__subtitle {
      @extend %subheading;
      margin-bottom:rem(25);
      @include for-width(-small-lg) {
        font-size: rem(16);
        line-height:rem(24);
      }
    }
    &__supersmall {
      @extend %heading-small;
      max-width:43%;
      margin:rem(35) auto rem(35);
      @extend %semibold;
      @extend %t-left;
      @include for-width(+desktop-xl) {
        margin-bottom:rem(60);
        max-width:65%;
      }
      @include for-width(-desktop-lg) {
        margin:0 auto rem(35);
      }
      @include for-width(-laptop) {
        max-width:70%;
        margin-bottom:rem(25);
      }
      @include for-width(-tablet) {
        max-width:80%;
      }
      @include for-width(-small-lg) {
        max-width:100%;
        margin-bottom:rem(20);
      }
    }
    &__step {
      @extend %subheading;
      background:$light_bg;
      border-radius: rem(15);
      width:rem(300);
      margin:rem(50) auto rem(20);
      padding:rem(5);
      @include for-width(+desktop-xl) {
        width:rem(400);
      }
      @include for-width(-laptop) {
        width:rem(275);
        margin-top:rem(35);
      }
      @include for-width(-tablet) {
        width:rem(250);
      }
      @include for-width(-small-lg) {
        font-size: rem(22);
        line-height:rem(34);
      }
      & span {
        @extend %heading-gradient-dark;
      }
    }
    &__text {
      @extend %pn;
      margin:0 auto rem(25);
      max-width:25%;
      @include for-width(-laptop) {
        max-width:45%;
      }
      @include for-width(-small-lg) {
        max-width:80%;
      }
    }
    &__text_link {
      text-decoration-line: underline;
      color:$light_blue_new;
    }
    &__list {
      @extend %pn;
      list-style: auto;
      @extend %t-left;
      max-width:24%;
      margin:0 auto rem(15);
      padding-left:rem(20);
      @include for-width(-laptop) {
        max-width:40%;
      }
      @include for-width(-small-lg) {
        max-width:75%;
      }
      & li {
        display:list-item;
        list-style: auto;
        list-style-position: outside;
      }
    }
    &__list_regular {
      @extend %heading-super-small;
      list-style: auto;
      @extend %t-left;
      max-width:43%;
      margin:0 auto rem(50);
      padding-left:rem(25);
      @include for-width(-laptop) {
        max-width:70%;
        margin:0 auto rem(25);
      }
      @include for-width(-small-lg) {
        max-width:100%;
      }
      & li {
        display:list-item;
        list-style: disc;
        list-style-position: outside;
        @extend %regular;
        & strong {
          @extend %semibold;
        }
      }
    }
    &__button {
      @extend %btn-new;
      @extend %btn_blue_new;
      padding:rem(15) rem(50);
      display:inline-block;
      width:auto;
      @include for-width(-laptop) {
        padding:rem(12) rem(35);
      }
      @include for-width(-small-lg) {
        padding:rem(10) rem(25);
      }
    }
    &__text_highlighted {
      margin:rem(35) auto rem(50);
      width:65%;
      background:$light_bg;
      border-radius: rem(15);
      padding:rem(20) rem(50);
      @include for-width(+desktop-xl) {
        margin:rem(45) auto rem(45);
      }
      @include for-width(-laptop) {
        width:75%;
        margin:rem(25) auto rem(45);
      }
      @include for-width(-tablet) {
        font-size:rem(14);
        width:90%;
        padding:rem(20) rem(35);
      }
      @include for-width(-small-lg) {
        width:100%;
        padding:rem(35) rem(20);
      }
    }
    &__screen {
      -o-object-fit: contain;
      object-fit: contain;
      -o-object-position: center center;
      object-position: center center;
      width: initial;
      margin:rem(25) auto;
      @include for-width(-laptop) {
        max-width:75%;
      }
      @include for-width(-tablet) {
        max-width:90%;
      }
      @include for-width(-small-lg) {
        max-width:100%;
        margin:rem(15) auto;
      }
    }
    &__arrow {
      -o-object-fit: contain;
      object-fit: contain;
      -o-object-position: center center;
      object-position: center center;
      width: initial;
      margin-top:rem(25);
      @include for-width(-laptop) {
        max-width:rem(30);
        margin-top:rem(15);
      }
      @include for-width(-small-lg) {
        max-width:rem(25);
      }
    }
  }
  // Sections
  &-section__leveraging {
    background-color:$light_bg;
    background-image:url(/img/cash-bg.jpg);
    background-repeat:no-repeat;
    background-size:100% auto;
    background-position:center bottom;
    padding:rem(25) 0 rem(150);
    @include for-width(-desktop-lg) {
      padding:0 0 rem(125);
    }
    @include for-width(-desktop-medium) {
      padding:0 0 rem(75);
    }
    @include for-width(-small-lg) {
      padding:rem(50) 0 rem(75);
    }
    & .v-wpkt-section__text {
      max-width:55%;
      margin-bottom:rem(50);
      @include for-width(-desktop-lg) {
        max-width:50%;
      }
      @include for-width(-laptop) {
        max-width:65%;
        margin-bottom:rem(35);
      }
      @include for-width(-tablet) {
        max-width:80%;
      }
      @include for-width(-small-lg) {
        max-width:90%;
      }
    }
  }
  &-section__buy {
    padding:rem(100) 0 rem(75);
    @include for-width(-desktop-lg) {
      padding:rem(75) 0;
    }
    @include for-width(-laptop) {
      padding:rem(55) 0 rem(75);
    }
    @include for-width(-small-lg) {
      padding:rem(35) 0 rem(50);
    }
    & .v-wpkt-section__text_long {
      max-width:35%;
      @include for-width(-tablet) {
        max-width:50%;
      }
      @include for-width(-small-lg) {
        max-width:90%;
      } 
    }
  }
}
</style>
