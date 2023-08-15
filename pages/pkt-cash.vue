<template>
  <div class="v-cash">
    <section class="v-cash-header-section">
      <HeaderInternal
      :title="this.$t('header.pkt_cash')" 
      :subtitle="this.$t('pkt_cash.header_subtitle')" 
      :text="this.$t('pkt_cash.header_text')"
      button_1="Cryptoeconomics" 
      button_1_link="/cryptoeconomics"
      is_arrow_down 
      arrow_down_link="#micro" />
    </section>
    <section class="v-cash-section__micro" id="micro">
      <div class="container">
        <h2 class="v-cash-section__micro__title">{{ $t("pkt_cash.micro_title") }}</h2>
        <p class="v-cash-section__micro__text">{{ $t("pkt_cash.micro_text_1") }}</p>
        <p class="v-cash-section__micro__text">{{ $t("pkt_cash.micro_text_2") }}</p>
      </div>
    </section>
    <section class="v-cash-section__functions">
      <div class="container">
        <h2 class="v-cash-section__functions__title">PKT Cash Coin Functions</h2>
          <div class="v-cash-section__functions__row_first">
            <div v-for="item of functions_first" class="v-cash-section__functions__item">
              <template>
                <div class="v-cash-section__functions__image">
                  <img :src="item.image" :alt="item.name" />
                </div>
                <h5 class="v-cash-section__functions__title_small">{{ item.name }}</h5>
                <p class="v-cash-section__functions__descr">{{ item.descr }}</p>
              </template>
            </div>
          </div>
          <div class="v-cash-section__functions__row_last">
            <div v-for="item of functions_last" class="v-cash-section__functions__item">
              <template>
                <div class="v-cash-section__functions__image">
                  <img :src="item.image" :alt="item.name" />
                </div>
                <h5 class="v-cash-section__functions__title_small">{{ item.name }}</h5>
                <p class="v-cash-section__functions__descr">{{ item.descr }}</p>
              </template>
            </div>
          </div>
      </div>
    </section>
    <section class="v-cash-section__halfed dark">
      <div class="container">
        <div class="v-cash-section__halfed_left">
          <h2 class="v-cash-section__halfed__title">TokenStrike</h2>
          <p class="v-cash-section__halfed__text">PKT proposes a new token standard called TokenStrike, that will enable zero cost token issuance with zero gas fee transactions. TokenStrike is the backbone technology for supporting a decentralized bandwidth trading marketplace, whereby anyone will be able to tokenize bandwidth and buy/sell microtransaction bandwidth leases over Lightning Network with near-infinite transactions per second. TokenStrike will also enable the issuance of NFTs without gas fees. - Coming 2022</p>
        </div>
        <div class="v-cash-section__halfed_right">
          <img src="/img/pkt-tockenstrike.png" alt="Bandwidth Trading Marketplace" />
        </div>
      </div>
    </section>
    <section class="v-cash-section__halfed light">
      <div class="container">
        <h2 class="v-cash-section__halfed__title">Bandwidth Trading Marketplace</h2>
        <div class="v-cash-section__halfed_left">
          <p class="v-cash-section__halfed_left__text">The PKT roadmap will power a decentralized bandwidth trading marketplace. This market functions like current decentralized exchanges (DEX), however Tokenstrike makes it so anyone can: </p>
          <ol class="v-cash-section__halfed_left__list">
            <li>Create a token to represent underlying bandwidth.</li>
            <li>Offer those tokens for sale to anyone, including software defined network operators called Cloud ISPs.</li>
            <li>Cloud ISPs buy the tokens for access to the underlying bandwidth leases and become ISPs, handling networking/billing/administrative/legal, without requiring any infrastructure.</li>
          </ol>
        </div>
        <div class="v-cash-section__halfed_right">
          <img src="/img/cash-marketplace.png" alt="Bandwidth Trading Marketplace" />
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
      title: this.$t("cash.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("about.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  data() {
    return {
      functions_first: [
        {
          name: "Mining Rewards",
          descr: "Edge Points are paid in PKT Cash every 60 seconds.",
          image: "/img/cash-functions-reward.png",
        },
        {
          name: "VPN",
          descr: "Users will have VPN service for free, and can pay for their VPN speed with PKT Cash. - Coming 2022",
          image: "/img/cash-functions-vpn.png",
        },
        {
          name: "Data Transfer",
          descr: "Edge Points can allow the transmission of real-world data through virtual private networks (VPN) to earn additional payments. - Coming 2022",
          image: "/img/cash-functions-data.png",
        },
      ],
      functions_last: [
        {
          name: "Network Steward",
          descr: "The Network Steward treasury provides grants for infrastructure growth and technology development every 90 days, otherwise the PKT Cash is burned.",
          image: "/img/cash-functions-ns.png",
        },
        {
          name: "Governance",
          descr: "Every holder of PKT Cash is able to cast a vote to impeach the Network Steward and vote a new one to take its place. ",
          image: "/img/cash-functions-vote.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-cash {
  &-header-section {
    & .c-internal-header {
      @include for-width(-small-lg) {
        height:100vh;
      }
      &__sub-title {
        margin:rem(10) auto rem(25);
      }
      .arrow_down {
        @include for-width(-small-lg) {
          bottom: rem(20);
        }
      }
      &__links {
        margin-top:rem(50);
          .button_new {
            @include for-width(-small-lg) {
              padding:rem(10) rem(35);
              width:auto;
              margin:0 auto;
            }
          }
      }
    }
  }
  & .container {
      @extend %container_new;
      @include for-width(-tablet) {
        max-width:100%;
        width:100%;
        padding:0 rem(25);
        display:block;
      }
      @include for-width(-small-lg) {
        padding:0 rem(20);
      }
  }
  &-section__micro {
    background-color:$light_bg;
    background-image:url(/img/cash-bg.jpg);
    background-repeat:no-repeat;
    background-size:100% auto;
    background-position:center bottom;
    padding:rem(125) 0 rem(150);
    margin-bottom:rem(100);
    @extend %t-center;
    @include for-width(-tablet-lg) {
      padding:rem(100) 0 rem(85);
      margin-bottom:rem(75);
    }
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(50);
      margin-bottom:rem(50);
    }
    & .container {
      @extend %container_new;
      max-width:45%;
      @include for-width(-tablet-lg) {
        max-width:55%;
      }
      @include for-width(-tablet) {
        max-width:75%;
      }
      @include for-width(-small-lg) {
        max-width:100%;
      }
    }
    &__title {
      @extend %heading-gradient-dark;
      @extend %heading_internal;
      margin-bottom:rem(35);
      @include for-width(-small-lg) {
        font-size: rem(34);
        line-height: rem(42);
        margin-bottom:rem(15);
      }
    }
    &__text {
      @extend %pn;
      margin-bottom:rem(25);
      @include for-width(-small-lg) {
        margin-bottom:rem(15);
      }
    }
  }
  &-section__functions {
    padding-bottom:rem(125);
    @include for-width(-tablet-lg) {
      padding-bottom:rem(100);
    }
    @include for-width(-small-lg) {
      padding-bottom:rem(50);
    }
    & .container {
      @extend %container_new;
    }
    &__title {
      @extend %heading-gradient-dark;
      @extend %heading_internal;
      @extend %t-center;
      max-width:50%;
      margin:0 auto rem(75);
      @include for-width(-tablet-lg) {
        margin-bottom:rem(55);
      }
      @include for-width(-tablet) {
        max-width:65%;
      }
      @include for-width(-small-lg) {
        font-size: rem(36);
        line-height: rem(42);
        max-width:100%;
        margin-bottom:rem(35);
      }
    }
    &__item {
      width:32%;
      @include for-width(-small-lg) {
        width:100%;
      }
    }
    &__image {
      background: $dark_blue_new;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      border-radius: rem(18);
      width:100%;
      height:20vw;
      padding:rem(10);
      position:relative;
      @include for-width(-small-lg) {
        height:rem(200);
      }
      & img {
        object-fit: contain;
        max-height:80%;
        max-width:65%;
        @extend %centered_all;
        @include for-width(-small-lg) {
          max-height:75%;
          max-width:60%;
        }
      }
    }
    &__title_small {
      @extend %heading-super-small;
      margin:rem(25) 0 rem(10) rem(15);
      @include for-width(-tablet) {
        margin:rem(15) 0 rem(5) rem(15);
      }
      @include for-width(-small-lg) {
        margin:rem(10) rem(15) rem(3);
      }
    }
    &__descr {
      @extend %pn;
      margin:0 0 0 rem(15);
      @include for-width(-small-lg) {
        margin:0 rem(15) rem(35);
      }
    }
    &__row_first {
      @extend %df;
      @extend %ais;
      @extend %jcsb;
      margin-bottom:rem(75);
      @include for-width(-tablet-lg) {
        margin-bottom:rem(55);
      }
      @include for-width(-small-lg) {
        display:block;
        margin-bottom:0;
      }
    }
    &__row_last {
      @extend %df;
      @extend %ais;
      @extend %jcsb;
      @include for-width(-small-lg) {
        display:block;
      }
      & .v-cash-section__functions__item {
        width:49%;
        @include for-width(-small-lg) {
          width:100%;
        }
      }
      & img {
        max-height:70%;
        max-width:65%;
      }
    }
  }
  &-section__halfed {
    & .container {
      @extend %container_new;
    }
    &__title {
      @extend %heading-gradient-dark;
      @extend %heading_internal;
      margin-bottom:rem(35);
      @include for-width(-tablet) {
        margin-bottom:rem(15);
      }
      @include for-width(-small-lg) {
        font-size: rem(36);
        line-height: rem(42);
      }
    }
    &__text {
      @extend %pn;
    }
    &_left {
      @extend %t-left;
      width:48%;
      @include for-width(-tablet-lg) {
        width:50%;
      }
      @include for-width(-tablet) {
        width:55%;
      }
      @include for-width(-small-lg) {
        width:100%;
      }
      &__text {
        @extend %pn;
      }
      &__list {
        margin:rem(25) 0 rem(25) rem(20);
        list-style: auto;
        @include for-width(-tablet) {
          margin:rem(20) 0 rem(20) rem(15);
        }
        & li {
          @extend %pn;
          display:list-item;
          list-style: auto;
          margin-bottom:0;
          list-style-position: outside;
        }
      }
    }
    &_right {
      @include for-width(-tablet-lg) {
        width:50%;
      }
      @include for-width(-small-lg) {
        width:100%;
      }
    }
    &.dark {
      background-color:$dark_blue_new;
      background-image:url(/img/cash-tockenstrike-bg.png);
      background-repeat:no-repeat;
      background-size:55% 100%;
      background-position:center right;
      padding:rem(175) 0;
      @include for-width(-tablet-lg) {
        padding:rem(100) 0;
      }
      @include for-width(-tablet) {
        padding:rem(65) 0;
        background-size:65% 100%;
      }
      @include for-width(-small-lg) {
        background-size:cover;
        padding:rem(65) 0 rem(55);
      }
      & .container {
        @extend %df;
        @extend %aic;
        @extend %jcsb;
        @include for-width(-small-lg) {
          display:block;
        }
      }
      & .v-cash-section__halfed__title {
        @extend %heading-gradient-light;
      }
      & .v-cash-section__halfed__text {
        color:$white;
      }
      & .v-cash-section__halfed_right {
        @extend %t-right;
        @include for-width(-small-lg) {
          text-align:center;
        }
        & img {
          width:55%;
          margin-right:rem(50);
          @include for-width(-tablet-lg) {
            width:60%;
          }
          @include for-width(-tablet) {
            width:65%;
          }
          @include for-width(-small-lg) {
            width:75%;
            margin:0 auto;
          }
        }
      }
    }
    &.light {
      padding:rem(100) 0;
      @include for-width(-tablet-lg) {
        padding:rem(75) 0;
      }
      @include for-width(-tablet) {
        padding:rem(65) 0;
      }
      @include for-width(-small-lg) {
        padding:rem(50) 0;
      }
      & .v-cash-section__halfed__title {
        max-width:60%;
        @include for-width(-tablet) {
          max-width:80%;
        }
        @include for-width(-small-lg) {
          max-width:100%;
          text-align:center;
        }
      }
      & .v-cash-section__halfed_left {
        display:inline-block;
        width:49%;
        vertical-align:middle;
        padding-right:rem(100);
        @include for-width(-tablet-lg) {
          padding-right:rem(50);
        }
        @include for-width(-tablet) {
          padding-right:rem(15);
        }
        @include for-width(-small-lg) {
          display:block;
          width:100%;
          padding-right:0;
        }
      }
      & .v-cash-section__halfed_right {
        display:inline-block;
        width:50%;
        vertical-align:middle;
        @extend %t-center;
        @include for-width(-tablet) {
          vertical-align:top;
        }
        @include for-width(-small-lg) {
          display:block;
          width:100%;
        }
        & img {
          width:100%;
          @include for-width(-small-lg) {
            width:75%;
            margin:rem(20) auto 0;
          }
        }
      }
    }
  }
}
</style>
