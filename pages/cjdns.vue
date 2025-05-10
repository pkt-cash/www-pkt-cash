<template>
  <div class="v-cjdns">
    <section class="v-header-section">
      <SpotAInternal 
      title="Cjdns peer-to-peer mesh networking routes PKT Network"
      text="PKT Network is a global mesh network. It leverages a peer-to-peer protocol called cjdns to route high speed traffic around the world. PKT Network nodes automatically discover and connect with their neighbors. This creates a dynamic and self-configuring network that can avert firewalls and is available globally without geofencing." 
      button_1="Install cjdns"
      button_2="Read docs"
      button_1_link="https://docs.pkt.cash/governance"
      button_2_link="https://docs.pkt.cash/"
      button_1_target="_blank"
      button_2_target="_blank" />
    </section>
    <!-- <section class="v-analytics-section">
      <AnalyticsDataCjdns />
    </section> -->
    <section class="v-hyperboria-section">
      <div class="container">
        <img src="/img/cjdns-hyperboria.webp" alt="Hyperboria" class="v-hyperboria-section__img" />
        <div class="v-hyperboria-section__inner">
          <div class="v-hyperboria-section__inner_left">
            <h2>Hyperboria<span> x </span>PKT Network</h2>
          </div>
          <div class="v-hyperboria-section__inner_right">
            <p>Cjdns was invented by PKT lead developer Caleb James DeLisle in 2011. Due to it security and resilient against adversarial ISPs and firewalls, cjdns was incorporated into Bitcoin Core version 23.0 in April 2022.</p>
            <p>PKT Network uses the cjdns protocol and its interconnected network called Hyperboria to power a decentralized, peer-to-peer mesh network. Each node in Hyperboria is identified by a unique IPv6 address generated from the node's public key. This enables users to communicate securely using end-to-end encryption, ensuring a high level of security and privacy.</p>
            <p>Hyperboria supports the open, secure, user-controlled ecosystem called PKT Network. The result is a sovereign, resilient, peer-to-peer network that bypasses traditional ISPs and centralized control.</p>
            <p>PKT Network has payment rails built into the network layer. By linking a PKT payment address with a cjdns IPv6 web URL, websites built in the PKT Network can receive PKT payments without requiring a third party payment gateway. This capability enables broad use cases for e-commerce, content distribution and beyond.</p>
          </div>
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
// import AnalyticsDataCjdns from "~/components/Cjdns/AnalyticsDataCjdns";
import JoinCommunity from "~/components/Common/JoinCommunity";
export default {
  components: {
    SpotAInternal,
    // AnalyticsDataCjdns,
    JoinCommunity
  },
  data() {
    return {
      
    };
  },
  head() {
    return {
      title: "Cjdns peer-to-peer mesh networking is powering the PKT Network | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PKT Network is a global mesh network leveraging cjdns to scale its decentralized infrastructure and the decentralized web. PKT Network nodes automatically discover and connect with their neighbors. This creates a dynamic and self-configuring network that is available exclusively peer-to-peer or through global internet browsers.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Cjdns peer-to-peer mesh networking is powering the PKT Network | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'PKT Network is a global mesh network leveraging cjdns to scale its decentralized infrastructure and the decentralized web. PKT Network nodes automatically discover and connect with their neighbors. This creates a dynamic and self-configuring network that is available exclusively peer-to-peer or through global internet browsers.'
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
.v-cjdns {
  background-color:#090a30;
  position:relative;
  background-image:url(/img/cjdns-bg.webp);
  background-position:center top;
  background-size:100%;
  background-repeat:no-repeat;
  @include for-width(-small-lg) {
    background-image:url(/img/cjdns-bg-mobile-new-1.webp);
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(80);
    }
    &__wrap {
      max-width:rem(820);
    }
  }
  & .v-hyperboria-section {
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
      padding-top:rem(55);
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
}
</style>