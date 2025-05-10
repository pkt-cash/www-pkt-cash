<template>
  <div class="v-network-steward">
    <section class="v-header-section">
      <SpotAInternal 
      :title="this.$t('steward.steward_title')"
      text="The Network Steward is a wallet address that receives 20% of all daily yields to fund the ongoing development of the PKT Network. A new custodian of the Network Steward wallet is democratically elected weekly by proof-of-stake voting."
      :button_1="this.$t('steward.steward_button_1')"
      button_1_link="https://app.pkt.cash/network-steward/"
      button_1_target="_blank"  />
    </section>
    <!-- <section class="v-indicators-section">
      <div class="container">
        <div class="v-indicators-section__inner">
          <div class="v-indicators-section_data">
            <h5 class="v-indicators-section_data__title">Wallet balance</h5>
            <p class="v-indicators-section_data__value green">11,738,239 PKT</p>
          </div>
          <div class="v-indicators-section_data">
            <h5 class="v-indicators-section_data__title">Total Burned</h5>
            <p class="v-indicators-section_data__value green">693,678,807 PKT</p>
          </div>
          <div class="v-indicators-section_data">
            <h5 class="v-indicators-section_data__title">Total spent</h5>
            <p class="v-indicators-section_data__value green">271,563,713 PKT</p>
          </div>
          <div class="v-indicators-section_data">
            <h5 class="v-indicators-section_data__title">Total Received</h5>
            <p class="v-indicators-section_data__value green">965,242,520 PKT</p>
          </div>
          <div class="v-indicators-section_data">
            <h5 class="v-indicators-section_data__title">Votes</h5>
            <p class="v-indicators-section_data__value green">63.73 mPKT</p>
          </div>
          <div class="v-indicators-section_data">
            <h5 class="v-indicators-section_data__title">Candidates</h5>
            <p class="v-indicators-section_data__value green">2,179,404, PKT</p>
          </div>
        </div>
      </div>
    </section> -->
    <section class="v-charter-section">
      <div class="container">
        <div class="v-charter-section__inner">
          <div class="v-charter-section__inner_left">
            <h2>Network Steward Charter</h2>
            <a href="https://docs.pkt.cash/governance" target="_blank" class="c-common-button c-common-button__filled"><span>{{ $t("common.learn_more") }}</span></a>
          </div>
          <div class="v-charter-section__inner_right">
            <p>The Network Steward is designed to give all PKT community members a say in the network governance. Using a proof-of-stake voting system, a weekly election determines the Network Steward. In order for a candidate to remain the Network Steward, they must be re-elected every week. PKT must be staked in a lockup in order to vote. This governance mechanism is in live beta.</p>
            <p>The objective of the Network Steward is for the network to self fund the development of the roadmap, network maintenance and community growth. The community should elect candidates that are motivated to benefit the project and whose agenda is deemed beneficial by the majority of the electorate. This governance system ensures the Network Steward funds are purposefully deployed to support the PKT project and network.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="v-grants-section">
      <div class="container">
        <h2>{{ $t("steward.steward_grants_title") }}</h2>
        <div class="v-grants-section__inner">
          <div class="v-grants-section_data">
            <img class="v-grants-section_data__img" src="/img/common/icons/pkt-vpn.svg" alt="PKT x VPN" />
            <h5 class="v-grants-section_data__title">PKT x VPN</h5>
            <p class="v-grants-section_data__text">This project was to build the VPN infrastructure that powers the PKT Network and leverages cjdns exit nodes for VPN access points.</p>
          </div>
          <div class="v-grants-section_data">
            <img class="v-grants-section_data__img" src="/img/common/icons/pkt-ts.svg" alt="PKT x Community" />
            <h5 class="v-grants-section_data__title">PKT x Community</h5>
            <p class="v-grants-section_data__text">This project was a team effort to create the website, text translations, documentation, community socials, and educational materials for PKT.</p>
          </div>
          <div class="v-grants-section_data">
            <img class="v-grants-section_data__img" src="/img/common/icons/pkt-nlnet.svg" alt="PKT x NLnet" />
            <h5 class="v-grants-section_data__title">PKT x NLnet</h5>
            <p class="v-grants-section_data__text">NLnet is a not-for-profit philanthropic organization providing micro-grants towards projects deemed relevant for the PKT ecosystem.</p>
          </div>
        </div>
        <!-- <a href="https://github.com/pkt-cash/ns-projects" target="_blank" class="c-common-button c-common-button__filled"><span>{{ $t("steward.steward_grants_link") }}</span></a> -->
      </div>
    </section>
    <section class="v-simple-section">
      <SimpleText :list="governance" />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import SimpleText from "~/components/Common/SimpleText";
export default {
  components: {
    SpotAInternal,
    SimpleText
  },
  head() {
    return {
      title: "Network Steward | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Network Steward is a wallet address that earns 20% from every mined block to fund the ongoing development of the PKT Network. The custodian of the Network Steward wallet is democratically elected weekly by proof-of-stake voting.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Network Steward | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'The Network Steward is a wallet address that earns 20% from every mined block to fund the ongoing development of the PKT Network. The custodian of the Network Steward wallet is democratically elected weekly by proof-of-stake voting.'
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
  data() {
    return {
      governance: [
        {
          single_title: "Governance By the Community",
          single_text: "It is the belief of the PKT founding community members that any unaccountable authority, no matter how benevolent, will eventually fall victim to corruption, inefficiency or simple failure to innovate. To solve this, PKT holders elect the Network Steward on a weekly basis. Voters can choose to delegate their vote so another party votes on their behalf.",
          button_1: "Learn more",
          button_1_link: "https://docs.pkt.cash/governance",
          button_1_target: "_blank",
        }
      ],
    };
  },
  // async middleware({ store }) {
  //   await store.dispatch('pkt-analytics/load')
  // },
  // async mounted() {
  //   await this.$store.dispatch('pkt-analytics/load')
  // }
};
</script>
<style lang="scss">
.v-network-steward {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/ns-main-bg.webp);
  background-position:center top;
  background-size:cover;
  background-repeat:no-repeat;
  @include for-width(-small-lg) {
    background-image:url(/img/ns-main-bg-mobile.webp);
  }
  &:before {
    content:'';
    background-image:url(/img/ns-top-graphic-main.webp);
    position:absolute;
    top:0;
    right:0;
    width:40%;
    height:40%;
    background-position:top center;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    // @include for-width(-desktop-lg) {
    //   width:48%;
    //   height:48%;
    // }
    @include for-width(-desktop-medium) {
      background-position:top right -50px;
    }
    @include for-width(-tablet-lg) {
      background-position:top right -95px;
    }
    @include for-width(-tablet) {
      background-position:top 50px right -115px;
    }
    @include for-width(-small-lg) {
      display:none;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    padding:rem(150) 0 rem(90);
    @include for-width(-tablet) {
      padding:rem(120) 0 rem(90);
    }
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(80);
    }
    &__wrap {
      max-width:rem(820);
    }
    &__title {
      @include for-width(-small-lg) {
        max-width:rem(250);
      }
    }
  }
  & .v-indicators-section {
    &__inner {
      @extend %dg;
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: rem(40) rem(40);
      @include for-width(-tablet-lg) {
        grid-gap: rem(20) rem(20);
      }
      @include for-width(-tablet) {
        -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
      }
      @include for-width(-small-lg) {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        grid-gap: rem(20) 0;
      }
    }
    &_data {
      padding:rem(20) rem(30) rem(30);
      border-radius:rem(20);
      background-color:$black_blue_light;
      @include for-width(-tablet-lg) {
        padding:rem(20) rem(20) rem(25);
      }
      @include for-width(-small-lg) {
        padding:rem(20) rem(20) rem(30) rem(30);
      }
      &__title {
        font-size: rem(16);
        line-height: rem(30);
        @extend %inter_medium;
        color:$white;
        margin-bottom:rem(10);
      }
      &__value {
        font-size: rem(30);
        line-height: rem(30);
        @extend %inter_semibold;
      }
    }
  }
  & .v-charter-section {
    // padding:rem(225) 0 rem(70);
    padding: rem(50) 0 rem(70);
    @include for-width(-tablet) {
      padding:0 0 rem(70);
    }
    @include for-width(-small-lg) {
      padding:0;
    }
    &__inner {
      @extend %dg;
      -ms-grid-columns: 57% 43%;
      grid-template-columns: 57% 43%;
      @include for-width(-tablet) {
        display:block;
      }
      &_left {
        @include for-width(-tablet) {
          margin-bottom:rem(35);
        }
        & h2 {
          @extend %h2-common;
          max-width:rem(450);
          margin-bottom:rem(15);
          @include for-width(-small-lg) {
            max-width:rem(250);
          }
        }
        & .c-common-button {
          @include for-width(-small-lg) {
            display:none;
          }
        }
      }
      &_right {
        & p {
          @extend %p-big-common;
          margin-bottom:rem(25);
        }
        & .c-common-button {
          display:none;
          @include for-width(-small-lg) {
            display:inline-block;
          }
        }
      }
    }
  }
  & .v-grants-section {
    @extend %t-center;
    padding-bottom:rem(130);
    @include for-width(-tablet) {
      padding-bottom:rem(80);
    }
    @include for-width(-small-lg) {
      padding-bottom:rem(70);
      padding-top:rem(90);
    }
    & h2 {
      @extend %h2-common;
      @extend %t-left;
    }
    &__inner {
      @extend %dg;
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 rem(40); 
      margin:rem(50) 0;
      @include for-width(-tablet-lg) {
        grid-gap: 0 rem(20);
      }
      @include for-width(-small-lg) {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        grid-gap: rem(20) 0;
        margin:rem(30) 0;
      }
    }
    &_data {
      padding:rem(40) rem(30) rem(60);
      border-radius:rem(20);
      background-color:$black_blue_light;
      @extend %t-center;
      @include for-width(-tablet) {
        padding:rem(30) rem(15) rem(40);
      }
      &__title {
        @extend %p-big-common-bold;
        margin:rem(30) 0 rem(15);
      }
      &__text {
        @extend %p-common-thick;
        color:$white_50;
      }
    }
  }
  & .v-simple-section {
    padding-bottom:rem(120);
    @include for-width(-small-lg) {
      padding-bottom:rem(80);
    }
    .c-common-simple {
      & .container {
        padding: rem(54) rem(150) rem(60);
        @include for-width(-laptop) {
          padding: rem(35) rem(100) rem(40);
        }
        @include for-width(-tablet) {
          padding: rem(35) rem(35) rem(40);
        }
        @include for-width(-small-lg) {
          padding: rem(35);
        }
      }
    }
  }
}
</style>