<template>
  <div class="v-crypto">
    <section class="v-crypto-header-section">
      <HeaderInternal 
      :title="this.$t('header.cryptoeconomics')" 
      :subtitle="this.$t('cryptoeconomics.heading_subtitle')"
      is_arrow_down 
      arrow_down_link="#crypto_start"
      />
    </section>
    <section class="v-crypto-section">
        <div class="container_narrow">
          <p class="container_narrow_text">{{ $t("cryptoeconomics.section_1_1") }}</p>
          <ol class="container_narrow_list">
            <li>{{ $t("cryptoeconomics.section_1_list_1") }}</li>
            <li>{{ $t("cryptoeconomics.section_1_list_2") }}</li>
          </ol>
          <p class="container_narrow_text">{{ $t("cryptoeconomics.section_1_2") }}</p>
        </div>
        <div class="container">
          <img src="/img/cryptoeconomics-graphic.png" alt="Payout of PKT vs. BTC as percent of total coins" class="v-crypto-section_illustration" />
          <p class="v-crypto-section_caption">{{ $t("cryptoeconomics.section_2_1") }}</p>
        </div>
        <div class="container_narrow">
          <p class="container_narrow_text">{{ $t("cryptoeconomics.section_2_2") }}</p>
          <p class="container_narrow_text">{{ $t("cryptoeconomics.section_2_3") }}</p>
          <h2 class="container_narrow_heading">{{ $t("header.network_st") }}</h2>
          <h3 class="container_narrow_subheading">{{ $t("cryptoeconomics.section_3_subheading") }}</h3>
          <p class="container_narrow_text">{{ $t("cryptoeconomics.section_3_text") }}</p>
          <div class="container_narrow_links">
            <nuxt-link :to="localePath('network-steward')" class="btn_blue_new button_new"><span>{{ $t("cryptoeconomics.last_link_to_ns") }}</span></nuxt-link>
          </div>
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
      title: "Cryptoeconomics - PKT",
      meta: [{ hid: "description", name: "description", content: "PKT is paid to PacketCrypt miners" }],
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
.v-crypto {
  &-header-section {
    & .c-internal-header {
      position:relative;
      @include for-width(-tablet) {
        height:60vh;
      }
      @include for-width(-small-lg) {
        height:100vh;
        padding:0;
      }
      & .container {
        z-index:3;
      }
      &:after {
        position:absolute;
        content:'';
        display:block;
        width:100%;
        height:100%;
        bottom:-15rem;
        right:0;
        z-index:1;
        background-image:url(/img/crypto-top-banner.jpg);
        background-position:bottom right;
        background-size: contain;
        background-repeat:no-repeat;
        @include for-width(-tablet-lg) {
          bottom:-5rem;
        }
        @include for-width(-small-lg) {
          background-image:url(/img/crypto-top-banner-mobile.png);
          bottom:0;
        }
      }
      &__title {
        @include for-width(-small-lg) {
          font-size: rem(32);
          line-height: rem(50);
          margin-bottom:rem(10);
        }
      }
      &__sub-title {
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(26);
          margin:0 0 30vh;
        }
      }
      & .arrow_down {
        display:none;
        @include for-width(-small-lg) {
          display:block;
          bottom:35vh;
        }
      }
      & #stars {
        display:none;
        @include for-width(-tablet) {
          display:block;
        }
        @include for-width(-small-lg) {
          height:100%;
        }
      }
    }
  }
  &-section {
    background:$white;
    padding-top:rem(175);
    @include for-width(-tablet-lg) {
      padding-top:rem(50);
    }
    @include for-width(-tablet) {
      padding-top:rem(75);
    }
    @include for-width(-small-lg) {
      padding-top:0;
    }
    & .container {
      @extend %container_new;
    }
    & .container_narrow {
      @extend %container_new;
      max-width:rem(600);
      z-index:2;
      position:relative;
      @include for-width(-small-lg) {
        max-width:85%;
        padding-left:rem(20);
        padding-right:rem(20);
      }
      &_text {
        @extend %pn;
        @include for-width(-small-lg) {
          text-align:center;
        }
      }
      &_list {
        margin:rem(25) 0;
        list-style: auto;
        @include for-width(-tablet) {
          margin:rem(20) 0 rem(20) rem(15);
        }
        @include for-width(-small-lg) {
          text-align:center;
          margin-left:0;
        }
        & li {
          @extend %pn;
          display:list-item;
          list-style: auto;
          margin-bottom:0;
          list-style-position: inside;
        }
      }
      &_heading {
        @extend %heading-gradient-dark;
        @extend %heading_internal;
        margin:rem(75) 0 rem(15);
        @include for-width(-tablet-lg) {
          margin:rem(50) 0 rem(15);
        }
        @include for-width(-tablet) {
          margin:rem(35) 0 rem(10);
        }
        @include for-width(-small-lg) {
          text-align:center;
        }
      }
      &_subheading {
        @extend %subheading;
        margin-bottom:rem(40);
        @include for-width(-tablet-lg) {
          margin-bottom:rem(25);
        }
        @include for-width(-small-lg) {
          text-align:center;
          font-size: rem(16);
          line-height: rem(26);
        }
      }
      &_links {
        margin:rem(45) 0 rem(100);
        @extend %t-center;
        @include for-width(-small-lg) {
          margin:rem(35) 0 rem(75);
        }
        & .button_new {
          @extend %btn-new;
          @extend %btn_blue_new;
          display:inline-block;
          padding:rem(15) rem(40) rem(14);
          width:auto;
          @include for-width(-small-lg) {
            padding:rem(10) rem(25);
          }
        }
      }
    }
    &_illustration {
      @extend %t-center;
      max-width:90%;
      margin:rem(50) auto 0;
      display:block;
      @include for-width(-tablet) {
        max-width:100%;
        margin:rem(35) auto 0;
      }
    }
    &_caption {
      @extend %regular;
      font-size: rem(32);
      line-height: rem(48);
      @extend %t-center;
      margin:rem(15) 0 rem(50);
      @include for-width(+desktop-hg) {
        font-size: rem(36);
        line-height: rem(54);
      }
      @include for-width(-tablet) {
        font-size: rem(28);
        line-height: rem(44);
        margin:rem(10) 0 rem(35);
      }
      @include for-width(-small-lg) {
        font-size: rem(16);
        line-height: rem(26);
        margin:rem(10) auto rem(35);
        max-width:60%;
      }
    }
  }
}
</style>
