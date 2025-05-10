<template>
  <div class="v-rewards" id="top">
    <section class="v-rewards_header">
      <div class="container">
        <a href="/" title="PKT Cash" class="nav__logo"><img src="/img/logo-new.svg" alt="PKT Cash" /></a>
      </div>
    </section>
    <section class="v-top">
      <div class="container">
        <h1 class="v-top__title">The Future of Media powered by the people </h1>
        <h5 class="v-top__subtitle white">Get paid to power the network</h5>
        <img src="/img/lead_funnel/pkt-base.webp" alt="PKT and Base" class="v-top__asset" />
        <div class="v-rewards-common">
          <div class="v-rewards-common__text">
            <p class="white">PKT is a decentralized media network on Base that pays people to stake and host infrastructure for the network. </p>
            <p class="white">The audience-facing application offers a platform for content distributors—ranging from major players like Netflix and Amazon to smaller competitors and publishers—enabling them to reach global audiences through an experience similar to Apple TV using blockchain and mesh networking technology.</p>
          </div>
          <div class="v-rewards-common__img">
            <VideoPlayer videoId="kEcWGeMnwn4" coverImage="/img/rewards-video-cover.webp" />
          </div>
          <div class="v-rewards-common__links">
            <a href="#join-community" class="c-common-button c-common-button__filled"><span>Join Community</span></a>
          </div>
        </div>
      </div>
    </section>
    <section class="v-defi v-rewards-wrap">
      <div class="container">
        <h2 class="v-rewards__h2">Get paid to power the network</h2>
        <h5 class="v-rewards__h5">Use your computer to route content on the PKT Network</h5>
        <div class="v-rewards-common">
          <div class="v-rewards-common__img">
            <img src="/img/lead_funnel/pkt-lead-2.webp" alt="The most lucrative liquidity pool in DeFi" class="desktop" />
            <img src="/img/lead_funnel/pkt-lead-2-mobile.webp" alt="The most lucrative liquidity pool in DeFi" class="mobile" />
          </div>
          <div class="v-rewards-common__text">
            <p>When buying PKT and pairing it with an app on your computer, which powers the network, you get paid daily rewards. These rewards can be turned into cash, crypto or gift cards whenever you want or will be used to buy content on the network.</p>
            <p>Join the community to learn how to power the network and get involved. Together we can change the entertainment business forever!</p>
            <div class="v-rewards-common__text_links">
              <a href="https://app.uniswap.org/explore/tokens/base/0x917F39Bb33B2483Dd19546b1E8D2f09ce481ee44" target="_blank" class="c-common-button c-common-button__filled"><span>Buy PKT</span></a>
              <a href="https://t.me/pktcash" target="_blank" class="c-common-button c-common-button__blue"><span>Join Community</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="v-affiliate v-rewards-wrap">
      <div class="container">
        <h2 class="v-rewards__h2 white">Get paid to stake with friends!</h2>
        <h5 class="v-rewards__h5 white">Earn a yield bonus for every friend who joins!</h5>
        <div class="v-rewards-common">
          <div class="v-rewards-common__text">
            <p class="white">If anyone uses your affiliate code, they get a 1% yield bonus. Plus, you get a 4% yield bonus for each person who uses your affiliate code. You also get an additional 1% bonus for anyone they sign up 1 tier down.</p>
            <p class="white">Just connect your wallet to the dashboard to get your code.</p>
            <a href="https://pkt.cash/app_dot_pkt/overview?ref=PKT-111-HHP" target="_blank" class="c-common-button c-common-button__filled"><span>Earn your bonus</span></a>
          </div>
          <div class="v-rewards-common__img">
            <img src="/img/lead_funnel/pkt-lead-3.webp" alt="Get paid to stake with friends!" class="desktop" />
            <img src="/img/lead_funnel/pkt-lead-3-mobile.webp" alt="Get paid to stake with friends!" class="mobile" />
          </div>
        </div>
      </div>
    </section>
    <section class="v-join" id="join-community">
      <div class="container">
        <h2 class="v-rewards__h2">Join the PKT community</h2>
        <h5 class="v-rewards__h5">Stay connected with the latest development in the PKT Ecosystem</h5>
        <div class="v-join_links">
          <a class="c-common-button c-common-button__filled" href="https://discord.gg/pktcash" target="_blank"><span>Join Discord</span></a>
          <a class="c-common-button c-common-button__filled" href="https://t.me/pktcash" target="_blank"><span>Join Telegram</span></a>
        </div>
      </div>
      <div class="container v-faq">
        <h2 class="v-rewards__h2">FAQ</h2>
        <div class="v-faq_inner">
          <VueFaqAccordion :items="faqItems" />
        </div>
      </div>
    </section>
    <section class="v-rewards_footer">
      <div class="container">
        <div class="v-rewards_footer__logo">
          <a href="/" title="PKT Cash" class="v-rewards_footer__logo_link"><img src="/img/logo-new.svg" alt="PKT Cash" /></a>
        </div>
        <div class="v-rewards_footer__copy">
            <a href="https://github.com/cjdelisle/CJDNS-contact" target="_blank" class="v-rewards_footer__copy_text">
              ©{{currentYear}} PKT Cash | {{ $t("footer.policy") }}
            </a>
        </div>
        <div class="v-rewards_footer__up">
          <a href="#top" title="Scroll to top" class="v-rewards_footer__up_scrolltop"><img src="/img/lead_funnel/icon-arrow-up.svg" alt="PKT Cash"></a>
        </div>
      </div>
      <div class="v-rewards_footer__copy mobile">
          <a href="https://github.com/cjdelisle/CJDNS-contact" target="_blank" class="v-rewards_footer__copy_text">
            ©{{currentYear}} PKT Cash | {{ $t("footer.policy") }}
          </a>
      </div>
    </section>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
import VideoPlayer from '~/components/Common/VideoPlayer.vue';
export default {
  components: {
    VueFaqAccordion,
    VideoPlayer
  },
  data() {
    return {
     currentYear: new Date().getFullYear(),
     faqItems: [
				{
					title: "What is PKT?",
					value: "PKT is a utility token. PKT is a decentralized ecosystem powered by the people. Contributors earn PKT tokens by staking into the ecosystem and contributing bandwidth resources that power the decentralized web. The result is a secure, high speed, permissionless, user-operated web infrastructure. Websites built in the PKT Network are censorship-resistant, yet reachable from any web browser using a reverse VPN and payments can be paid directly to a web URL within the network."
				},
				{
					title: "What is PKT staking?",
					value: "Staking is like buying a treasury note and earning an APY. When you stake your PKT, you lock the tokens up in a smart contract for a period of time you choose and earn. By incentivizing people to setup infrastructure for the PKT Network, this expands the utility, accessibility and resilience of the network worldwide."
				},
        {
					title: "What is Staking liquidity?",
					value: "To be a liquidity provider you must stake the same amount of PKT and ETH and you will be provided a liquidity token which represents the total amount of assets being staked. You can then stake this LP token and receive up to 4x yields!"
				},
        {
					title: "Why Stake PKT tokens?",
					value: "In return for your staked PKT tokens, you earn additional PKT rewards, similar to earning interest at a bank. The more PKT tokens you stake, and the longer you keep them staked, the more rewards you can earn. This is a way for you to make more money from your PKT tokens without having to sell them. It's also a cool way to be part of the project and contribute to its growth and security."
				},
        {
					title: "How to Stake PKT tokens?",
					value: "To stake PKT you will first need to purchase the PKT token on the Base blockchain. Once you own your PKT, you will be able to follow the staking steps on https://pkt.cash/stake to lock up your tokens and start earning rewards."
				},
        {
					title: "How to Buy PKT tokens?",
					value: "To buy PKT tokens you will need to goto the Base blockchain at www.base.org. You will need goto the bridge tab and choose between Superbridge or Brid.gg to bridge your assets to and from Base. Connect your wallet. Either connect using your metamask wallet or coinbase wallet. Once collected you can bridge your ethereum to base."
				},
        {
					title: "Why are we building the PKT Network?",
					value: "The PKT Network reduces the high infrastructure costs required to stream media, by incentivizing the community to contribute their resources for rewards. By doing so we create a distributed, resilient network, that is not reliant on the infrastructure of monoplies."
				},
        {
					title: "What does the PKT Network do?",
					value: "The PKT Network is a high speed data network, designed to deliver media content to users. The community is paid for continuing their Internet and infrastructure resources, which they can use to pay for content on the platforms which exist on the network."
				},
			]
    };
  },
  head() {
    return {
      title: "PKT Cash Rewards",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get paid to power the network'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'PKT Cash Rewards'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Get paid to power the network'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/PKT Logo.jpg'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ],
      bodyAttrs: {
        class: 'lead_funnel_wrap'
      }
    };
  },

};
</script>

<style lang="scss">
.lead_funnel_wrap {
  & .c-header {
    @extend %dn;
  }
  & .c-footer {
    @extend %dn;
  }
}
.v-rewards {
  background-color:$black_blue;
  position:relative;
  &:before {
    content:'';
    background-image:url(/img/lead_funnel/pkt-lead-bg-1.webp);
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:40%;
    background-position:left top;
    background-size:100%;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-small-lg) {
      height:25%;
      background-size:cover;
      background-image:url(/img/lead_funnel/pkt-lead-bg-1-mobile.webp);
    }
  }
  &:after {
    content:'';
    background-image:url(/img/lead_funnel/pkt-lead-bg-2.webp);
    position:absolute;
    bottom:30%;
    right:0;
    width:100%;
    height:45%;
    background-position:left top;
    background-size:cover;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-desktop-lg) {
      height:40%;
    }
    @include for-width(-desktop-med) {
      bottom:25%;
    }
    @include for-width(-small-lg) {
      display:none;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  &_header {
    padding:rem(19) 0;
    @include for-width(-small-lg) {
      padding:rem(15) 0;
    }
    & .container {
      background-image:url(/img/lead_funnel/pkt-lead-top-bg.svg);
      background-position:center bottom;
      background-size:cover;
      background-repeat:no-repeat;
      @extend %df;
      @extend %jcc;
      @extend %aic;
      & .nav__logo {
        @extend %db;
        & img {
          width:rem(86);
          height:rem(35);
          @extend %img_object;
          @include for-width(-small-lg) {
            width:rem(75);
            height:rem(30);
          }
        }
      }
    }
  }
  &__h2 {
    @extend %h2-common;
    @extend %t-center;
    margin-bottom:rem(12);
    @include for-width(-small-lg) {
        font-size: rem(38);
        line-height: rem(42);
    }
  }
  &__h5 {
    @extend %p-big-common;
    @extend %t-center;
    @include for-width(-tablet) {
      padding-bottom:0;
    }
    @include for-width(-small-lg) {
      font-size: rem(18);
      line-height: rem(26);
    }
  }
  &-wrap {
    padding-top:rem(80);
    @include for-width(-desktop-med) {
      padding:rem(80) rem(30) 0;
    }
    @include for-width(-small-lg) {
      padding:rem(64) rem(20) 0;
    }
    & .container {
      border-radius:rem(40);
      padding:rem(40);
      box-shadow: inset 1px 1px 8px rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      @include for-width(-small-lg) {
        padding:rem(28) rem(20) rem(20);
      }
    }
  }
  &-common {
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    @include for-width(-tablet) {
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;
    }
    &__text {
      & p {
        @extend %p-big-common;
        @include for-width(-tablet) {
          text-align:center;
        }
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(24);
        }
      }
      & .c-common-button {
        margin-top:rem(24);
        @include for-width(-small-lg) {
          margin-top:rem(16);
        }
      }
    }
    &__img {
      & img {
        width:100%;
      }
      & .mobile {
        display:none;
        @include for-width(-small-lg) {
          display:block;
          margin:rem(24) 0;
        }
      }
      & .desktop {
        @include for-width(-small-lg) {
          display:none;
        }
      }
    }
  }
  & .v-top {
    padding-top:rem(120);
    @include for-width(-tablet) {
      padding-top:rem(80);
    }
    @include for-width(-small-lg) {
      padding-top:rem(30);
    }
    & .container {
      @extend %df;
      @extend %jcc;
      @extend %aic;
      @extend %fdc;
    }
    &__title {
      @extend %h1-common;
      @extend %t-center;
      margin-bottom:rem(24);
      max-width:rem(800);
      @include for-width(-tablet) {
        font-size: rem(56);
        line-height: rem(70);
      }
      @include for-width(-small-lg) {
        font-size: rem(38);
        line-height: rem(42);
      }
    }
    &__subtitle {
      @extend %p-big-common-thick;
      margin-bottom:rem(40);
      @include for-width(-small-lg) {
        margin:0 auto rem(24);
        font-size: rem(18);
        line-height: rem(26);
        max-width:100%;
        text-align:center;
      }
    }
    &__asset {
      width:rem(330);
      height:rem(55);
      @extend %img_object;
      margin-bottom:rem(40);
      @include for-width(-tablet) {
        width:rem(275);
        height:rem(40);
      }
      @include for-width(-small-lg) {
        width:rem(265);
        height:rem(45);
        margin-bottom:rem(30);
      }
    }
    & .v-rewards-common {
      background: rgba(255, 255, 255, 0.08);
      box-shadow: inset 1px 1px 8px rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border-radius: rem(40);
      padding:rem(40);
      width:100%;
      @extend %db;
      @include for-width(-small-lg) {
        padding:rem(28) rem(10) rem(20);
      }
      &__text {
        text-align:center;
        @include for-width(-laptop) {
          max-width:rem(750);
          margin:0 auto;
        }
        & p {
          &:first-child {
            margin-bottom:rem(12);
          }
        }
      }
      &__img {
        @extend %df;
        @extend %jcsb;
        @extend %aic;
        margin:rem(24) 0;
        @include for-width(-tablet) {
          width:100%;
        }
        @include for-width(-small-lg) {
          display:block;
        }
        & gecko-coin-price-chart-widget {
          width:65%;
          @include for-width(-laptop) {
            width:62%;
          }
          @include for-width(-small-lg) {
            width:100%;
          }
        }
      }
      &__links {
        @extend %df;
        @extend %jcc;
        @extend %aic;
        & .c-common-button {
          margin: 0 rem(10);
          @include for-width(-small-lg) {
            margin: 0;
          }
        }
      }
    }
  }
  & .v-defi {
    & .container {
      background: rgba(255, 255, 255, 0.92);
    }
    & .v-rewards__h2 {
      color:$black_blue;
    }
    & .v-rewards__h5 {
      color:$black_blue;
    }
    & .v-rewards-common {
      &__text {
        width:55%;
        @include for-width(-tablet) {
          width:100%;
        }
        & p {
          color:$black_blue;
          &:first-child {
            margin-bottom:rem(20);
          }
        }
        &_links {
          @extend %df;
          @extend %jcs;
          @extend %aic;
          @include for-width(-tablet) {
            justify-content: center;
          }
          & .c-common-button__blue {
            margin-left:rem(10);
          }
        }
      }
      &__img {
        width:45%;
        @include for-width(-tablet) {
          width:100%;
        }
      }
    }
  }
  & .v-affiliate {
    & .container {
      background: rgba(255, 255, 255, 0.08);
    }
    & .v-rewards__h5 {
      @include for-width(-small-lg) {
        max-width: 300px;
        margin: 0 auto;
      }
    }
    & .v-rewards-common {
      &__text {
        width:55%;
        @include for-width(-tablet) {
          width:100%;
          order:2;
          text-align:center;
        }
        & p {
          &:first-child {
            margin-bottom:rem(20);
          }
        }
      }
      &__img {
        width:45%;
        @include for-width(-tablet) {
          width:100%;
          order:1;
        }
      }
    }
  }
  & .v-join {
    padding:rem(160) 0 0;
    background-image:url(/img/lead_funnel/pkt-join-bg.svg);
    background-position:center top -275px;
    background-size:100%;
    background-repeat:no-repeat;
    @include for-width(-desktop-med) {
      background-position:center top -145px;
    }
    @include for-width(-tablet) {
      background-position:center top -25px;
    }
    @include for-width(-small-lg) {
      padding:rem(100) 0 0;
      background-image:url(/img/lead_funnel/pkt-join-bg-mobile.svg);
      background-position:center top;
    }
    & .container {
      z-index:3;
      position:relative;
    }
    &_links {
      @extend %df;
      @extend %jcc;
      @extend %aic;
      margin-top:rem(28);
      & a {
        margin:0 rem(5);
      }
    }
    & .v-faq {
      padding-top:rem(160);
      @include for-width(-small-lg) {
        padding-top:rem(90);
      }
      &_inner {
        margin-top:rem(28);
        width:100%;
        max-width:rem(1200);
        & .faq-wrapper {
          max-width:rem(1200);
        }
        & .accordion {
          border:0;
          margin:0;
          &__item {
            border-bottom:0;
            margin-top:rem(24);
            &:first-child {
              margin-top:0;
            }
          }
          &__title {
            padding:rem(10) rem(24) rem(10) rem(100);
            margin-bottom:rem(24);
            position:relative;
            @include for-width(-tablet) {
              padding:rem(10) rem(24) rem(10) rem(50);
            }
            @include for-width(-small-lg) {
              margin-bottom:rem(16);
              padding:rem(10) rem(10) rem(10) rem(74);
            }
            &:before {
              content:'';
              background-image:url(/img/lead_funnel/icon-question-mark.svg);
              position:absolute;
              top:0;
              left:rem(28);
              width:rem(42);
              height:rem(42);
              background-position:center center;
              background-size:contain;
              background-repeat:no-repeat;
              z-index:1;
              @include for-width(-desktop-medium) {
                width:rem(36);
                height:rem(36);
              }
              @include for-width(-tablet) {
                left:0;
              }
              @include for-width(-small-lg) {
                left:rem(16);
              }
            }
            &-text {
              @extend %p-common-bold;
            }
          }
          &__toggle-button {
            background-image:url(/img/lead_funnel/pkt-icon-arrow-right.svg);
            background-position:center center;
            background-size:contain;
            background-repeat:no-repeat;
            width:rem(24);
            height:rem(24);
            @include for-width(-desktop-medium) {
              width:rem(20);
              height:rem(20);
            }
            &:before {
              display:none;
            }
            &:after {
              display:none;
            }
            &_active {
              transform: rotate(90deg);
            }
          }
          &__value {
            padding:rem(16) rem(24) rem(16) rem(100);
            background: linear-gradient(90deg, rgba(80, 93, 208, 0.08) 0%, rgba(80, 93, 208, 0.08) 100%);
            border-radius: rem(8);
            position:relative;
            @include for-width(-tablet) {
              padding:rem(16) rem(24) rem(16) rem(50);
            }
            @include for-width(-small-lg) {
              padding:rem(16) rem(24);
            }
            &:before {
              content:'';
              background-image:url(/img/lead_funnel/pkt-faq-line.svg);
              position:absolute;
              top:0;
              left:0;
              width:100%;
              height:rem(4);
              background-position:center center;
              background-size:100%;
              background-repeat:no-repeat;
            }
            &:after {
              content:'';
              background-image:url(/img/lead_funnel/pkt-faq-line.svg);
              position:absolute;
              bottom:0;
              left:0;
              width:100%;
              height:rem(4);
              background-position:center center;
              background-size:100%;
              background-repeat:no-repeat;
            }
            & div {
              @extend %p-common;
              @extend %t-left;
              padding-right:rem(76);
              @include for-width(-tablet) {
                padding-right:rem(50);
              }
              @include for-width(-small-lg) {
                padding:0;
              }
            }
          }
        }
      }
    }
  }
  &_footer {
    margin-top:rem(80);
    padding:rem(29) 0;
    background-image:url(/img/lead_funnel/pkt-lead-bottom-bg.svg);
    background-position:center top;
    background-size:cover;
    background-repeat:no-repeat;
    @include for-width(-small-lg) {
      margin-top:rem(60);
      padding:rem(24) rem(20);
    }
    & .container {
      @extend %df;
      @extend %jcsb;
      @extend %aic;
    }
    &__logo {
      @extend %t-left;
      &_link {
        @extend %db;
        & img {
          width:rem(86);
          height:rem(35);
          @extend %img_object;
        }
      }
    }
    &__copy {
      @extend %t-center;
      @include for-width(-small-lg) {
        display:none;
      }
      &_text {
        @extend %p-common-thick;
        color:$white_50;
      }
    }
    &__up {
      @extend %t-right;
      &_scrolltop {
        & img {
          width:rem(48);
          height:rem(48);
          @extend %img_object;
          @include for-width(-tablet) {
            width:rem(40);
            height:rem(40);
          }
        }
      }
    }
    & .mobile {
      display:none;
      @include for-width(-small-lg) {
        display:block;
        margin:rem(20) 0 0;
      }
    }
  }
}
</style>
