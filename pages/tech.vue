<template>
  <div class="v-tech">
    <section class="tech_header">
      <HeaderInternal 
      :title="this.$t('tech.title')" 
      :subtitle="this.$t('tech.subtitle')" 
      :text="this.$t('tech.text')"
      button_1="Use the PKT Network" 
      button_1_link="/network-steward"
      is_arrow_down 
      arrow_down_link="#pktcrypt" />
    </section>
    <section id="pktcrypt" class="v-tech__pktcrypt">
      <div class="container">
        <h2 class="v-tech__title">{{ $t("tech.pktcrypt_title") }}</h2>
        <p class="v-tech__subheading">{{ $t("tech.pktcrypt_subtitle") }}</p>
        <p class="v-tech__text">{{ $t("tech.pktcrypt_text_1") }}</p>
        <p class="v-tech__text">{{ $t("tech.pktcrypt_text_2") }}</p>
      </div>
    </section>
    <section class="v-tech__cjdns">
      <div class="container">
        <div class="v-tech_left">
          <h2 class="v-tech__title">Cjdns</h2>
        </div>
        <div class="v-tech_right">
          <p class="v-tech__subheading">{{ $t("tech.cjdns_subtitle") }}</p>
          <p class="v-tech__text">{{ $t("tech.cjdns_text_1") }}</p>
          <p class="v-tech__text">{{ $t("tech.cjdns_text_2") }}</p>
        </div>
      </div>
    </section>
    <section class="v-tech__vpn">
      <div class="container">
      <div class="v-tech_left">
        <h2 class="v-tech__title">{{ $t("tech.vpn_title") }}</h2>
        <p class="v-tech__subheading">{{ $t("tech.vpn_subtitle") }}</p>
        <p class="v-tech__text">{{ $t("tech.vpn_text_1") }}</p>
        <p class="v-tech__text">{{ $t("tech.vpn_text_2") }}</p>
      </div>
      <div class="v-tech_right">
        <img src="/img/tech-vpn.svg" alt="Edge Points Devices" />
      </div>
      </div>
    </section>
    <section class="v-tech__token">
      <div class="container">
        <div class="v-tech_left">
          <h2 class="v-tech__title">{{ $t("tech.ts_title") }}</h2>
          <p class="v-tech__subheading">{{ $t("tech.ts_subtitle") }}</p>
          <p class="v-tech__text">{{ $t("tech.ts_text_1") }}</p>
          <p class="v-tech__text">{{ $t("tech.ts_text_2") }}</p>
        </div>
        <div class="v-tech_right">
          <img src="/img/tech-tokenstrike.svg" alt="TokenStrike" />
        </div>
      </div>
    </section>
    <section class="v-tech__devices">
      <div class="container">
      <div class="v-tech_left">
        <h2 class="v-tech__title">{{ $t("tech.edge_device_title") }}</h2>
        <p class="v-tech__subheading">{{ $t("tech.edge_device_subtitle") }}</p>
        <p class="v-tech__text">{{ $t("tech.edge_device_text_1") }}</p>
        <p class="v-tech__text">{{ $t("tech.edge_device_text_2") }}</p>
      </div>
      <div class="v-tech_right">
        <img src="/img/tech-edge_devices.png" alt="Edge Points Devices" />
      </div>
      </div>
    </section>
    <section class="v-tech__cloud">
      <div class="container">
        <div class="v-tech_left">
          <h2 class="v-tech__title">{{ $t("tech.cloud_title") }}</h2>
          <p class="v-tech__subheading">{{ $t("tech.cloud_subtitle") }}</p>
          <p class="v-tech__text">{{ $t("tech.cloud_text_1") }}</p>
          <p class="v-tech__text">{{ $t("tech.cloud_text_2") }}</p>
        </div>
        <div class="v-tech_right"></div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  components: {
    HeaderInternal,
  },
  head() {
    return {
      title: this.$t("tech.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("tech.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
};
</script>

<style lang="scss">
.tech_header {
  & .c-internal-header {
    position:relative;
    @include for-width(-tablet) {
      height:100vh;
    }
    &::after {
      content:'';
      background-image:url(/img/tech-header.png);
      background-repeat:no-repeat;
      background-size:cover;
      background-position:center bottom;
      position:absolute;
      bottom:0;
      width:100%;
      height:rem(65);
      @include for-width(+desktop-xl) {
        height:rem(85);
      }
      @include for-width(+desktop-xxl) {
        height:rem(115);
      }
      @include for-width(-tablet) {
        height:rem(35);
      }
      @include for-width(-small-lg) {
        height:rem(30);
        background-image:url(/img/tech-header-mobile.png);
      }
    }
    &__sub-title {
      text-transform:initial;
    }
    &__text {
      @include for-width(-tablet) {
        max-width: 65vw;
      }
      @include for-width(-small-lg) {
        max-width: 85%;
      }
    }
    &__links {
      @include for-width(-small-lg) {
        justify-content: center;
      }
    }
    .arrow_down {
      bottom: rem(75);
      @include for-width(-small-lg) {
        bottom: rem(20);
      }
    }
  }
}
.v-tech {
  .container {
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
    padding:0 0 rem(10);
    @include for-width(-small-lg) {
      font-size: rem(40);
      line-height: rem(50);
      padding:rem(15) 0 0;
    }
  }
  &__subheading {
    @extend %subheading;
    margin-bottom:rem(25);
  }
  &__text {
    @extend %pn;
    margin:0 auto rem(25);
  }
  &_left {
    width:55vw;
    @extend %t-left;
    @include for-width(-tablet) {
      width:100%;
      text-align:center;
    }
  }
  &_right {
    width:45vw;
    @extend %t-center;
    @include for-width(-tablet) {
      width:100%;
    }
    & img {
      max-width:70%;
      margin-top:rem(75);
      @include for-width(+desktop-xl) {
        max-width:80%;
      }
      @include for-width(-tablet) {
        max-width:45%;
        margin-top:0;
      }
      @include for-width(-small-lg) {
        max-width:65%;
      }
    }
  }
  &__pktcrypt {
    @extend %t-center;
    background-color:$white;
    padding:rem(125) 0 rem(100);
    @include for-width(-tablet-lg) {
      padding:rem(100) 0 rem(35);
    }
    @include for-width(-tablet) {
      padding:rem(80) 0 rem(35);
    }
    @include for-width(-small-lg) {
      padding:rem(65) 0 rem(20);
    }
    & .container {
      max-width:50%;
      @include for-width(+desktop-xl) {
        max-width:45%;
      }
      @include for-width(+desktop-xxl) {
        max-width:30%;
      }
      @include for-width(-tablet-lg) {
        max-width:60%;
      }
      @include for-width(-tablet) {
        max-width:75%;
      }
      @include for-width(-small-lg) {
        max-width:90%;
      }
    }
  }
  &__cjdns {
    .container {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      background-color:$light_bg;
      background-image:url(/img/tech-cjdns-bg.png);
      background-repeat:no-repeat;
      background-size:35% 100%;
      background-position:center left;
      border-radius:rem(40);
      padding:rem(50);
      @include for-width(-tablet-lg) {
        padding:rem(35);
      }
      @include for-width(-tablet) {
        max-width:95%;
        display:block;
        background-image:url(/img/tech-cjdns-bg-tablet.png);
        background-size:100% 35%;
        background-position:top center;
      }
      @include for-width(-small-lg) {
        border-radius:rem(24);
        max-width:90%;
      }
    }
    & .v-tech_left {
      @extend %t-center;
      @include for-width(-tablet) {
        margin:rem(25) 0;
      }
      @include for-width(-small-lg) {
        margin:rem(25) 0 0;
      }
    }
    & .v-tech_right {
      @extend %t-left;
      @include for-width(-tablet) {
        text-align:center;
      }
    }
    & .v-tech__title {
      @include for-width(-small-lg) {
        font-size: rem(60);
        line-height: rem(80);
        margin-top:rem(65);
      }
    }
    & .v-tech__subheading {
      max-width:55%;
      @include for-width(+desktop-xl) {
        max-width:65%;
      }
      @include for-width(-tablet-lg) {
        max-width:70%;
      }
      @include for-width(-tablet) {
        max-width:100%;
      }
    }
  }
  &__vpn {
    padding:rem(75) 0;
    @include for-width(+desktop-xl) {
      padding:rem(125) 0 rem(75);
    }
    @include for-width(-desktop-medium) {
      padding:rem(125) 0 rem(50);
    }
    @include for-width(-tablet-lg) {
      padding:rem(50) 0 0;
    }
    .container {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      @include for-width(-tablet) {
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
      }
    }
    & .v-tech_right {
      @include for-width(-tablet) {
        order:1;
      }
    }
    & .v-tech_left {
      @include for-width(-tablet) {
        order:2;
      }
    }
    & .v-tech__title {
      @include for-width(-small-lg) {
        font-size: rem(60);
        line-height: rem(80);
      }
    }
    & .v-tech__text {
      &:nth-child(odd) {
        padding-right:rem(150);
        @include for-width(-tablet) {
          padding:0 15%;
        }
        @include for-width(-small-lg) {
          padding:0 10%;
        }
      }
      @include for-width(-tablet) {
        padding:0 15%;
      }
      @include for-width(-small-lg) {
        padding:0 10%;
      }
    }
  }
  &__token {
    background-color:$dark_blue_new;
    background-image:url(/img/tech-token-bg.png);
    background-repeat:no-repeat;
    background-size:50% auto;
    background-position:center right;
    clip-path: polygon(0 18%, 100% 0%, 100% 100%, 0% 100%);
    padding:rem(225) 0 rem(125);
    @include for-width(-desktop-medium) {
      clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
      padding:rem(175) 0 rem(100);
      background-position:bottom right;
    }
    @include for-width(-tablet-lg) {
      padding:rem(100) 0 rem(75);
      clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);
    }
    @include for-width(-tablet) {
      padding:rem(75) 0 rem(50);
      clip-path: polygon(0 6%, 100% 0%, 100% 100%, 0% 100%);
      background-size:auto 80%;
    }
    @include for-width(-small-lg) {
      clip-path: polygon(0 3%, 100% 0%, 100% 100%, 0% 100%);
      background-image:url(/img/tech-token-bg-mobile.png);
      background-size:100% auto;
      background-position:center bottom;
      padding:rem(50) 0;
    }
    .container {
      @extend %df;
      @extend %aib;
      @extend %jcsb;
      @include for-width(-tablet-lg) {
        -ms-align-items: center;
        align-items: center;
      }
      @include for-width(-tablet) {
        display:block;
      }
    }
    & .v-tech_right {
      @extend %t-center;
      & img {
        max-width:100%;
        @include for-width(-tablet-lg) {
          margin-top:0;
        }
        @include for-width(-tablet) {
          max-width:45%;
        }
        @include for-width(-small-lg) {
          max-width:55%;
        }
      }
    }
    & .v-tech__title {
      @extend %heading-gradient-light;
      @include for-width(-small-lg) {
        font-size: rem(52);
        line-height: rem(82);
      }
    }
    & .v-tech__subheading {
      color:$white;
      text-transform:initial;
      @include for-width(-small-lg) {
        max-width:85%;
        margin:0 auto rem(25);
      }
    }
    & .v-tech__text {
      color:$light_bg;
      padding-right:25%;
      @include for-width(-tablet-lg) {
        padding-right:5%;
      }
      @include for-width(-tablet) {
        padding:0 15%;
      }
      @include for-width(-small-lg) {
        padding:0 5%;
      }
    }
  }
  &__devices {
    padding:rem(75) 0 rem(100);
    @include for-width(-tablet-lg) {
      padding:rem(50) 0;
    }
    @include for-width(-small-lg) {
      padding:rem(25) 0;
    }
    .container {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      @include for-width(-tablet) {
        display:block;
      }
    }
    & .v-tech_left {
      @include for-width(-tablet) {
        text-align:left;
      }
      @include for-width(-small-lg) {
        padding-left:rem(10);
      }
    }
    & .v-tech__subheading {
      @include for-width(-small-lg) {
        margin-top:rem(15);
      }
    }
  }
  &__cloud {
    .container {
      @extend %df;
      @extend %aic;
      @extend %jcsb;
      background-image:url(/img/tech-cloud-bg.png);
      background-repeat:no-repeat;
      background-size:cover;
      background-position:center right;
      border-radius:rem(40);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      margin-bottom:rem(175);
      padding:rem(50) rem(60);
      @include for-width(-tablet-lg) {
        margin-bottom:rem(100);
        padding:rem(35);
      }
      @include for-width(-tablet) {
        display:block;
        max-width:95%;
        background-image:url(/img/tech-cloud-bg-mobile.png);
        background-color:$light_bg;
        background-repeat:no-repeat;
        background-size:40%;
        background-position:bottom center;
        padding-bottom:rem(250);
        margin-bottom:rem(50);
      }
      @include for-width(-small-lg) {
        border-radius:rem(24);
        max-width:90%;
        padding-bottom:rem(220);
        background-size:70%;
      }
    }
    & .v-tech__title {
      @include for-width(-small-lg) {
        font-size: rem(52);
        line-height: rem(82);
      }
    }
    & .v-tech__text {
      &:nth-child(odd) {
        padding-right:rem(100);
        @include for-width(-small-lg) {
          padding:0;
        }
      }
      @include for-width(-tablet) {
        padding:0 15%;
      }
      @include for-width(-small-lg) {
        padding:0;
      }
    }
  }
}
</style>
