<template>
  <div class="v-crypto">
    <section class="v-crypto-header-section">
      <HeaderInternal 
      title="Cryptoeconomics" 
      subtitle="PKT is paid to PacketCrypt miners"
      is_arrow_down 
      arrow_down_link="#crypto_start"
      />
    </section>
    <section class="v-crypto-section">
        <div class="container_narrow">
          <p class="container_narrow_text">PKT blockchain is based on the Bitcoin codebase and implements two fundamental changes:</p>
          <ol class="container_narrow_list">
            <li>Replacing SHA256 with the PacketCrypt proof of work.</li>
            <li>Adding a Network Steward that receives 20% of every coinbase payout to provide grants that meets its funding criteria.</li>
          </ol>
          <p class="container_narrow_text">There are total of 6 billion PKT, which will be mined over 63 years. Instead of an abrupt halving event every 4 years, like with Bitcoin, PKT uses a steady decay called a decimation, which is a 10% reduction in the block rewards every 100 days.</p>
        </div>
        <div class="container">
          <img src="/img/cryptoeconomics-graphic.png" alt="Payout of PKT vs. BTC as percent of total coins" class="v-crypto-section_illustration" />
          <p class="v-crypto-section_caption">Payout of PKT vs. BTC as percent of total coins</p>
        </div>
        <div class="container_narrow">
          <p class="container_narrow_text">PKT is designed around fast cheap transacting in small denominations. This is why there will be a total of 6 billion PKT mined compared to 21 million for Bitcoin. Furthermore, each PKT is subdividable into 1,073,741,824 units (2 to the 30th power) whereas there are only 100 million satoshis per Bitcoin. When the Bitcoin price reached almost $62,000 in October 2021, the price of a satoshi was 0.06 cents. This cost per satoshi is impractical for microtransactions, even with nearly free transacting over the Lightning Network.</p>
          <p class="container_narrow_text">PKT Cash provides an economic incentive for people to connect bandwidth to the PKT Network. The Network Steward is designed to ensure funding is available to build-out an expansive, decentralized internet infrastructure with open-source technology.</p>
          <h2 class="container_narrow_heading">Network Steward</h2>
          <h3 class="container_narrow_subheading">Providing funding for infrastructure and technology development</h3>
          <p class="container_narrow_text">The Network Steward is a democratically elected address that is paid 20% of every new block-mine and then granted out to developers to fund  the development of internet infrastructure and open source technology that benefits the PKT Network. Unlike a pre-mine or founder's fee, the recipient of the Network Steward payout can be changed by a PoS vote and if the coins are not spent within after 129600 blocks (approximately 3 months) the coins are burned. More than 12% of the mined coins have been burned through 2021.</p>
          <div class="container_narrow_links">
            <nuxt-link to="/network-steward" class="btn_blue_new button_new"><span>Who is Network Steward</span></nuxt-link>
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
      title: this.$t("wallet.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("about.meta_descr") }],
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
