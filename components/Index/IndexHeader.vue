<template>
  <div class="c-index-header">
    <div class="bg"></div>
    <div class="container">
      <div class="c-index-header__wrap">
        <h1 class="c-index-header__title">The world’s first bandwidth-hard blockchain</h1>
        <figure class="c-index-header__img">
          <video autoplay loop muted playsinline draggable="false">
            <source type="video/mp4" src="/gif.mp4" />
          </video>
          <!--          <img src="/img/pkt-gif.gif" alt />-->
        </figure>
        <template v-if="is_mobile">
          <div class="c-index-header__list">
            <ul class="c-index-header__list-list">
              <li class="c-index-header__list-item">
                <h4 class="c-index-header__list-title">Network Bandwidth</h4>
                <span
                  class="c-index-header__list-text"
                >{{ (bitsPerSecond / 1024 / 1024).toFixed(2) }} Mb/s</span>
              </li>
              <li class="c-index-header__list-item">
                <h4 class="c-index-header__list-title">Difficulty</h4>
                <span class="c-index-header__list-text">
                  {{
                  difficulty | commafy
                  }}
                </span>
              </li>
              <li class="c-index-header__list-item">
                <h4 class="c-index-header__list-title">Mined to Date</h4>
                <span class="c-index-header__list-text">
                  <!--                1,645,817,539.55 PKT-->
                  {{ already_mined | displayed_stats_data | commafy }} PKT
                </span>
              </li>
              <li class="c-index-header__list-item">
                <h4 class="c-index-header__list-title">Encryptions / Sec</h4>
                <span class="c-index-header__list-text">
                  <!--                6,925,200-->
                  {{ encryptionsPerSecond | commafy }}
                </span>
              </li>
              <li class="c-index-header__list-item">
                <h4 class="c-index-header__list-title">Current Block Reward</h4>
                <span class="c-index-header__list-text">
                  <!--                3,037.01 PKT-->
                  {{ reward | displayed_stats_data | commafy }} PKT
                </span>
              </li>
              <li class="c-index-header__list-item">
                <h4 class="c-index-header__list-title">Coins Remaining</h4>
                <span class="c-index-header__list-text">
                  <!--                4,353,219,423.41 PKT-->
                  {{ remaining | displayed_stats_data | commafy }} PKT
                </span>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <div class="c-index-header__desk-list">
            <div class="c-index-header__desk-left">
              <div class="c-index-header__desk-itm-l c-index-header__desk-itm">
                <h3 class="c-index-header__desk-itm-title">Network Bandwidth</h3>
                <p
                  class="c-index-header__desk-itm-text"
                >{{ (bitsPerSecond / 1024 / 1024).toFixed(2) }} Mb/s</p>
              </div>
              <div class="c-index-header__desk-itm-l c-index-header__desk-itm">
                <h3 class="c-index-header__desk-itm-title">Encryptions / Sec</h3>
                <p class="c-index-header__desk-itm-text">{{ encryptionsPerSecond | commafy }}</p>
              </div>
              <div class="c-index-header__desk-itm-l c-index-header__desk-itm">
                <h3 class="c-index-header__desk-itm-title">Difficulty</h3>
                <p class="c-index-header__desk-itm-text">{{ difficulty | commafy }}</p>
              </div>
            </div>
            <div class="c-index-header__desk-right">
              <div class="c-index-header__desk-itm-r c-index-header__desk-itm">
                <h3 class="c-index-header__desk-itm-title">Current Block Reward</h3>
                <p
                  class="c-index-header__desk-itm-text"
                >{{ reward | displayed_stats_data | commafy }} PKT</p>
              </div>
              <div class="c-index-header__desk-itm-r c-index-header__desk-itm">
                <h3 class="c-index-header__desk-itm-title">Coins Remaining</h3>
                <p
                  class="c-index-header__desk-itm-text"
                >{{ remaining | displayed_stats_data | commafy }} PKT</p>
              </div>
              <div class="c-index-header__desk-itm-r c-index-header__desk-itm">
                <h3 class="c-index-header__desk-itm-title">Mined to Date</h3>
                <p
                  class="c-index-header__desk-itm-text"
                >{{ already_mined | displayed_stats_data | commafy }} PKT</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "IndexHeader",
  computed: {
    ...mapFields("pkt-analytics", [
      "already_mined",
      "reward",
      "remaining",
      "difficulty",
      "bitsPerSecond",
      "encryptionsPerSecond",
    ]),
    is_mobile() {
      return process.client && window.innerWidth < 1100;
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  filters: {
    displayed_stats_data(value) {
      return (Number(value) / 0x40000000).toFixed(2);
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
};
</script>

<style lang="scss">
.c-index-header {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    119.29deg,
    rgba(60, 207, 239, 0.0126) 28.2%,
    rgba(60, 196, 239, 0.06) 78.24%
  );
  @extend %bg-reset;
  padding: rem(136) rem(96) rem(66);
  @include for-width(-tablet) {
    padding: rem(73) rem(25) rem(25);
    background: linear-gradient(
      69.29deg,
      rgba(60, 207, 239, 0.0126) 28.2%,
      rgba(60, 196, 239, 0.06) 78.24%
    );
  }

  .container {
    width: 100%;
    max-width: rem(1315);
    margin: 0 auto;
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__title {
    flex: 0 0 55%;
    @extend %h1-title;
    padding-top: rem(50);
    @include for-width(-desktop-lg) {
      padding-top: rem(30);
    }
    @include for-width(-desktop-medium) {
      padding-top: rem(50);
    }
    @include for-width(-desktop-med) {
      padding-top: rem(30);
    }
    @include for-width(-tablet-lg) {
      flex: 0 0 100%;
      width: 100%;
      /*margin-bottom: rem(6);*/
      @include font_sizes(55, 82);
      text-align: center;
      max-width: 500px;
      margin: 0 auto rem(6);
    }
    @include for-width(-small-lg) {
      text-align: left;
      @include font_sizes(33, 43);
    }
  }

  &__img {
    flex: 0 0 40%;
    @include for-width(+ desktop-medium) {
      height: rem(420);
    }
    @include for-width(+ desktop-lg) {
      height: rem(500);
    }
    video {
      width: 100%;
      height: 100%;
    }
    @include for-width(-tablet-lg) {
      flex: 0 0 100%;
      max-width: rem(450);
      margin: 0 auto;
      margin-bottom: rem(15);
    }
  }

  &__list {
    flex: 0 0 100%;

    &-list {
      display: flex;
      flex-wrap: wrap;
      @include for-width(-tablet-lg) {
        justify-content: space-between;
      }
    }

    &-item {
      flex: 0 0 30%;
      margin-bottom: rem(20);
      @include for-width(-tablet-lg) {
        flex: 0 0 50%;
      }
      @include for-width(-tablet) {
        flex: 0 0 100%;
        text-align: center;
      }
      @include for-width(-tablet) {
        margin-bottom: rem(25);
        &:first-child {
          order: 1;
        }
        &:nth-child(2) {
          order: 6;
        }
        &:nth-child(3) {
          order: 2;
        }
        &:nth-child(4) {
          order: 5;
        }
        &:nth-child(5) {
          order: 3;
        }
        &:nth-child(6) {
          order: 4;
        }
      }
    }
    &__desk {
    }

    &-title {
      @extend %bold;
      @include font_sizes(18, 28);
      @include for-width(-tablet) {
        @include font_sizes(16, 26);
      }
      margin-bottom: rem(12);
    }

    &-text {
      color: $hard_blue;
      @extend %bold;
      @include font_sizes(28, 38);
      @include for-width(-tablet) {
        @include font_sizes(24, 33);
      }
    }
  }
}
.c-index-header__desk {
  &-list {
    margin-top: rem(-120);
    width: 100%;
    display: flex;
    justify-content: space-between;
    @include for-width(-desktop-lg) {
      margin-top: rem(-90);
    }
    @include for-width(-desktop-medium) {
      margin-top: rem(-50);
    }
    @include for-width(-laptop) {
      margin-top: rem(10);
    }
    @include for-width(-tablet-lg) {
      margin-top: rem(60);
    }
  }
  &-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  &-itm {
    &-l,
    &-r {
      position: relative;
      padding: rem(10);
      border-left: 1px solid #98e0f9;
      &:after,
      &:before {
        position: absolute;
        content: "";
        display: block;
        width: rem(40);
        height: rem(1);
        background-color: #98e0f9;
      }
      &:after {
        top: 0;
        left: 0;
      }
      &:before {
        bottom: 0;
        left: 0;
      }
    }
    &-r {
      border-left: 1px solid transparent;
      border-bottom: 1px solid #98e0f9;
      &:after,
      &:before {
        width: rem(1);
        height: rem(40);
      }
      &:after {
        top: auto;
        bottom: 0;
        left: 0;
      }
      &:before {
        bottom: 0;
        left: auto;
        right: -2px;
      }
    }
    &-r {
      padding: rem(10) rem(15);
    }
    &-title {
      @extend %medium;
      @include font_sizes(18, 28);
    }
    &-text {
      @extend %medium;
      @include font_sizes(18, 22);
      color: #3cadef;
      margin-top: rem(10);
    }
  }
}
</style>
