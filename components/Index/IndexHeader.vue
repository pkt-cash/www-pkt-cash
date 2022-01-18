<template>
  <div class="c-index-header">
    <div class="container">
        <div class="c-index-header_top">
          <div class="c-index-header_top_left">
            <h1 class="c-index-header__uptitle">{{ $t('home.subtitle') }}</h1>
            <h2 class="c-index-header__title">{{ $t('home.title') }}</h2>
            <p class="c-index-header__content">PKT is a fully decentralized layer-1 protocol. It is designed to transmit high speed data around the world and enable internet access without relying on traditional monopolistic ISPs.</p>
            <p class="c-index-header__content">The PKT Network is operated entirely by the people who participate. There is no central company, no investors and no pre-mine. PKT technology lowers the barriers of entry into the world of internet service. With PKT, everyone has the economic incentive to provide internet to their neighborhood as an Edge Point, or administer technical online services as a Cloud ISP.</p>
            <div class="c-index-header__links inline_links">
              <nuxt-link to="/about" class="btn_blue_new button_new"><span>Intro to PKT</span></nuxt-link>
              <nuxt-link to="/origin-story" class="btn_blue_new button_new"><span>PKT Origin Story</span></nuxt-link>
            </div>
          </div>
          <div class="c-index-header_top_right">
          <figure class="c-index-header__img">
           <Globe />
           <!-- <img src="/img/home-globe.png" alt="Globe" /> -->
          </figure>
          </div>
        </div>
        <div class="c-index-header_mining_data">
          <div class="c-index-header_mining_data_title">
            <h2>{{ $t('home.mining_data_title') }}:</h2>
            <p class="c-index-header_live btn_blue_new">{{ $t('home.mining_data_subtitle') }}</p>
          </div>
          <div class="c-index-header_data">
            <h3 class="c-index-header__desk-itm-title">{{ $t('home.bandwidth') }}</h3>
            <p class="c-index-header__desk-itm-text">{{ (bitsPerSecond / 1024 / 1024 / 1024).toFixed(2) }} Gb</p>
            <h3 class="c-index-header__desk-itm-title">{{ $t('home.index_3') }}</h3>
            <p class="c-index-header__desk-itm-text">{{ already_mined | displayed_stats_data | commafy }} PKT</p>
          </div>
          <div class="c-index-header_data">
            <h3 class="c-index-header__desk-itm-title">{{ $t('home.encryptions') }}</h3>
            <p class="c-index-header__desk-itm-text">{{ encryptionsPerSecond | displayed_enc | commafy }}</p>
            <h3 class="c-index-header__desk-itm-title">{{ $t('home.pkt_price') }}</h3>
            <p class="c-index-header__desk-itm-text">${{ json | displayed_pkt_price }} / PKT</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Globe from "~/components/Index/Globe";
import { mapFields } from "vuex-map-fields";
export default {
  name: "IndexHeader",
  computed: {
    ...mapFields("pkt-analytics", [
      "already_mined",
      "bitsPerSecond",
      "encryptionsPerSecond",
    ]),
    is_mobile() {
      return process.client && window.innerWidth < 1100;
    }
  },
  data() {
    return {
      timeout: null,
      json: null
    };
  },
  filters: {
    displayed_pkt_price(value) {
      return (Number(value)).toFixed(2);
    },
    displayed_stats_data(value) {
      return (Number(value) / 0x40000000).toFixed(0);
    },
    displayed_enc(value) {
      return (Number(value) / 1000000);
    },
    displayed_kb(value) {
      if (value > 1 << 30)
        return `${parseFloat(value / 1073741824).toFixed(2)} Gb/s`;
      if (value > 1 << 20)
        return `${parseFloat(value / 1048576).toFixed(2)} Mb/s`;
      if (value > 1 << 10)
        return `${parseFloat(value / 1048576).toFixed(2)} Kb/s`;
      return `${value} bits/s`;
    },
    commafy(value) {
      return ("" + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  mounted() {
    if (process.client) {
      this.timeout = setInterval(
        () => this.$store.dispatch("pkt-analytics/update_data"),
        60 * 1000
      );
    }
  },
  beforeDestroy() {
    clearInterval(this.timeout);
    this.timeout = null;
  },
  created: function () {
      fetch("https://pktticker.tonygaitatzis.com/api/1.0/spot/PKT/USD/")
        .then(r => r.json())
        .then(json => {
          this.json=json.price;
        });
  }
};
</script>

<style lang="scss">
.c-index-header {
  position: relative;
  background-color:$dark_blue_new;
  background-image: url(/img/home-bg.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% auto;
  overflow: hidden;
  @include for-width(+desktop-lg) {
    background-position: left -20px;
    background-size: 95% auto;
  }
  @include for-width(+desktop-hg) {
    background-position: left -10px;
    background-size: 90% auto;
  }
  @include for-width(+desktop-er) {
    background-position: left -20px;
    background-size: 92% auto;
  }
  @include for-width(+desktop-xl) {
    background-image: url(/img/home-bg-xl.jpg);
    background-position: left -60px;
  }
  @include for-width(-desktop-medium) {
    background-position: left top;
    background-size: 110% auto;
  }
  @include for-width(-laptop) {
    background-position: left top;
    background-size: 140%;
  }
  @include for-width(-tablet-lg) {
    background-position: left 10px;
    background-size: 115%;
  }
  @include for-width(-tablet) {
    background-position: left top;
    background-size: 150%;
  }
  @include for-width(-small-lg) {
    background:$white;
  }
  & .container {
    @extend %container_new;
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25);
    }
    @include for-width(-small-lg) {
      padding:0;
    }
  }
  &__uptitle {
    color:$light_blue_new;
    @extend %medium;
    font-size: rem(18);
    line-height:rem(28);
    text-transform: uppercase;
    @include for-width(+desktop-lg) {
      font-size: rem(22);
      line-height:rem(33);
    }
    @include for-width(-laptop) {
      font-size: rem(16);
      line-height:rem(26);
    }
    @include for-width(-small-lg) {
       font-family: "Poppins-SemiBold", sans-serif;
       font-size: rem(20);
       line-height:rem(26);
     }
  }
  &__title {
    @extend %heading-gradient-dark;
    @extend %bold;
    font-size: rem(66);
    line-height:rem(80);
    text-transform: capitalize;
    max-width: rem(570);
    margin-bottom:rem(15);
    @include for-width(+desktop-hg) {
      max-width: 575px;
    }
    @include for-width(+desktop-lg) {
      font-size: rem(76);
      line-height:rem(90);
    }
    @include for-width(-desktop-med) {
      font-size: rem(60);
      line-height:rem(68);
      width: rem(450);
    }
    @include for-width(-laptop) {
      font-size: rem(56);
      line-height:rem(66);
      width: rem(425);
    }
    @include for-width(-tablet) {
      font-size: rem(50);
      line-height:rem(60);
      width: rem(375);
    }
    @include for-width(-small-lg) {
      font-size: rem(42);
      line-height:rem(52);
      width: 98%;
      margin:rem(15) auto rem(25);
    }
  }
  &__content {
    @extend %pn;
    @extend %regular;
    &:nth-child(even) {
      @include for-width(-small-lg) {
        margin-bottom:rem(30);
      }
    }
  }
  &_top {
    @extend %df;
		@extend %fdr;
		@extend %jcsb;
    @extend %aic;
    padding-top:rem(195);
    position:relative;
    @include for-width(+desktop-hg) {
      padding-top:rem(145);
    }
    @include for-width(+desktop-er) {
      padding-top:rem(225);
    }
    @include for-width(-desktop-lg) {
      padding-top:rem(185);
    }
    @include for-width(-desktop-medium) {
      padding-top:rem(175);
    }
    @include for-width(-tablet) {
      display:block;
      padding-top:rem(125);
    }
    @include for-width(-small-lg) {
      padding-top:rem(110);
    }
    &_left {
      @include for-width(-tablet) {
        max-width: 90%;
      }
      @include for-width(-small-lg) {
        max-width: 100%;
        padding:0 rem(25) rem(35);
        text-align:center;
      }
    }
    &_right {
      @include for-width(-small-lg) {
        background-image: url(/img/home-bg-mobile.png);
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        padding:0 rem(20);
      }
    }
  }
  &__links {
      margin-top:rem(25);
      @include for-width(-small-lg) {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: space-between;
        -ms-align-items: center;
        align-items: center;
      }
      .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display: inline-block;
        margin-right: 10px;
        @include for-width(-small-lg) {
          display: block;
          margin:0;
          width:100%;
          max-width:42vw;
          font-family: "Poppins-SemiBold", sans-serif;
        }
      }
    }
  &__img {
    @extend %t-right;
    @include for-width(-tablet) {
      position:absolute;
      top:50px;
      right:0;
    }
    @include for-width(-small-lg) {
      position:relative;
      top:0;
    }
    img {
      max-width:90%;
      padding: 25px 0 0 25px;
      @include for-width(-tablet) {
        max-width:rem(300);
        padding:0;
      }
      @include for-width(-small-lg) {
        max-width:100%;
      }
    }
  }
  &_mining_data {
    padding:rem(75) 0 rem(75);
    margin:0 auto;
    max-width:85%;
    @extend %df;
		@extend %jcsb;
    @extend %aic;
    @include for-width(+desktop-hg) {
      padding:rem(150) 0 rem(75);
    }
    @include for-width(+desktop-er) {
      padding:rem(200) 0 rem(75);
    }
    @include for-width(-tablet) {
      max-width:100%;
      padding:rem(100) 0 rem(50);
    }
    @include for-width(-small-lg) {
      display:block;
      padding:0 0 rem(50);
      background-color:$dark_blue_new;
    }
    &_title {
      @extend %subheading;
			color: $white;
      @extend %t-center;
      @include for-width(-small-lg) {
        margin-bottom:rem(35);
      }
      h2 {
        margin-bottom:rem(10);
      }
    }
  }
  &_live {
    @extend %btn_blue_new;
    text-transform:uppercase;
    border-radius: 18px;
    @include for-width(-small-lg) {
      display: inline-block;
      padding: rem(3) rem(24);
    }
  }
  &_data {
    @extend %t-right;
    @include for-width(-small-lg) {
      text-align:center;
    }
  }
  &__desk-itm-title {
    color: $light_blue_new;
    @extend %semibold;
    font-size: rem(18);
    line-height: rem(28);
    @include for-width(+desktop-lg) {
      font-size: rem(20);
      line-height: rem(30);
    }
    @include for-width(-laptop) {
      font-size: rem(16);
      line-height: rem(26);
    }
  }
  &__desk-itm-text {
    color: $white;
    @extend %bold;
    font-size: rem(32);
    line-height: rem(50);
    margin-bottom:rem(20);
    @include for-width(+desktop-lg) {
      font-size: rem(40);
      line-height: rem(60);
    }
    @include for-width(-desktop-med) {
      font-size: rem(30);
      line-height: rem(48);
    }
    @include for-width(-laptop) {
      font-size: rem(26);
      line-height: rem(36);
    }
    @include for-width(-tablet) {
      font-size: rem(24);
      line-height: rem(34);
    }
    @include for-width(-small-lg) {
        margin-bottom:rem(25);
    }
  }
}
</style>
