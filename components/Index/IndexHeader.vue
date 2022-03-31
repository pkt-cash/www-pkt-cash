<template>
  <div class="c-index-header">
    <div class="container">
        <div class="c-index-header_top c-index-header_top__desktop">
            <h2 class="c-index-header__title">ALWAYS ACCESSIBLE<br/>INTERNET</h2>
            <p class="c-index-header__content">PKT is getting the next billion people online. <br/>Join the movement.</p>
            <div class="c-index-header__links inline_links">
              <nuxt-link to="/utility" class="btn_blue_new button_new"><span>Utility</span></nuxt-link>
              <nuxt-link to="/build" class="btn_blue_new button_new"><span>Build</span></nuxt-link>
              <nuxt-link to="/build#roadmap" class="btn_blue_new button_new"><span>Roadmap</span></nuxt-link>
            </div>
        </div>
    </div>
    <div class="c-index-header_mining_data_wrap">
    <div class="container">
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
  </div>
</template>

<script>
import Globe from "~/components/Index/Globe";
import SpotA from "~/components/Index/SpotA";
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
      if (value > 0.01)
        return (Number(value)).toFixed(2);
      return (Number(value)).toFixed(3);
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
  background-color:$white;
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
    @extend %heading-gradient-darker;
    @extend %bold;
    font-size: rem(86);
    line-height:rem(100);
    text-transform: capitalize;
    margin-bottom:0;
    @include for-width(-small-lg) {
      font-size: rem(42);
      line-height:rem(52);
      width: 100%;
      margin:0 auto rem(20);
    }
  }
  &__content {
    font-size: rem(22);
    line-height:rem(34);
    @extend %regular;
    margin:rem(45) 0 rem(65);
    @include for-width(-small-lg) {
      margin:0;
      font-size: rem(18);
      line-height:rem(30);
      padding:0 15vw;
    }
    & br {
      @include for-width(-small-lg) {
        display:none;
      }
    }
    &:nth-child(even) {
      @include for-width(-small-lg) {
        margin-bottom:rem(30);
      }
    }
  }
  &_top {
    @extend %df;
    @extend %jcc;
    @extend %aic;
    @extend %fdc;
    @extend %t-center;
    padding:rem(235) 0 rem(100);
    @include for-width(-tablet-lg) {
      padding:rem(200) 0 rem(75);
    }
    @include for-width(-tablet) {
      padding:rem(150) 0 rem(75);
    }
    @include for-width(-small-lg) {
      padding:rem(45) 0 0;
      height:100vh;
    }
    &__mobile {
      display:none;
      background-color:$dark_blue_new;
      padding:0;
      @include for-width(-small-lg) {
        display:block;
      }
      &_left {
        height:100vh;
        padding:0 rem(20);
        @extend %df;
        @extend %jcc;
        @extend %aic;
        @extend %fdc;
        position:relative;
        background-image: url(/img/home-bg-mobile.png);
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        @include for-width(-small-sm) {
          height:auto;
          padding-top:rem(100);
        }
        &_globe {
          display: block;
          width: 80%;
          height: auto;
          z-index:2;
          position:relative;
        }
        &__textwrap {
          z-index:2;
          position:relative;
        }
        & #arrow_down {
          display:block;
          margin:0 auto;
          position:absolute;
          bottom:rem(20);
          z-index:2;
          @include for-width(-small-sm) {
            display:none;
          }
          & img {
            width:rem(22);
            height:auto;
          }
        }
      }
      &_right {
        padding:rem(25) rem(20) rem(50);
        & .c-index-header__content {
          color:$white;
          @extend %t-center;
          padding:0 rem(10);
          @include for-width(-small-sm) {
            padding:0;
          }
        }
      }
      & .c-index-header__title {
        @extend %heading-gradient-light;
        margin-bottom:0;
      }
    }
  }
  &__links {
    @include for-width(-small-lg) {
      display:block;
      width:100%;
    }
      .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display: inline-block;
        margin: 0 rem(10);
        @include for-width(-small-lg) {
          display: block;
          margin:0 auto rem(20);
          width:100%;
          max-width:60vw;
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
  &_mining_data_wrap {
    background-color:$dark_blue_new;
  }
  &_mining_data {
    padding:rem(50) 0 rem(35);
    margin:0 auto;
    max-width:85%;
    @extend %df;
		@extend %jcsb;
    @extend %aic;
    @include for-width(-tablet) {
      max-width:100%;
    }
    @include for-width(-small-lg) {
      display:block;
      padding:rem(65) 0 rem(50);
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
