<template>
  <div class="v-wpkt">
    <section class="v-header-section">
      <HeaderInternal 
      title="WPKT" 
      subtitle="Bridging PKT to Decentralized Finance" 
      text="PKT Cash is a native cryptocurrency built on Bitcoin code. To create a bridge to the multi-billion dollar world of DeFi, PKT can be wrapped into a BEP20 token called $wPKT for trading on PancakeSwap and Binance Smart Chain. WPKT has a 1-to-1 peg with $PKT and can be held in any wallet that supports BEP20 tokens, such as MetaMask." 
      text_2="Since PKT and WPKT exist on different blockchains, PKT can be sent to a swap called ODApp.io in order to convert. The symbols PKT and wPKT differentiate the assets based on the blockchain they can transact on."
      button_1="Trade wPKT" 
      button_1_link="/" />
    </section>
    <section class="v-wpkt-section v-wpkt-section__leveraging">
      <div class="container">
        <h2 class="v-wpkt-section__title_small">Leveraging DeFi</h2>
        <p class="v-wpkt-section__text">WPKT allows anyone to trade on decentralized exchanges (DEX) or earn yields by staking into a liquidity pool to earn interest on PKT treasury holdings. PKT can be easily swapped into wPKT, and DeFi gains can easily be converted back into PKT by utilizing the ODApp bridge.</p>
        <a href="#" target="_blank" class="v-wpkt-section__button"><span>Swap PKT & wPKT</span></a>
      </div>
    </section>
    <section class="v-wpkt-section v-wpkt-section__buy">
      <div class="container">
        <h2 class="v-wpkt-section__title">How to Buy wPKT</h2>
        <img src="/img/wpkt-arrow.svg" width="40" height="44" alt="icon-arrow" class="v-wpkt-section__arrow" />
        <p class="v-wpkt-section__step"><span>Step 1</span></p>
        <h4 class="v-wpkt-section__subtitle">Create Your MetaMask Wallet</h4>
        <p class="v-wpkt-section__text">If you have a MetaMask wallet, skip ahead to Step 2.</p>
        <ol class="v-wpkt-section__list">
          <li>Go to MetaMask and download and install (in Chrome or FireFox).</li>
          <li>You’ll see the MetaMask fox icon near your address bar. Click the icon to open MetaMask.</li>
          <li>Setup your password and Secret Backup Phrase then store in a safe place.</li>
        </ol>
        <img src="/img/wpkt-step-1.svg" alt="Create Your MetaMask Wallet" class="v-wpkt-section__screen" width="800" height="440" />
        <p class="v-wpkt-section__step"><span>Step 2</span></p>
        <h4 class="v-wpkt-section__subtitle">Add Binance Smart Chain</h4>
        <p class="v-wpkt-section__text">Switch the blockchain by clicking where it says Main Ethereum Network.</p>
        <img src="/img/wpkt-step-2-1.svg" alt="Add Binance Smart Chain" class="v-wpkt-section__screen" width="580" height="125" />
        <p class="v-wpkt-section__text">Scroll down until you find Custom RPC.</p>
        <img src="/img/wpkt-step-2-2.svg" alt="Scroll down until you find Custom RPC" class="v-wpkt-section__screen" width="550" height="110" />
        <p class="v-wpkt-section__text">Enter in the following details:</p>
        <p class="v-wpkt-section__supersmall">Enter in the BSC mainnet details as follows and click Save:</p>
        <ul class="v-wpkt-section__list_regular">
          <li><strong>Network Name:</strong> BSC Mainnet</li>
          <li><strong>New RPC URL:</strong> https://bsc-dataseed1.binance.org/ or https://bsc-dataseed2.binance.org/</li>
          <li><strong>ChainID:</strong> 56, or 0x38 if 56 doesn’t work</li>
          <li><strong>Symbol:</strong> BNB</li>
          <li><strong>Block Explorer URL:</strong> https://bscscan.com/</li>
        </ul>
        <img src="/img/wpkt-step-2-3.svg" alt="Enter in the following details" class="v-wpkt-section__screen" width="360" height="595" />
        <p class="v-wpkt-section__step"><span>Step 3</span></p>
        <h4 class="v-wpkt-section__subtitle">Purchase BNB</h4>
        <p class="v-wpkt-section__text v-wpkt-section__text_long">Send BNB to your MetaMask wallet. You can purchase BNB from exchanges such as Binance, Kraken, Kucoin, etc. and send it to your MetaMask wallet address.</p>
        <img src="/img/wpkt-step-3.svg" alt="Purchase BNB" class="v-wpkt-section__screen" width="825" height="95" />
        <p class="v-wpkt-section__step"><span>Step 4</span></p>
        <h4 class="v-wpkt-section__subtitle">Purchase wPKT on PancakeSwap</h4>
        <p class="v-wpkt-section__text v-wpkt-section__text_long">Send BNB to your MetaMask wallet. You can purchase BNB from exchanges such as Binance, Kraken, Kucoin, etc. and send it to your MetaMask wallet address.</p>
        <p class="v-wpkt-section__text v-wpkt-section__text_long">Go to PancakeSwap and connect Your MetaMask Wallet, by clicking in the top right corner.</p>
        <img src="/img/wpkt-step-4-1.svg" alt="Purchase wPKT on PancakeSwap" class="v-wpkt-section__screen" width="770" height="110" />
        <p class="v-wpkt-section__text v-wpkt-section__text_long">Click Trade and choose the amount of wPKT you want to buy using your BNB.</p>
        <img src="/img/wpkt-step-4-2.svg" alt="Click Trade" class="v-wpkt-section__screen" width="1280" height="135" />
        <p class="v-wpkt-section__text_highlighted">Holding wPKT enables participation in the highly lucrative world of DeFi. You can trade on PancakeSwap, as well as stake wPKT and earn yields on your holdings.</p>
        <a href="#" target="_blank" class="v-wpkt-section__button"><span>Learn How to Swap</span></a>
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
      meta: [{ hid: "description", name: "description", content: "Bridging PKT to Decentralized Finance" }],
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
      padding-bottom:rem(75);
      @include for-width(+desktop-xl) {
        padding-bottom:rem(50);
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
        height: rem(120);
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
        @include for-width(-tablet) {
          order:1;
        }
        @include for-width(-small-lg) {
          font-size: rem(84);
          line-height: rem(100);
        }
      }
      &__sub-title {
        @include for-width(-tablet) {
          order:2;
        }
        @include for-width(-small-lg) {
          margin: 0 rem(25) rem(15);
        }
      }
      &__text {
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
