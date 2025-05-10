<template>
  <div class="v-network">
    <section class="v-header-section">
      <SpotAInternal 
      title="Introducing PKT Network"
      text="PKT Network is a fast, resilient, and censorship-resistant media network powered by the people. Instead of relying on centralized companies for its network infrastructure, PKT is a decentralized physical infrastructure (DePIN) project. This means the network is powered by its global community of economically incentivized users. " 
      :button_1="this.$t('header.ecosystem')"
      button_2="Roadmap"
      button_1_link="/ecosystem"
      button_2_link="/roadmap" />
    </section>
    <section class="v-simple-section">
      <SimpleText :list="simple_block" />
    </section>
    <section class="v-network-description-section">
      <div class="container">
        <div class="v-network-description-section__inner">
          <div class="v-network-description-section__inner_left">
            <h2>Scaling <br />PKT Network</h2>
          </div>
          <div class="v-network-description-section__inner_right">
            <p>To ensure the growth and stability of the PKT Network, contributors get paid daily via a process called staking. Staking involves owning an amount of the network’s native currency (PKT) and pairing that stake with an internet-connected devices (a node), such as a computer or server. The more PKT that’s staked and the more sophisticated the node type, the higher the payout. This is how the network is scaled without incurring significant overhead costs.</p>
            <a href="https://pkt.cash/1ea983ba3453631d914755e7ad96840d/overview" target="_blank" class="c-common-button c-common-button c-common-button__filled">
              <span>Try Staking</span>
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="v-network-description-section__inner">
          <div class="v-network-description-section__inner_left">
            <h2>How to <br />Access <br />PKT Network</h2>
          </div>
          <div class="v-network-description-section__inner_right">
            <p>Websites and platforms built and hosted in the PKT Network are accessible from any global web browser - so long as the web host uses a reverse VPN. For websites and applications that do not activate a reverse VPN, content in the PKT Network is accessible peer-to-peer through a VPN. This sovereignty is what makes the PKT Network censorship-resistant, yet accessible worldwide.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="v-asymetrical-section">
      <div class="container">
        <div class="v-asymetrical-section__heading">
          <h2>A Network for Content</h2>
        </div>
        <div class="v-asymetrical-section__inner">
          <BlockAsymmetrical :listFirst="asymetrical_block_list" :listSecond="asymetrical_block_list_second" />
        </div>
      </div>
    </section>
    <section class="v-join-section">
      <JoinCommunity />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import SimpleText from "~/components/Common/SimpleText";
import BlockAsymmetrical from "~/components/Common/BlockAsymmetrical";
import JoinCommunity from "~/components/Common/JoinCommunity";
export default {
  components: {
    SpotAInternal,
    SimpleText,
    BlockAsymmetrical,
    JoinCommunity
  },
  data() {
    return {
      simple_block: [
        {
          single_title: "What is PKT Network?",
          single_text: "Building a media network requires enormous infrastructure expenses, massive overhead costs and costly operators. The PKT Network challenges this notion by decentralizing its operation costs to economically incentivized infrastructure contributors. The result is a global, versatile, permissionless network ecosystem where anyone can build or host applications. The first application being built on the network is BIA, a premium content distribution platform that delivers audiences with high quality movie and TV content. The platform also supports content creators with viewership transparency and programmatic revenue using smart contracts.",
          button_1: "Learn more",
          button_1_link: "https://docs.pkt.cash/network/what-is-network",
          button_1_target: "_blank"
        }
      ],
      asymetrical_block_list: [
        {
          single_title: "Global Content Distribution",
          single_descr: "Websites and applications built on PKT Network are accessible globally from any web browser. Smart TV integration and accessibility is soon to follow.",
          color: "blue_dot"
        },
        {
          single_title: "Integrated Payment Rails",
          single_descr: "Applications and websites built on PKT Network can use their web URL as a PKT payment address. This enables network transactions to process with requiring a third party payment processor. Traditional payment services can also be used such PayPal, credit card, etc.",
          color: "green_dot"
        }
      ],
      asymetrical_block_list_second: [
        {
          single_title: "Payment Transparency",
          single_descr: "Users can pay for content, products or services with credit card or any type of cryptocurrency. Payments paid with cryptocurreny benefit from blockchain technology for transparency.",
          color: "blue_dot"
        },
        {
          single_title: "Revenue Smart Contracts",
          single_descr: "Content creators and business owners can pay beneficiaries automatically using programmatic smart contracts. Smart contracts ensure accurate, real time payments, without central party payment processors or intermediaries.",
          color: "green_dot"
        }
      ],
    };
  },
  head() {
    return {
      title: 'Scaling the PKT Network | PKT Cash',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PKT Network is a high speed, VPN-based network. The network’s decentralized physical infrastructure (DePIN) is designed to support open internet access and empower people to build websites where the web URL is also a PKT payment address.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Scaling the PKT Network | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'PKT Network is a high speed, VPN-based network. The network’s decentralized physical infrastructure (DePIN) is designed to support open internet access and empower people to build websites where the web URL is also a PKT payment address.'
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
.v-network {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/pkt-network-before.webp);
  background-position:left top;
  background-size:70%;
  background-repeat:no-repeat;
  @include for-width(-small-lg) {
    background-size:235%;
    background-position:left top;
    overflow:hidden;
  }
  &:before {
    content:'';
    background-image:url(/img/pkt-network-top-asset.webp);
    position:absolute;
    top:0;
    right:0;
    width:75%;
    height:75%;
    background-position:right -300px top -175px;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-desktop-medium) {
      width:70%;
      height:70%;
      background-position:right -200px top -125px;
    }
    @include for-width(-tablet) {
      width:90%;
    }
    @include for-width(-small-lg) {
      width:200%;
      height:200%;
      background-position:right -400px top -325px;
    }
  }
  &:after {
    content:'';
    background-image:url(/img/pkt-network-after.webp);
    position:absolute;
    bottom:0;
    right:0;
    width:65%;
    height:60%;
    background-position:right bottom 60%;
    background-size:cover;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-small-lg) {
      background-size:contain;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    @include for-width(-small-lg) {
      padding:rem(130) 0 rem(70);
    }
    &__title {
      max-width:rem(475);
      @include for-width(-small-lg) {
        max-width:rem(250);
      }
    }
  }
  .v-simple-section {
    .c-common-simple {
      & .container {
        padding: rem(54) rem(105) rem(60);
        @include for-width(-laptop) {
          padding: rem(35) rem(100) rem(40);
        }
        @include for-width(-tablet) {
          padding: rem(35) rem(50) rem(40);
        }
        @include for-width(-small-lg) {
          padding: rem(35) rem(30) rem(45);
        }
      }
    }
  }
  & .v-network-description-section {
    &__img {
      width:100%;
      @include for-width(-small-lg) {
        height:rem(420);
        object-fit:cover;
        object-position:center;
        border-radius:rem(20);
      }
    }
    &__inner {
      @extend %dg;
      -ms-grid-columns: 38% 62%;
      grid-template-columns: 38% 62%;
      padding-top:rem(175);
      @include for-width(-tablet) {
        display:block;
      }
      @include for-width(-small-lg) {
        padding-top:rem(35);
      }
      &_left {
        & h2 {
          @extend %h2-common;
          @extend %dib;
          & span {
            @extend %db;
            @extend %t-center;
          }
        }
        @include for-width(-tablet) {
          margin-bottom:rem(25);
        }
        @include for-width(-small-lg) {
          margin-bottom:rem(15);
        }
      }
      &_right {
        & p {
          @extend %p-big-common;
          margin-bottom:rem(25);
          &:last-child {
            margin-bottom:0;
          }
        }
      }
    }
  }
  .v-asymetrical-section {
    @include for-width(-desktop-med) {
      padding:0 rem(30);
    }
    @include for-width(-small-lg) {
      padding:0 rem(20);
    }
    & .first {
		  padding-top:rem(95);
      @include for-width(-tablet) {
        padding-top:0;
      }
	  }
    & .second {
		  & .green_dot:before {
        background-color: #0D4AE7;
      }
      & .blue_dot:before {
        background-color: #00B127;
      }
	  }
    & .container {
      @extend %df;
      @extend %jcsb;
      @extend %ais;
      padding:rem(190) 0 0;
      @include for-width(-laptop) {
        padding:rem(75) 0 rem(35);
      }
      @include for-width(-tablet) {
        display:block;
      }
      @include for-width(-small-lg) {
        padding:rem(95) rem(20) 0;
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
      width:35%;
      @include for-width(-tablet) {
        width:100%;
        padding-bottom:rem(35);
      }
      @include for-width(-small-lg) {
        padding-bottom:rem(15);
      }
    }
    & .first > div {
      padding-right:rem(60);
      @include for-width(-small-lg) {
        padding-right:0;
      }
    }
    & .second > div {
      padding-left:0;
      @include for-width(-small-lg) {
        padding-left:0;
      }
    }
    &__inner {
      width:65%;
      padding-left:2%;
      @include for-width(-tablet) {
        width:100%;
      }
      @include for-width(-small-lg) {
        padding:0 rem(20);
      }
    }
  }
}
</style>