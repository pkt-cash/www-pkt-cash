<template>
  <div class="v-mining">
    <section class="v-header-section">
      <SpotAInternal
      title="Stake to Earn"
      text="PKT economically incentivizes people to stake and earn PKT. Each stake must be assigned to an infrastructure node that powers the PKT Network. Supporting the network has never been easier. Get started today."
      button_1="Stake PKT"
      button_2="Read Docs"
      button_1_link="https://pkt.cash/1ea983ba3453631d914755e7ad96840d/overview"
      button_2_link="https://docs.pkt.cash/"
      button_1_target="_blank"
      button_2_target="_blank" />
    </section>
    <!-- <section class="v-analytics-section">
      <AnalyticsData />
    </section> -->
    <section class="v-chess-section">
      <BlocksChessCommon :list="chess_list" />
    </section>
    <section class="v-block-links-section">
      <div class="container">
        <div class="v-block-links-section__inner">
          <div class="v-block-links-section__single dark_blue_bg">
            <div><h3 class="v-block-links-section__title">How to Stake PKT</h3>
            <p class="v-block-links-section__descr">First connect your wallet to the PKT dashboard. Designate how much PKT you would like to stake and the duration you’d like to stake it for. Each type of infrastructure staking pays a different reward. The longer the lockup period, the higher your yields.</p></div>
            <a href="https://docs.pkt.cash/stake/stake-earn" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>Learn more</span></a>
          </div>
          <div class="v-block-links-section__single green_bg">
            <div><h3 class="v-block-links-section__title">How to Stake <br />the Liquidity Pool</h3>
            <p class="v-block-links-section__descr">Staking the liquidity pool on Uniswap requires you to lock up PKT as well as ETH. For the first 365 days, 1 million PKT per day is paid pro rata to those who stake the liquidity pool. You can also stake your LP tokens into PKT infrastructure to earn additional yields.</p></div>
            <a href="https://docs.pkt.cash/stake/stake-earn" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>Learn more</span></a>
          </div>
        </div>
        <div class="v-block-links-section__inner">
          <div class="v-block-links-section__single orange_bg">
            <div><h3 class="v-block-links-section__title">How to Stake LP Tokens</h3>
            <p class="v-block-links-section__descr">Once you provide liquidity to the Uniswap Liquidity Pool, you can stake your LP tokens. LP Staking maximizes your daily yields. The longer you lock up your stake, the higher your yields.</p></div>
            <a href="https://docs.pkt.cash/stake/stake-earn" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>Learn more</span></a>
          </div>
          <div class="v-block-links-section__single blue_bg">
            <div><h3 class="v-block-links-section__title">Install Wallet</h3>
            <p class="v-block-links-section__descr">PKT can be stored or stake from any Base compatible wallet. The Coinbase Wallet or MetaMask Wallet are recommended. Download a wallet and start staking today!</p></div>
            <nuxt-link class="c-common-button c-common-button__bordered c-common-button__dark_blue" to="/wallet">
              <span>Get Wallet</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
// import AnalyticsData from "~/components/Mine/AnalyticsData";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
export default {
  components: {
    SpotAInternal,
    // AnalyticsData,
    BlocksChessCommon
  },
  data() {
    return {
      chess_list: [
        {
          text_direction: "text_right",
          single_title: "Why Stake PKT",
          single_descr: "There are several ways to stake PKT, including infrastructure staking, liquidity staking and farming. Infrastructure staking connects a stake to resources that support the PKT Network. Liquidity staking incentivizes the community to support the PKT market. Farming rewards those that provide liquidity and infrastructure to the network.",
          single_url: "https://pkt.cash/1ea983ba3453631d914755e7ad96840d/overview",
          external: true,
          single_link: "PKT Dashboard",
          single_img: "/img/mine/mine-1.webp",
        }
      ]
    };
  },
  head() {
    return {
      title: "Stake | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PKT economically incentivizes people to stake and earn PKT. Each stake must be assigned to an infrastructure node that powers the PKT Network.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Stake | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'PKT economically incentivizes people to stake and earn PKT. Each stake must be assigned to an infrastructure node that powers the PKT Network.'
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
.v-mining {
  background-color:$black_blue;
  position:relative;
  &:before {
    content:'';
    background-image:url(/img/mine/mine-bg.webp);
    position:absolute;
    bottom:0;
    right:0;
    width:80%;
    height:70%;
    background-position:left center;
    background-size:cover;
    background-repeat:no-repeat;
    z-index:1;
  }
  &:after {
    content:'';
    background-image:url(/img/mine-top-asset.webp);
    position:absolute;
    top:0;
    right:0;
    width:55%;
    height:55%;
    background-position:right top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-desktop-medium) {
      width:60%;
      height:60%;
    }
    @include for-width(-small-lg) {
      width:100%;
      height:rem(800);
      background-size:cover;
      background-position:right -250px top -150px;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  .v-header-section {
    .c-spot-a-internal {
      @include for-width(-small-lg) {
        padding:rem(110) 0 rem(90);
      }
      &__title {
        max-width:rem(250);
        @include for-width(-small-lg) {
          max-width:rem(200);
        }
      }
      &__text {
        max-width:rem(585);
        @include for-width(-small-lg) {
          max-width:100%;
        }
      }
      &__links {
        @include for-width(-small-lg) {
          margin-top:rem(35);
        }
        & .c-common-button {
          @include for-width(-small-lg) {
            width:47%;
          }
        }
      }
    }
  }
  .v-chess-section {
    & .text_right {
      & .c-chess-block_inner_single_title {
        padding-right:rem(50);
        @include for-width(-small-lg) {
          padding-right:0;
        }
      }
    }
  }
  .v-block-links-section {
    padding:rem(150) 0;
    @include for-width(-small-lg) {
      padding:rem(80) 0 rem(90);
    }
    &__inner {
      @extend %df;
      @extend %jcsb;
      @extend %fw;
      padding-bottom:3%;
      &:last-child {
        padding-bottom:0;
      }
      @include for-width(-small-lg) {
        display:block;
        padding-bottom:0;
      }
    }
    &__single {
      width:48.5%;
      border-radius:rem(20);
      padding:rem(30) rem(40);
      @extend %df;
      @extend %jcsb;
      @extend %fdc;
      @extend %ais;
      @include for-width(-laptop) {
        padding:rem(25) rem(30);
      }
      @include for-width(-small-lg) {
        width:100%;
        padding:rem(20) rem(30);
        margin-bottom:rem(20);
      }
    }
    &__title {
      font-size: rem(40);
      line-height: rem(50);
      color:$black_blue;
      @extend %inter_semibold;
      @include for-width(-laptop) {
        font-size: rem(34);
        line-height: rem(44);
      }
      @include for-width(-small-lg) {
        font-size: rem(30);
        line-height: rem(36);
      }
    }
    &__descr {
      @extend %p-big-common;
      color:$black_blue;
      padding:rem(12) 0 rem(65);
      @include for-width(-small-lg) {
        font-size: rem(16);
        line-height: rem(24);
      }
    }
  }
}
</style>