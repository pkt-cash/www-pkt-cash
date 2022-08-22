<template>
  <div class="v-pkt">
    <section class="v-header-section">
      <HeaderInternal 
      title="Get PKT" 
      subtitle="The world’s internet bandwidth currency" 
      text="PKT is both the name of the blockchain and the trading ticker. The PKT currency is also referred to as PKT Cash. There are many ways to acquire PKT Cash." 
      button_1="Trade on Bittrex" 
      button_1_link="https://global.bittrex.com/Market/Index?MarketName=USDT-PKT"
      button_1_target="_blank"
      button_2="Trade on BitMart"
      button_2_link="https://www.bitmart.com/trade/en?symbol=PKT_USDT&layout=basic"
      button_2_target="_blank"
      button_pkt="Trade wPKT"
      button_pkt_link="https://pancakeswap.finance/info/token/0x1c25222994531c4ac35e4d94bbf7552c9aa92e32"
      button_pkt_target="_blank"
      is_arrow_down
      is_getpkt
      arrow_down_link="#start"
      />
    </section>
    <section class="v-pkt-section v-pkt-section__started" id="start">
      <div class="container">
        <h2 class="v-pkt-section__title">Getting started</h2>
        <template>
           <div class="v-pkt-section__started__learn">
             <div class="v-pkt-section__started__learn_item" v-for="(item) of learn_list">
                <h4 class="v-pkt-section__started__learn_item__title_small">{{ item.name }}</h4>
                <nuxt-link :to="item.link" class="v-pkt-section__button"><span>Learn</span></nuxt-link>
              </div>
          </div> 
        </template>
      </div>
    </section>
    <template>
      <section class="v-pkt-section v-pkt-section__steps"  v-for="(item,index) of steps_list" :class="{ 'ordered': item.versa }" :id="item.id">
        <div class="container">
          <div class="v-pkt-section__left">
            <h2 class="v-pkt-section__title">{{ item.name }}</h2>
            <p class="v-pkt-section__text">{{ item.text }}</p>
            <template v-if="item.id == 'first'">
                <div class="v-pkt-section__links">
                  <a :href="item.link" target="_blank" class="v-pkt-section__button"><span>{{ item.link_label }}</span></a>
                  <a :href="item.link_2" target="_blank" class="v-pkt-section__button"><span>{{ item.link_label_2 }}</span></a>
                </div>
            </template>
            <template v-else>
                <a :href="item.link" class="v-pkt-section__button"><span>{{ item.link_label }}</span></a>
            </template>
          </div>
          <div class="v-pkt-section__right">
            <img :src="item.img" :alt="item.name" />
          </div>
        </div>
      </section>
    </template>
    <section class="v-pkt-section v-pkt-section__invited">
      <div class="container">
        <h2 class="v-pkt-section__title">All Pkteers are Invited</h2>
        <p class="v-pkt-section__text">Once you have acquired PKT or wPKT, you become a Pkteer, joining the effort to decentralize access to the internet and empowering people around the world to monetize their internet bandwidth. Join our community of people around the world, supporting the vision of getting the next 1 billion people online. </p>
        <nuxt-link to="/resources" class="v-pkt-section__button"><span>Join the Community</span></nuxt-link>
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
      title: "Get PKT - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s internet bandwidth currency" }],
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
      learn_list: [
        {
          name: "What is PKT Cash?",
          link: "pkt",
        },
        {
          name: "What is wPKT?",
          link: "wpkt",
        },
        {
          name: "How to mine PKT?",
          link: "mine",
        },
      ],
      steps_list: [
        {
          name: "PKT is Listing on Cryptocurrency Exchanges",
          link: "https://global.bittrex.com/Market/Index?MarketName=USDT-PKT",
          link_label: "Buy PKT",
          link_2: "https://pancakeswap.finance/info/token/0x1c25222994531c4ac35e4d94bbf7552c9aa92e32",
          link_label_2: "Buy wPKT",
          text: "Some exchanges trade PKT, which is the mainnet, mined coin. Other exchanges list wPKT, which is a wrapped PKT token that exists on a 1:1 basis with PKT and can be swapped for PKT or staked in liquidity pools on Pancake Swap.",
          img: "/img/pkt-steps-1.png",
          id: "first",
        },
        {
          name: "You Will Need a PKT Wallet",
          link: "/wallet#options",
          link_label: "Get a PKT Wallet",
          versa: "versa",
          text: "Choose a PKT wallet that will safely store your PKT or wPKT. Different wallets work for different operating systems and mobile devices.",
          img: "/img/pkt-steps-2.png",
        },
        {
          name: "Peer to Peer OTC Trading",
          link: "https://t.me/joinchat/VTzmfU6P3YB7WrYx",
          link_label: "Join Trading Group",
          text: "OTC trading using escrow is active in the PKT Trading Group on Telegram. PKT miners and buyers safely trade by following the instructions in the chat group.",
          img: "/img/pkt-steps-3.png",
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.v-pkt {
  // Top section
  & .v-header-section {
    & .c-internal-header {
      @include for-width(-tablet-lg) {
        padding:rem(100) 0 rem(75);
      }
      @include for-width(-small-lg) {
        min-height:100vh;
        height:auto;
      }
      &__title {
        @include for-width(-small-lg) {
          font-size: rem(54);
          line-height: rem(70);
          text-transform:uppercase;
        }
      }
      &__sub-title {
        margin:rem(20) auto rem(30);
        @include for-width(-small-lg) {
          margin:rem(20) auto rem(20);
        }
      }
      &__text {
        max-width:55%;
        margin:0 auto rem(40);
        @include for-width(-tablet) {
          max-width:80%;
        }
        @include for-width(-small-lg) {
          max-width:85%;
          margin-bottom:rem(25);
        }
      }
      &__links {
        margin-top:rem(50);
        @include for-width(-small-lg) {
          display:block;
        }
        & .button_new {
          margin:rem(25) rem(10) 0;
        }
      }
      & .arrow_down {
        @include for-width(-tablet) {
          display:none;
        }
      }
    }
  }
  // Common
  &-section {
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
    &__left {
      @extend %t-left;
      width:50%;
      @include for-width(-tablet) {
        width:100%;
        text-align:center;
      }
    }
    &__right {
      @extend %t-center;
      width:50%;
      @include for-width(-tablet) {
        width:100%;
        text-align:center;
      }
      & img {
        width:60%;
        @include for-width(-tablet) {
          width:50%;
          margin-top:rem(50);
        }
        @include for-width(-small-lg) {
          width:60%;
          margin-top:rem(35);
        }
      }
    }
    &__title {
      @extend %heading_internal;
      @extend %heading-gradient-dark;
      margin-bottom:rem(35);
      @include for-width(+desktop-xl) {
        margin-bottom:rem(50);
      }
      @include for-width(-laptop) {
        margin-bottom:rem(25);
      }
      @include for-width(-tablet) {
        margin-bottom:rem(10);
      }
      @include for-width(-laptop) {
        margin-bottom:rem(15);
      }
      @include for-width(-small-lg) {
        font-size: rem(36);
        line-height: rem(46);
      }
    }
    &__text {
      @extend %pn;
      margin-bottom:rem(35);
      @include for-width(+desktop-xl) {
        margin-bottom:rem(50);
      }
      @include for-width(-laptop) {
        margin-bottom:rem(25);
      }
    }
    &__links {
      @extend %df;
      @extend %aic;
      @extend %jcs;
      margin-top:rem(55);
      @include for-width(-desktop-medium) {
        margin-top:rem(35);
      }
    }
    &__button {
      @extend %btn-new;
      @extend %btn_blue_new;
      padding:rem(15) rem(50);
      display:inline-block;
      width:auto;
      @include for-width(-desktop-lg) {
        display:inline-block;
        width:auto;
      }
      @include for-width(-laptop) {
        padding:rem(12) rem(35);
      }
      @include for-width(-small-lg) {
        padding:rem(10) rem(25);
      }
    }
  }
  // Sections
  &-section__started {
    @extend %t-center;
    padding:rem(100) 0 rem(50);
    @include for-width(-desktop-medium) {
      padding-bottom:0;
    }
    @include for-width(-tablet) {
      padding:rem(50) 0 0;
    }
    @include for-width(-small-lg) {
      padding:rem(65) 0 0;
    }
    & .container {
      background-color:$light_bg;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      border-radius: rem(20);
      padding:rem(40) rem(40) rem(75);
      @include for-width(+desktop-xl) {
        padding:rem(60) rem(60) rem(75);
      }
      @include for-width(-laptop) {
        padding:rem(25) rem(35) rem(50);
      }
      @include for-width(-tablet) {
        max-width:90%;
      }
      @include for-width(-small-lg) {
        padding:rem(25) rem(15);
      }
    }
    & .v-pkt-section__title {
      color: $dark_blue_new;
      margin-bottom:rem(45);
      background:none;
      background-clip: unset;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: initial;
      @include for-width(+desktop-xl) {
        margin-bottom:rem(50);
      }
      @include for-width(-small-lg) {
        margin-bottom:rem(25);
      }
    }
    &__learn {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      align-items: stretch;
      @include for-width(-tablet) {
        display:block;
        max-width:80%;
        margin:0 auto;
      }
      &_item {
        width:32%;
        background: $light_blue_new;
        border-radius: rem(20);
        padding:rem(30) rem(45) rem(45);
        @include for-width(+desktop-xl) {
          padding:rem(30) rem(55) rem(50);
        }
        @include for-width(-laptop) {
          padding:rem(25) rem(25) rem(35);
        }
        @include for-width(-tablet) {
          width:100%;
          margin-bottom:rem(25);
        }
        &__title_small {
          @extend %heading-small;
          @extend %semibold;
          color:$white;
        }
      }
      & .v-pkt-section__button {
        color:$light_blue_new;
        background:$white;
        width:80%;
        margin:rem(35) auto 0;
        @include for-width(-desktop-medium) {
          width:90%;
        }
        @include for-width(-laptop) {
          margin-top:rem(25);
        }
        @include for-width(-tablet) {
          width:rem(200);
        }
        @include for-width(-small-lg) {
          width:rem(175);
          margin-top:rem(20);
        }
        &:hover {
          color:$light_blue_hover;
          background:$white;
        }
      }
    }
  }
  #first {
    & .v-pkt-section__left {
      padding-right:rem(75);
      @include for-width(-laptop) {
        padding-right:rem(50);
      }
      @include for-width(-tablet) {
        padding:0 rem(100);
      }
      @include for-width(-small-lg) {
        padding:0;
      }
    }
    & .v-pkt-section__right {
      & img {
        width:75%;
        @include for-width(-laptop) {
          width:80%;
        }
        @include for-width(-tablet) {
          width:50%;
          margin-top:rem(50);
        }
        @include for-width(-small-lg) {
          width:60%;
          margin-top:rem(35);
        }
      }
    }
  }
  &-section__steps {
    padding:rem(100) 0 rem(0);
    @include for-width(-laptop) {
      padding:rem(75) 0 rem(0);
    }
    & .container {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      @include for-width(-tablet) {
        display:block;
      }
    }
    & .v-pkt-section__left {
      padding-right:rem(150);
      @include for-width(-laptop) {
        padding-right:rem(75);
      }
      @include for-width(-tablet) {
        padding:0 rem(100);
      }
      @include for-width(-small-lg) {
        padding:0;
      }
    }
    & .v-pkt-section__links {
      @include for-width(-laptop) {
        justify-content: center;
      }
      & .v-pkt-section__button {
        width:rem(225);
        @include for-width(-laptop) {
          width:rem(200);
        }
        @include for-width(-tablet) {
          width:rem(175);
          margin:0 rem(10);
        }
        &:nth-child(odd) {
          margin-right:rem(35);
          @include for-width(-laptop) {
            margin-right:rem(25);
          }
          @include for-width(-tablet) {
            margin:0 rem(10);
          }
        }
      }
    }
    &.ordered {
      position:relative;
      &:before {
        content:'';
        position:absolute;
        top:-50px;
        width:rem(150);
        height:rem(100);
        transform: matrix(-0.98, -0.19, -0.19, 0.98, 0, 0);
        background-image:url(/img/pkt-steps-arrow_1.svg);
        background-repeat:no-repeat;
        background-size:contain;
        background-position:center;
        left:55%;
        -webkit-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        transform: translate(-50%,0);
        @include for-width(-laptop) {
          width:rem(100);
          height:rem(75);
          top:-25px;
        }
        @include for-width(-tablet) {
          top:-15px;
          left:50%;
        }
        @include for-width(-small-lg) {
          width:rem(75);
          height:rem(50);
          top:0;
        }
      }
      &:after {
        content:'';
        position:absolute;
        bottom:-100px;
        width:rem(150);
        height:rem(100);
        transform: rotate(-10.77deg);
        background-image:url(/img/pkt-steps-arrow_2.svg);
        background-repeat:no-repeat;
        background-size:contain;
        background-position:center;
        left:50%;
        -webkit-transform: translate(-50%,0);
        -moz-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        -o-transform: translate(-50%,0);
        transform: translate(-50%,0);
        @include for-width(-laptop) {
          width:rem(100);
          height:rem(75);
        }
        @include for-width(-tablet) {
          bottom:-60px;
        }
        @include for-width(-small-lg) {
          width:rem(75);
          height:rem(50);
        }
      }
      & .v-pkt-section__left {
        order:2;
        padding-left:rem(150);
        padding-right:0;
        @include for-width(-laptop) {
          padding-left:rem(75);
        }
        @include for-width(-tablet) {
          padding:0 rem(100);
        }
        @include for-width(-small-lg) {
          padding:0;
        }
      }
      & .v-pkt-section__right {
        order:1;
      }
    }
  }
  &-section__invited {
    @extend %t-center;
    padding:rem(100) 0 rem(125);
    @include for-width(-laptop) {
      padding:rem(75) 0;
    }
    @include for-width(-tablet) {
      padding:rem(75) 0;
    }
    @include for-width(-small-lg) {
      padding:rem(50) 0 rem(65);
    }
    & .v-pkt-section__text {
      max-width:50%;
      margin:rem(35) auto rem(50);
      @include for-width(-laptop) {
        max-width:60%;
        margin:rem(15) auto rem(35);
      }
      @include for-width(-tablet) {
        max-width:70%;
      }
      @include for-width(-small-lg) {
        max-width:100%;
      }
    }
  }
}
</style>
