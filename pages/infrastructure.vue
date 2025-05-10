<template>
  <div class="v-infrastructure">
    <section class="v-header-section">
      <SpotAInternal 
      title="Building physical infrastructure for PKT"
      text="The PKT Network relies on its community to operate its underlying infrastructure. This is made possible by staking, which requires people to lockup  PKT tokens to earn rewards. Beginning in October 26, 2024, each stake must be paired with an infrastructure node to continue receiving rewards. This ensures that the economic incentives in fact scale the underlying network. This ensures providers are rewarded to maintain reliable and accessible network resources."
       />
    </section>
    <section class="v-simple-section">
      <SimpleText :list="simple_block" />
    </section>
    <section class="v-chess-section">
      <BlocksChessCommon :list="chess_list" />
    </section>
    <section class="v-asymetrical-section">
      <div class="container">
        <div class="v-asymetrical-section__heading">
          <h2>Why build physical infrastructure for PKT?</h2>
        </div>
        <div class="v-asymetrical-section__inner">
          <BlockAsymmetrical :listFirst="asymetrical_block_list" :listSecond="asymetrical_block_list_second" />
        </div>
      </div>
    </section>
    <section class="v-index-section">
      <JoinCommunity />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import SimpleText from "~/components/Common/SimpleText";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
export default {
  components: {
    SpotAInternal,
    SimpleText,
    BlocksChessCommon
  },
  data() {
    return {
      //timeout: null,
      simple_block: [
        {
          single_title: "Revolutionizing The Media Industry",
          single_text: "PKT is the first decentralized physical infrastructure (DePIN) project to change the power dynamics and economics of the global media industry. Incumbent platforms serve as gatekeepers and charge high fees for access and distribution. Alternatively, PKT Network pays its audience for operating the network and users can cash-out, or use their rewards to pay for content, goods and services in the network.",
        }
      ],
      chess_list: [
        {
          text_direction: "text_right",
          single_title: "Cjdns Nodes",
          single_descr: "Cjdns nodes earn 40% of all yields and can be assigned up to USD$5,000 worth of yield credits. Each node must have an open port and public peering credentials so anyone can connect and reoute network traffice. Yields are paid based on reliability, uptime and geographical distribution.",
          single_url: "https://docs.pkt.cash/infra/infrastructure",
          single_link: this.$t("common.learn_more"),
          external: true,
          single_img: "/img/infrastructure-cjdns-nodes.webp",
        },
        {
          text_direction: "text_left",
          single_title: "VPN Exits",
          single_descr: "VPN exits earn 30% of all yields by providing internet access to people accessing the network. Yields are based on uptime. VPN Exits can be assigned up to USD$5,000 worth of yield credits, or if configured as both a cjdns node and a VPN exit, up to USD$10,000 in yield credits.",
          single_url: "https://docs.pkt.cash/infra/infrastructure",
          external: true,
          single_link: this.$t("common.learn_more"),
          single_img: "/img/infrastructure-vpn-exits.webp",
        },
        {
          text_direction: "text_right",
          single_title: "Domains & Nameservers",
          single_descr: "PKT domain holders will earn 15% of yields and Nameserver operators will earn 10% of yields. There is no limit to the number yield credits that can be assigned. Domains and Nameservers must always be available and are penalized their weekly yields if they fail. Nameservers also receive a geographical distribution bonus.",
          single_url: "https://docs.pkt.cash/infra/infrastructure",
          external: true,
          single_link: this.$t("common.learn_more"),
          single_img: "/img/infrastructure-domains.webp",
        },
        {
          text_direction: "text_left",
          single_title: "Route Servers",
          single_descr: "Route Servers earn 5% of all yields. They perform compact source routing for the network. There is no limit to the number of yield credits that can be assigned to a Route Server, but one must also operate a Nameserver and Domain in order to become one. Route Servers must operate continuously or are penalized their weekly yields.",
          single_url: "https://docs.pkt.cash/infra/infrastructure",
          external: true,
          single_link: this.$t("common.learn_more"),
          single_img: "/img/infrastructure-route-servers.webp",
        }
      ],
      asymetrical_block_list: [
        {
          single_title: "Internet Freedom",
          single_descr: "PKT Network is an open, permissionless media network powered by the people. Participants get paid to ensure secure access to media content on the internet.",
          color: "orange_dot"
        },
        {
          single_title: "Economic Incentive",
          single_descr: "PKT’s Stake-to-Earn protocol makes it the first media network that pays its audience to participate. Earned rewards can be used to cash-out, pay for content, products or services in the ecosystem.",
          color: "green_dot"
        }
      ],
      asymetrical_block_list_second: [
        {
          single_title: "Global Networking",
          single_descr: "The community owns and operate the network’s infrastructure. This fosters an aligned-incentive approach to operating, accessing and scaling a global media network.",
          color: "green_dot"
        },
        {
          single_title: "Decentralized Commerce",
          single_descr: "PKT Network websites use IPv6 web URL’s as payment addresses. This revolutionizes ecommerce by enabling hosts to receive payments directly, without requiring a third-party processor.",
          color: "orange_dot"
        }
      ],
    };
  },
  head() {
    return {
      title: "Building physical infrastructure for PKT | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The PKT Network relies on its community to operate its underlying infrastructure.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Building physical infrastructure for PKT | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'The PKT Network relies on its community to operate its underlying infrastructure.'
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
.v-infrastructure {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/infrastructure-top-small.webp);
  background-size:rem(800);
  background-position:top right;
  background-repeat:no-repeat;
  @include for-width(-desktop-lg) {
    background-size:rem(740);
  }
  @include for-width(-desktop-medium-default) {
    background-size:rem(675);
    background-position:top 20px right;
  }
  @include for-width(-tablet) {
    background-position:top -275px right -150px;
  }
  @include for-width(-small-lg) {
    background-size:rem(775);
    background-position:top -350px right -200px;
  }
  &:before {
    content:'';
    background-image:url(/img/pkt-cash-bg-1.webp);
    position:absolute;
    top:7%;
    right:0;
    width:90%;
    height:85%;
    background-position:right top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
  }
  &:after {
    content:'';
    background-image:url(/img/pkt-network-before.webp);
    position:absolute;
    bottom:0;
    left:0;
    width:80%;
    height:70%;
    background-position:left -50% bottom;
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
      padding:rem(140) 0 rem(70);
      &__title {
        @include for-width(-small-lg) {
          max-width:rem(265);
        }
      }
    }
  }
  & .v-simple-section {
    & .c-common-simple {
      & .container {
        padding: rem(54) rem(175) rem(60);
        @include for-width(-laptop) {
          padding: rem(35) rem(100) rem(40);
        }
        @include for-width(-tablet) {
          padding: rem(35) rem(50) rem(40);
        }
        @include for-width(-small-lg) {
          padding: rem(35) rem(30);
        }
      }
    }
  }
  & .v-analytics-section {
    & .c-analytics {
      padding-bottom:rem(125);
      @include for-width(-small-lg) {
        padding-bottom:0;
      }
      & .container {
        @extend %df;
        @extend %jcsb;
        @extend %fw;
        @include for-width(-small-lg) {
          display:block;
          padding-bottom:rem(90);
        }
      }
      &_data {
        width:32%;
        border-radius: rem(20);
        padding:rem(30);
        @extend %t-center;
        @include for-width(-desktop-med) {
          padding:rem(30) rem(10);
        }
        @include for-width(-tablet) {
          width:100%;
          margin-bottom:rem(20);
        }
        @include for-width(-small-lg) {
          padding:rem(20);
        }
        &__value {
          color:$black_blue;
          @extend %h2-common;
          @include for-width(-laptop_small) {
            font-size: rem(36);
            line-height: rem(46);
          }
          @include for-width(-small-lg) {
            font-size: rem(30);
            line-height: rem(36);
          }
        }
        & hr {
          background-color:$black_blue;
          border:0;
          width:rem(120);
          height:rem(1);
          padding:0;
          margin:rem(20) auto rem(22);
          @include for-width(-small-lg) {
            display:none;
          }
        }
        &__title {
          color:$black_blue;
          font-size: rem(16);
          line-height: rem(24);
          @extend %inter_semibold;
        }
      }
    }
  }
  & .v-chess-section {
    padding-top:rem(175);
    @include for-width(-tablet-lg) {
      padding-top:rem(125);
    }
    @include for-width(-small-lg) {
      padding-top:rem(75);
    }
    & h2 {
      @extend %h2-common;
      @extend %t-center;
      margin-bottom:rem(100);
      @include for-width(-small-lg) {
        margin-bottom:rem(85);
        text-align:left;
        max-width:rem(220);
      }
    }
    & .c-chess-block {
      & .text_left .c-chess-block_inner_single {
        padding-right:0;
        @include for-width(-small-lg) {
          text-wrap: pretty;
        }
      }
      & .text_right .c-chess-block_inner_single {
        padding-left:0;
        @include for-width(-small-lg) {
          text-wrap: pretty;
        }
      }
      &_inner_single_img {
        img {
          border-radius:rem(20);
        }
      }
      & .c-common-button {
        min-width:rem(175);
        width:auto;
      }
    }
  }
  & .v-asymetrical-section {
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
      padding:rem(100) 0 rem(100);
      margin-top:rem(125);
      border-top:1px solid rgba(217,217,217,.2);
      border-bottom:1px solid rgba(217,217,217,.2);
      @include for-width(-tablet) {
        display:block;
      }
      @include for-width(-small-lg) {
        padding:rem(80) 0 0;
        margin-top:0;
        border:0;
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
          max-width:rem(300);
        }
      }
      width:35%;
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
      & .c-asymetrical-block {
        padding-top:rem(100);
        @include for-width(-small-lg) {
          padding-top:rem(10);
        }
      }
    }
  }
}
</style>