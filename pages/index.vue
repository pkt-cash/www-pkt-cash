<template>
  <div class="v-index">
    <section class="v-top-section">
      <div class="container">
        <h1 class="v-top-section__heading">The Future <br />of Internet Access</h1>
        <p class="v-top-section__description">PKT is a decentralized physical infrastructure (DePIN) ecosystem supporting open internet access and powering the decentralized web.</p>
        <div class="v-top-section__links">
          <nuxt-link class="c-common-button c-common-button__filled" to="/getpkt">
            <span>Get PKT</span>
          </nuxt-link>
          <nuxt-link class="c-common-button c-common-button__bordered" to="/build">
            <span>Roadmap</span>
          </nuxt-link>
        </div>
      </div>
      <div class="v-top-section__solutions">
        <div class="container">
          <p>Powering solutions around the world</p>
          <div class="v-top-section__solutions_carousel">
            <ImgBlock :list="solutions_img_list" />
          </div>
        </div>
      </div>
    </section>
    <section class="v-indexes-section">
      <div class="container">
        <h2 class="v-indexes-section__heading">Overview <br />of the network</h2>
        <div class="v-indexes-section__inner">
          <IndexHeader />
        </div>
      </div>
    </section>
    <section class="v-asymetrical-section">
      <div class="container">
        <div class="v-asymetrical-section__heading">
          <h2>Scaling the Decentralized Web</h2>
          <nuxt-link class="c-common-button c-common-button__filled" to="/tech">
            <span>Learn more</span>
          </nuxt-link>
        </div>
        <div class="v-asymetrical-section__inner">
          <BlockAsymmetrical :listFirst="asymetrical_block_list" :listSecond="asymetrical_block_list_second" />
        </div>
        <nuxt-link class="c-common-button c-common-button__filled mobile_only" to="/build">
          <span>Learn More</span>
        </nuxt-link>
      </div>
    </section>
    <section class="v-powering-section">
      <div class="container">
        <h2 class="v-powering-section__heading">Powering the internet</h2>
        <div class="v-powering-section__inner">
          <CardsCommon :list="cards_list" />
        </div>
      </div>
    </section>
    <section class="v-chess-section">
      <BlocksChessCommon :list="blocks_list" />
    </section>
    <section class="v-index-section">
      <JoinCommunity />
    </section>
  </div>
</template>

<script>
import ImgBlock from "~/components/Common/ImgBlock";
import IndexHeader from "~/components/Home/IndexHeader";
import BlockAsymmetrical from "~/components/Common/BlockAsymmetrical";
import CardsCommon from "~/components/Home/CardsCommon";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
import JoinCommunity from "~/components/Common/JoinCommunity";
export default {
  components: {
    ImgBlock,
    IndexHeader,
    BlockAsymmetrical,
    CardsCommon,
    BlocksChessCommon,
    JoinCommunity
  },
  data() {
    return {
      asymetrical_block_list: [
        {
          single_title: "Fully Decentralized",
          single_descr: "PKT is an open source, global mesh internet project with no central infrastructure. The blockchain is validated by thousands of nodes around the world.",
          color: "orange_dot"
        },
        {
          single_title: "Payment Rails",
          single_descr: "Payment rails are built in. Using PKT Lightning Network, website operators can receive PKT payments directly to the website URL.",
          color: "green_dot"
        }
      ],
      asymetrical_block_list_second: [
        {
          single_title: "Accessible",
          single_descr: "Anyone can build a website and access PKT Network. Content is accessible peer-to-peer and through traditional browsers.",
          color: "green_dot"
        },
        {
          single_title: "Encrypted",
          single_descr: "PKT Network is a permissionless, encrypted, global VPN mesh network. The network delivers, free to use, high speed connectivity along with the privacy and security features of cjdns.",
          color: "orange_dot"
        }
      ],
      blocks_list: [
        {
          text_direction: "text_right",
          single_title: "Stand for what you believe in",
          single_descr: "PKT community members own and operate the internet. By simply installing Minr and setting up a PKT wallet, or building a website in PKT Network, you get to own your piece of the internet.",
          single_url: "/letter",
          single_link: "Learn more",
          single_img: "/img/home/chess-1.webp",
        },
        {
          text_direction: "text_left",
          single_title: "Now Trading",
          single_descr: "PKT is the network’s digital currency that can be traded on several centralized exchanges or converted into wrapped PKT (WPKT) and traded on PancakeSwap.",
          single_url: "/getpkt",
          single_link: "Learn more",
          single_img: "/img/home/chess-2.webp",
        }
      ],
      solutions_img_list: [
        {
          img_url: "/img/home/home-solutions-1.svg",
          single_alt: "Anode",
          img_width: 162,
          img_height: 43
        },
        {
          img_url: "/img/home/home-solutions-2.svg",
          single_alt: "Routie",
          img_width: 192,
          img_height: 48
        },
        {
          img_url: "/img/home/home-solutions-3.svg",
          single_alt: "Pkteer",
          img_width: 124,
          img_height: 36
        },
        {
          img_url: "/img/home/home-solutions-4.svg",
          single_alt: "Minr",
          img_width: 125,
          img_height: 46
        },
        {
          img_url: "/img/home/home-solutions-5.svg",
          single_alt: "ODApp",
          img_width: 200,
          img_height: 50
        },
        {
          img_url: "/img/home/home-solutions-6.svg",
          single_alt: "Packetscan",
          img_width: 230,
          img_height: 48
        },
        {
          img_url: "/img/home/home-solutions-7.svg",
          single_alt: "Watchr",
          img_width: 200,
          img_height: 55
        },
        {
          img_url: "/img/home/home-solutions-8.svg",
          single_alt: "PKTWatch",
          img_width: 204,
          img_height: 44
        },
        {
          img_url: "/img/home/home-solutions-9.svg",
          single_alt: "pkt.world",
          img_width: 204,
          img_height: 40
        },
        {
          img_url: "/img/home/home-solutions-11.svg",
          single_alt: "pktpool",
          img_width: 210,
          img_height: 40
        },
        {
          img_url: "/img/home/home-solutions-12.svg",
          single_alt: "zetahash",
          img_width: 210,
          img_height: 45
        },
        {
          img_url: "/img/home/home-solutions-13.svg",
          single_alt: "pkt.nets",
          img_width: 185,
          img_height: 60
        }
      ],
      cards_list: [
        {
          single_title: "Permissionless",
          single_descr: "Using networking protocol cjdns for its backbone, PKT Network enables open internet access and decentralized participation, promoting community collaboration.",
          single_url: "/origin-story",
          single_link: "Learn more"
        },
        {
          single_title: "Governance",
          single_descr: "The Network Steward receives 20% of every mined block to fund the roadmap. Using forthcoming proof-of-stake voting, the community will elect the Network Steward weekly.",
          single_url: "/network-steward",
          single_link: "Learn more"
        },
        {
          single_title: "Infrastructure",
          single_descr: "PKT Network is powered by miners that install PacketCrypt, the bandwidth-based proof-of-work mining algorithm. Miners are rewarded to contribute to and maintain the network.",
          single_url: "/mine",
          single_link: "Learn more"
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t("home.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  async middleware({ store }) {
    await store.dispatch('pkt-analytics/load')
  },
  async mounted() {
    await this.$store.dispatch('pkt-analytics/load')
  }
};
</script>
<style lang="scss">
.v-index {
  background-color: $black_blue;
  &:before {
    content:'';
    background-image:url(/img/home/home-assets.webp);
    position:absolute;
    top:15%;
    left:0;
    width:100%;
    height:70%;
    background-position:center center;
    background-size:cover;
    z-index:1;
  }
  & > section {
    z-index:3;
    position:relative;
  }
}
.v-top-section {
  @extend %t-center;
  padding:20vh 0 10vh;
  background-image:url(/img/home/home-top-bg.webp);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  @include for-width(-desktop-lg) {
    background-size: 100% 100%;
  }
  @include for-width(-tablet) {
    padding:15vh 0 10vh;
    background-position: top 0 left -175px;
    background-size: cover;
  }
  @include for-width(-small-lg) {
    padding:rem(175) 0 rem(100);
    background-position: top 0 left -75px;
    background-size: 200%;
  }
  & .container {
    padding: 0 rem(210);
    @include for-width(-laptop) {
      padding: 0 rem(125);
    }
    @include for-width(-tablet) {
      padding: 0;
    }
  }
  &__heading {
    @extend %h1-common;
    @include for-width(-small-lg) {
      padding: 0 rem(55);
    }
  }
  &__description {
    @extend %p-big-common;
    padding:rem(20) 0 rem(35);
    @include for-width(-small-lg) {
      padding:rem(25) rem(20) rem(35);
    }
  }
  &__links {
    & .c-common-button {
      margin:0 rem(10);
    }
  }
  &__solutions {
    margin-top:10vh;
    @include for-width(-desktop-medium) {
      margin-top:10vh;
    }
    @include for-width(-tablet) {
      margin-top:8vh;
    }
    @include for-width(-small-lg) {
      margin-top:13vh;
    }
    & p {
      @extend %p-common;
      margin-bottom:rem(20);
      @include for-width(-small-lg) {
        margin-bottom:rem(10);
      }
    }
    & .container {
      padding: 0;
    }
    &_carousel {
      width:100%;
      border-radius: 20px;
      background-color:$black_blue_light;
      padding:rem(15) 0 rem(12);
      @include for-width(-small-lg) {
        border-radius: 0;
        padding:rem(10) 0;
      }
      & .c-images-single {
        margin:0 rem(10);
        @include for-width(-tablet) {
          margin:rem(7) 2%;
          max-width:16%;
        }
        @include for-width(-small-lg) {
          margin:rem(15) 2%;
          max-width:21%;
        }
      }
    }
  }
}
.v-indexes-section {
  padding-bottom::23vh;
  @include for-width(-tablet) {
    padding-bottom::10vh;
  }
  & .container {
    @extend %df;
    @extend %jcsb;
    @extend %ais;
    @include for-width(-tablet) {
      display:block;
    }
  }
  &__heading {
    @extend %h2-common;
    width:25%;
    @include for-width(-tablet) {
      width:100%;
      padding-bottom:rem(35);
    }
  }
  &__inner {
    width:70%;
    @include for-width(-tablet) {
      width:100%;
    }
  }
}
.v-asymetrical-section {
  & .container {
    @extend %df;
    @extend %jcsb;
    @extend %ais;
    @include for-width(-tablet) {
      display:block;
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
    width:70%;
    @include for-width(-tablet) {
      width:100%;
    }
  }
}
.v-powering-section {
  padding:25vh 0 20vh;
  @include for-width(-tablet) {
    padding:10vh 0;
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
</style>