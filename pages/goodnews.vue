<template>
  <div class="v-goodnews">
    <section class="v-main-section">
      <div class="container">
        <h1 class="v-main-section__heading">{{ $t("goodnews.title_1") }}<br /><span class="white">{{ $t("goodnews.title_2") }}</span></h1>
        <h2 class="v-main-section__subheading">Final Reveal</h2>
        <img src="/img/good_news/final_reveal/pkt-x-base.svg" alt="PKT x Base" class="v-main-section__img" />
      </div>
    </section>
    <section class="v-content-section">
      <div class="container">
        <h2 class="v-content-section__heading">PKT Migrates to Base</h2>
      </div>
      <BlocksChessCommon :list="blocks_list" />
    </section>
    <section class="v-join-section">
      <JoinCommunity />
    </section>
  </div>
</template>

<script>
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
import JoinCommunity from "~/components/Common/JoinCommunity";
export default {
  components: {
    BlocksChessCommon,
    JoinCommunity
  },
  data() {
    return {
      blocks_list: [
        {
          text_direction: "text_left",
          single_title: "Summary",
          single_descr: "PKT has migrated to the Base blockchain, marking a significant technology and wallet upgrade. The move changes the project from proof-of-work to an innovative Stake-to-Earn protocol. Anyone can stake PKT into the dashboard and earn daily rewards. Beginning on October 30, 2024 is Infrastructure Day, when each stake must be paired with a DePIN node that powers the network for daily yields.",
          single_img: "/img/good_news/final_reveal/pkt-migration-1.webp",
          single_url: "https://pkt.cash/1ea983ba3453631d914755e7ad96840d/overview",
          single_link: "View Dashboard",
          external: true,
          single_mobile_order: true
        },
        {
          text_direction: "text_right",
          single_title: "Buy/Sell",
          single_descr: "PKT has been difficult for new buyers to buy due to the inability to access the asset in decentralized way. Now that PKT has a liquidity depth on Uniswap, anyone can buy/sell PKT directly from their Web3 wallet, such as MetaMask and Coinbase Wallet. Base is an Ethereum L2, so transactions are near-instant and gas fees are negligible. This instantly paves the way for TokenStrike.",
          single_img: "/img/good_news/final_reveal/pkt-migration-2.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_left",
          single_title: "Liquidity Pool",
          single_descr: "With PKT  trading on a decentralized exchange, there is automatic market making liquidity to ensure users can transact. This will also anchor the price on CEX as well. The Stake-to-Earn protocol specifically incentivizes community members who contribute PKT/ETH liquidity to the liquidity pool with a 1 million PKT per day divided between liquidity providers. There are also yield multipliers, up to 4x, to incentivize long term liquidity lockups.",
          single_img: "/img/good_news/final_reveal/pkt-migration-3.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_right",
          single_title: "Staking",
          single_descr: "PKT’s Stake-to-Earn protocol is designed to reward people that operate infrastructure nodes that power the PKT Network. Rather than wasteful, centralized proof-of-work mining, DePIN nodes earn daily rewards based on the node type and stake. There are 5 different infrastructure node types with that have varying complexity and yields. DePIN nodes can also earn yield multipliers, up to 4x, for long term staking lockups, and node uptime.",
          single_img: "/img/good_news/final_reveal/pkt-migration-4.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_left",
          single_title: "PKT Migration",
          single_descr: "Holders of PacketCrypt proof-of-work coins are eligible to be airdropped PKT on Base tokens. Simply paste each wallet address Private Key plus a Web3 wallet address into the provided Migration tool to generate a signature. Then paste the signature into PKT Migration dashboard tab. Eligible holders will receive 1/3rd of their tokens now, and 1/3 every 6 months. Anyone can swap PKT on Base into PacketCrypt coins via OTC, by using escrow.",
          single_img: "/img/good_news/final_reveal/pkt-migration-5.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_right",
          single_title: "Referral Rewards",
          single_descr: "PKT has an affiliate program built into the protocol. Each connected wallet receives an affiliate code. If an individual stakes using an affiliate code they receive a 1% yield bonus and the affiliate code provider receives a 4% yield bonus. Each affiliate code provider also receives a 1% yield bonus 1 tier down from each intro. This becomes lucrative as more people use any individual’s affiliate code over time.",
          single_img: "/img/good_news/final_reveal/pkt-migration-6.webp",
          single_url: "https://pkt.cash/1ea983ba3453631d914755e7ad96840d/overview",
          single_link: "View Dashboard",
          external: true,
          single_mobile_order: true
        }
      ]
    };
  },
  head() {
    return {
      title: "Project Good News | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Final Reveal'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Project Good News | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Final Reveal'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/img/featured_meta/pkt-goodnews-preview.jpg'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ],
      bodyAttrs: {
        class: 'goodnews'
      }
    };
  },

};
</script>

<style lang="scss">
.goodnews {
  & .c-header {
    & .nav__logo {
      background-image:url(/img/logo-new-dark.svg);
      background-repeat:no-repeat;
      background-size:contain;
      background-position:left center;
      @include for-width(-tablet) {
        background:none;
      }
      & img {
        opacity:0;
        visibility:hidden;
        @include for-width(-tablet) {
          opacity:1;
          visibility:visible;
        }
      }
    }
  }
}
.v-goodnews {
  background: #E3E3E8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position:relative;
  & .v-main-section {
    background-image:url(/img/goodnews-bg.webp);
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
    background-attachment: fixed;
    width:100%;
    min-height:100vh;
    height:auto;
    @extend %df;
    @extend %jcc;
    @extend %fdc;
    @extend %aic;
    @extend %t-center;
    @include for-width(-small-lg) {
      background-image:url(/img/goodnews-bg-mobile.webp);
      background-attachment: scroll;
    }
    &__heading {
      color:$black_blue;
      @extend %inter_black;
      font-size: rem(80);
      line-height: rem(98);
      text-transform:uppercase;
      padding-top:rem(35);
      @include for-width(-desktop-medium-default) {
        padding-top:rem(50);
      }
      @include for-width(-desktop-medium) {
        font-size: rem(70);
        line-height: rem(88);
        padding-top:rem(65);
      }
      @include for-width(-small-lg) {
        font-size: rem(42);
        line-height: rem(52);
        padding-top:0;
      }
      & span {
        background-color:#F66020;
        border-radius:rem(6);
        line-height: rem(104);
        padding:0 rem(35);
        @include for-width(-desktop-medium) {
          line-height: rem(94);
          padding:0 rem(25);
        }
        @include for-width(-small-lg) {
          line-height: rem(52);
        }
      }
    }
    &__subheading {
      color:$black_blue;
      @extend %h2-common;
      margin:rem(10) 0 rem(50);
      @include for-width(-small-lg) {
        font-size:rem(24);
        line-height:rem(80);
        margin:0 0 rem(70);
      }
    }
    &__img {
      width:rem(515);
      height:rem(90);
      object-fit:contain;
      object-position:center;
      @include for-width(-desktop-medium) {
        width:rem(415);
        height:rem(80);
      }
      @include for-width(-small-lg) {
        width:rem(265);
        height:rem(50);
      }
    }
  }
  & .v-content-section {
    padding-top:rem(80);
    @include for-width(-small-lg) {
      padding-top:rem(60);
    }
    &__heading {
      @extend %h1-common;
      padding-bottom:rem(50);
      color:$black_blue;
      @extend %t-center;
      @include for-width(-small-lg) {
        font-size:rem(38);
        line-height:rem(42);
        max-width:rem(250);
        margin:0 auto;
      }
    }
    & .c-chess-block {
      &_inner {
        padding-top:rem(100);
        @include for-width(-small-lg) {
          padding-top:rem(60);
        }
        &:first-child {
          padding-top:0;
        }
        &_single {
          &_title {
            color:$black_blue;
          }
          &_descr {
            color:$black_blue;
            word-break: auto-phrase;
            text-wrap: pretty;
          }
          &_img {
            @include for-width(-tablet) {
              display:none;
            }
          }
        }
      }
    }
  }
  & .v-join-section {
    & .c-common-join {
      &__title {
        @include for-width(-small-lg) {
          color:$black_blue;
        }
      }
      &__links {
        .c-common-button {
          @include for-width(-small-lg) {
            color:$black_blue;
            border-color:$black_blue;
          }
        }
      }
    }
  }
}
</style>
