<template>
  <div class="v-devcenter">
    <section class="v-header-section">
      <SpotAInternal 
      :title="this.$t('dev_central.title')"
      text="PKT is a community project. The PKT Network is powered by the people. The content in the ecosystem is developed by contributors and/or community-member-companies that are inspired by PKT’s mission. Here you will find all the documentation you need to each yields while staking or building within the ecosystem." 
      :button_1="this.$t('dev_central.button_1')"
      :button_2="this.$t('dev_central.button_2')"
      button_1_link="/network-steward"
      button_2_link="https://docs.pkt.cash/"
      button_2_target="_blank"  />
    </section>
    <section class="v-simple-section">
      <SimpleText :list="simple_block" />
    </section>
    <section class="v-block-links-section">
      <div class="container">
        <div class="v-block-links-section__inner">
          <div class="v-block-links-section__single orange_bg">
            <div><h3 class="v-block-links-section__title">Earn from a cjdns Node</h3>
            <p class="v-block-links-section__descr">Setup a cjdns node with an open port and public peering credentials to earn a share of 40% of all yields.</p></div>
            <a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>{{ $t("dev_central.block_button_1") }}</span></a>
          </div>
          <div class="v-block-links-section__single blue_bg">
            <div><h3 class="v-block-links-section__title">Earn from a PKT VPN Exit</h3>
            <p class="v-block-links-section__descr">Setup a PKT VPN exit node to bridge between the traditional Internet and the PKT Network for a share of 30% of all yields.</p></div>
            <a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>{{ $t("dev_central.block_button_2") }}</span></a>
          </div>
          <div class="v-block-links-section__single green_bg">
            <div><h3 class="v-block-links-section__title">Earn from a PKT Domain</h3>
            <p class="v-block-links-section__descr">Pair a PKT domain, such as any pkt.any TLD with unlimited stake for a share in 15% of all yields.</p></div>
            <a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>{{ $t("dev_central.block_button_2") }}</span></a>
          </div>
        </div>
        <div class="v-block-links-section__inner">
          <div class="v-block-links-section__single dark_blue_bg">
            <div><h3 class="v-block-links-section__title">Earn from a PKT Nameserver</h3>
            <p class="v-block-links-section__descr">If you own a pkt domain, setup a nameserver with unlimited stake to earn a share of 10% of all yields.</p></div>
            <a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>{{ $t("dev_central.block_button_1") }}</span></a>
          </div>
          <div class="v-block-links-section__single grey_bg">
            <div><h3 class="v-block-links-section__title">Earn from a Route Server</h3>
            <p class="v-block-links-section__descr">If you have all node types, setup a route server with unlimited stake to earn 5% of all yields.</p></div>
            <a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button__bordered c-common-button__dark_blue"><span>Setup now</span></a>
          </div>
          <div class="v-block-links-section__single rose_bg">
            <div><h3 class="v-block-links-section__title">Build a Website in PKT Network</h3>
            <p class="v-block-links-section__descr">Get more information about building and hosting censorship-resistant websites in the PKT Network.</p></div>
            <div><a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button-2 c-common-button__bordered c-common-button__dark_blue"><span>{{ $t("dev_central.block_button_2") }}</span></a>
            <a href="https://docs.pkt.cash/infra/infrastructure" target="_blank" class="c-common-button c-common-button-2 c-common-button__bordered c-common-button__dark_blue"><span>Rent a VPS</span></a></div>
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
import SimpleText from "~/components/Common/SimpleText";
import JoinCommunity from "~/components/Common/JoinCommunity";
export default {
  components: {
    SpotAInternal,
    SimpleText,
    JoinCommunity
  },
  data() {
    return {
      simple_block: [
        {
          single_title: this.$t("dev_central.block_button_2"),
          single_text: "Get started by setting up PKT infrastructure on a computer and stake-to-earn. Staking efforts are the foundation the PKT Network. It’s also easy to build applications and websites on the network. PKT Network websites and applications can be reached globally without geofencing by search engines. If you need funding, check out the Network Steward page, which is a grant mechanism that is paid out weekly to fund PKT-related projects.",
        }
      ]
    };
  },
  head() {
    return {
      title: 'Developer Central | PKT Cash',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PKT is a community project. All the technology in the ecosystem is developed by contributors and/or community member companies inspired by PKT’s mission. Here you will find all the documentation you need to begin building within the ecosystem.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Developer Central | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'PKT is a community project. All the technology in the ecosystem is developed by contributors and/or community member companies inspired by PKT’s mission. Here you will find all the documentation you need to begin building within the ecosystem.'
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
.v-devcenter {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/developer-center-top.webp);
  background-position:right top;
  background-size:rem(600);
  background-repeat:no-repeat;
  @include for-width(-desktop-medium-default) {
    background-size:rem(550);
  }
  @include for-width(-desktop-med) {
    background-size:rem(500);
  }
  @include for-width(-tablet) {
    background-size:rem(450);
  }
  @include for-width(-small-lg) {
    background-size:100%;
    background-image:url(/img/developer-center-top-mobile.webp);
    background-position:right top;
  }
  &:before {
    content:'';
    background-image:url(/img/pkt-network-before.webp);
    position:absolute;
    top:5%;
    left:0;
    width:85%;
    height:85%;
    background-position:left top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-small-lg) {
      background-size:cover;
      width:100%;
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
      display:none;
    }
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
      max-width:rem(815);
    }
    &__title {
      max-width:rem(475);
      @include for-width(-small-lg) {
        max-width:rem(200);
      }
    }
  }
  .v-simple-section {
    .c-common-simple {
      & .container {
        padding: rem(54) rem(110) rem(60);
        @include for-width(-laptop) {
          padding: rem(35) rem(100) rem(40);
        }
        @include for-width(-tablet) {
          padding: rem(35) rem(50) rem(40);
        }
        @include for-width(-small-lg) {
          padding: rem(35) rem(25);
        }
      }
    }
  }
  .v-block-links-section {
    padding:rem(150) 0 rem(0);
    @include for-width(-tablet) {
      padding:rem(100) 0 0;
    }
    &__inner {
      @extend %df;
      @extend %jcsb;
      @extend %fw;
      padding-bottom:rem(60);
      &:last-child {
        padding-bottom:0;
      }
      @include for-width(-tablet) {
        display:block;
        padding-bottom:0;
      }
    }
    &__single {
      width:31.5%;
      border-radius:rem(20);
      padding:rem(20) rem(27) rem(40) rem(27);
      @extend %df;
      @extend %jcsb;
      @extend %fdc;
      @extend %ais;
      @include for-width(-laptop) {
        padding:rem(25) rem(30);
      }
      @include for-width(-tablet) {
        width:100%;
        margin-bottom:rem(20);
      }
      @include for-width(-small-lg) {
        padding:rem(20) rem(30);
      }
    }
    &__title {
      font-size: rem(40);
      line-height: rem(50);
      color:$black_blue;
      @extend %inter_bold;
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
      padding:rem(10) 0 rem(20);
      @include for-width(-small-lg) {
        font-size: rem(16);
        line-height: rem(24);
      }
    }
    & .c-common-button-2 {
      width:rem(150);
    }
  }
}
</style>