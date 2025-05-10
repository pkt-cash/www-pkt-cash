<template>
  <div class="v-utility">
    <section class="v-header-section">
      <SpotAInternal 
      title="A Utility Network"
      text="PKT functions as a versatile utility network built on the Base blockchain. The Base blockchain is a L2 that delivers fast, low cost payments using the Ethereum network. The PKT Network delivers a digital foundation for apps, products and platforms to access and service global customers."
      button_1="Learn more"
      button_2="Read docs"
      button_1_link="ecosystem"
      button_2_link="https://docs.pkt.cash/"
      button_2_target="_blank" />
    </section>
    <section class="v-asymetrical-section">
      <div class="container">
        <div class="v-asymetrical-section__heading">
          <h2>An Open Ecosystem</h2>
          <a href="https://docs.pkt.cash/network/what-is-network" target="_blank" class="c-common-button c-common-button__filled"><span>{{ $t("common.learn_more") }}</span></a>
        </div>
        <div class="v-asymetrical-section__inner">
          <BlockAsymmetrical :listFirst="asymetrical_block_list" :listSecond="asymetrical_block_list_second" />
        </div>
      </div>
    </section>
    <section class="v-powering-section">
      <div class="container">
        <h2 class="v-powering-section__heading">Utility for the Future of Media</h2>
        <div class="v-powering-section__inner">
          <CardsCommon :list="cards_list" />
        </div>
      </div>
    </section>
    <section class="v-chess-section">
      <BlocksChessCommon :list="chess_list" />
    </section>
    <section class="v-index-section">
      <JoinCommunity />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import CardsCommon from "~/components/Home/CardsCommon";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
import BlockAsymmetrical from "~/components/Common/BlockAsymmetrical";
import JoinCommunity from "~/components/Common/JoinCommunity";
export default {
  components: {
    SpotAInternal,
    CardsCommon,
    BlocksChessCommon,
    BlockAsymmetrical,
    JoinCommunity
  },
  data() {
    return {
      chess_list: [
        {
          text_direction: "text_right",
          single_title: "BIA - A New Home For Media Entertainment",
          single_descr: "BIA is a streaming platform built on the PKT Network. It designed to revolutionize how content is distributed, discovered and the way content creators are compensated. Audiences get paid to power the network and can cash-out or use their earnings to pay for content.",
          single_img: "/img/utility/utility-1.webp",
        },
        {
          text_direction: "text_left",
          single_title: "Base Blockchain",
          single_descr: "Base is an Ethereum L2, powered by Coinbase. Base provides a deployable, stable, EVM codebase for building on onchain apps, using smart contracts and using next gen wallet technologies.",
          single_img: "/img/utility/utility-2.webp",
        }
      ],
      asymetrical_block_list: [
        {
          single_title: "No Central Party",
          single_descr: "The PKT Network is permissionless and globally accessible without geofencing. Anyone can launch, publish and transact content via applications, platforms, or websites on the network.",
          color: "orange_dot"
        },
        {
          single_title: "Built-in Payments",
          single_descr: "Payment processing is fundamental for any network. Each web URL in the PKT Network is also a PKT payment address. This enables seamless, built-in payment processing without requiring a third party payment processor.",
          color: "green_dot"
        }
      ],
      asymetrical_block_list_second: [
        {
          single_title: "Scalable",
          single_descr: "Using Base’s L2 blockchain provides PKT Network access to programmable payments using smart contracts. This delivers scalable, low cost, near-instant payment settlement.",
          color: "green_dot"
        },
        {
          single_title: "Wallet Innovation",
          single_descr: "PKT Network is build on the Base blockchain. This enables access to top-tier, non-custodial wallets like Coinbase Wallet, MetaMask and Ledger, as well as multi-sig solutions for ease of storage, utility, and peace of mind security.",
          color: "orange_dot"
        }
      ],
      cards_list: [
        {
          single_title: "Streaming",
          single_descr: "PKT Network is open for anyone to build and host streaming platforms. The first platform built on PKT is BIA - a streaming hub that reimagines the way content is distributed, discovered and compensated.",
          single_url: "https://docs.pkt.cash/utility",
          single_link: this.$t("common.learn_more"),
          external: true
        },
        {
          single_title: "Ecommerce",
          single_descr: "Anyone to host and launch a censorship-resistant website on PKT. Each website’s web URL can be used as a PKT payment address, without requiring a third party payment processor.",
          single_url: "https://docs.pkt.cash/utility",
          single_link: this.$t("common.learn_more"),
          external: true
        },
        {
          single_title: "Bandwidth Markets",
          single_descr: "It’s now possible to tokenize access rights to bandwidth using real world assets (RWAs). These RWA’s can be traded in a decentralized bandwidth marketplace using AI price models.",
          single_url: "https://docs.pkt.cash/utility",
          single_link: this.$t("common.learn_more"),
          external: true
        },
      ],
    };
  },
  head() {
    return {
      title: "Utility | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Building physical infrastructure with PKT.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Utility | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Building physical infrastructure with PKT.'
        }
      ],
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
.v-utility {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/utility/utility-top-asset.webp);
  background-size:rem(1150);
  background-position:top right;
  background-repeat:no-repeat;
  @include for-width(-desktop-medium-default) {
    background-size:rem(800);
  }
  @include for-width(-laptop) {
    background-size:rem(700);
    background-position:top -350px right -150px;
  }
  @include for-width(-small-lg) {
    background-size:rem(800);
    background-position:top -350px right -250px;
  }
  &:before {
    content:'';
    background-image:url(/img/utility-bg-1.webp);
    position:absolute;
    top:7%;
    right:0;
    width:70%;
    height:75%;
    background-position:right top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
  }
  &:after {
    content:'';
    background-image:url(/img/utility-bg-2.webp);
    position:absolute;
    bottom:15%;
    left:0;
    width:55%;
    height:35%;
    background-position:left top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(90);
    }
    &__title {
      max-width: rem(300);
      @include for-width(-small-lg) {
        
      }
    }
  }
  .v-chess-section {
    & .c-chess-block_inner_single_img {
      & img {
        border-radius:rem(20);
        @include for-width(-small-lg) {
          margin-top:0;
        }
      }
    }
    & .text_right {
      & .c-chess-block_inner_single {
        padding-right:rem(30);
        @include for-width(-tablet) {
          padding-right:0;
        }
      }
    }
  }
  .v-asymetrical-section {
    padding-bottom:0;
    @include for-width(-desktop-med) {
      padding:0 rem(30);
    }
    @include for-width(-small-lg) {
      padding:0 rem(20);
    }
    & .container {
      @extend %df;
      @extend %jcsb;
      @extend %ais;
      padding:rem(50) 0 0;
      // border-top:1px solid rgba(217,217,217,.2);
      // border-bottom:1px solid rgba(217,217,217,.2);
      @include for-width(-laptop) {
        padding:rem(75) 0 rem(35);
      }
      @include for-width(-tablet) {
        display:block;
      }
      @include for-width(-small-lg) {
        border:0;
        padding:0;
      }
      & .c-common-button {
        @include for-width(-small-lg) {
          display:none;
        }
      }
      & .mobile_only {
        display:none;
        @include for-width(-small-lg) {
          display:block;
          margin-top:rem(25);
        }
      }
    }
    &__heading {
      & h2 {
        @extend %h2-common;
        padding-bottom:rem(35);
        @include for-width(-small-lg) {
          padding-bottom:0;
        }
      }
      width:25%;
      @include for-width(-tablet) {
        width:100%;
        padding-bottom:rem(35);
      }
      @include for-width(-small-lg) {
        padding-bottom:rem(15);
      }
    }
    &__inner {
      width:65%;
      @include for-width(-tablet) {
        width:100%;
      }
      @include for-width(-small-lg) {
        padding:0 rem(20);
      }
    }
  }
  & .v-powering-section {
    padding:rem(135) 0 rem(180);
    @include for-width(-tablet) {
      padding:10vh 0;
    }
    @include for-width(-small-lg) {
      padding:rem(100) 0;
    }
    &__heading {
      @extend %h2-common;
      padding-bottom:rem(50);
      @include for-width(-tablet) {
        padding-bottom:rem(35);
      }
      @include for-width(-small-lg) {
        padding-bottom:rem(15);
      }
    }
  }
}
</style>