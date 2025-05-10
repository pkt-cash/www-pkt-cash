<template>
  <div class="c-analytics">
    <div class="container">
      <div class="c-analytics_data orange_bg">
        <p class="c-analytics_data__value">332</p>
        <hr />
        <h3 class="c-analytics_data__title">Nodes in Hyperboris</h3>
      </div>
      <div class="c-analytics_data blue_bg">
        <p class="c-analytics_data__value">734</p>
        <hr />
        <h3 class="c-analytics_data__title">Links in Hyperboria</h3>
      </div>
      <div class="c-analytics_data green_bg">
        <p class="c-analytics_data__value">30 sec</p>
        <hr />
        <h3 class="c-analytics_data__title">Last updated</h3>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapFields } from "vuex-map-fields";
export default {
  name: "AnalyticsData",
  // computed: {
  //   ...mapFields("pkt-analytics", [
  //     "already_mined",
  //   ]),
  //   is_mobile() {
  //     return process.client && window.innerWidth < 1100;
  //   }
  // },
  // data() {
  //   return {
  //     timeout: null,
  //   };
  // },
  // filters: {
  //   displayed_pkt_price(value) {
  //     if (value > 0.01)
  //       return (Number(value)).toFixed(2);
  //     return (Number(value)).toFixed(4);
  //   },
  //   displayed_stats_data(value) {
  //     return (Number(value) / 0x40000000).toFixed(0);
  //   },
  //   displayed_enc(value) {
  //     return Math.round(value * 100) / 100;
  //   },
  //   displayed_kb(value) {
  //     if (value > 1 << 30)
  //       return `${parseFloat(value / 1073741824).toFixed(2)} Gb/s`;
  //     if (value > 1 << 20)
  //       return `${parseFloat(value / 1048576).toFixed(2)} Mb/s`;
  //     if (value > 1 << 10)
  //       return `${parseFloat(value / 1048576).toFixed(2)} Kb/s`;
  //     return `${value} bits/s`;
  //   },
  //   commafy(value) {
  //     return ("" + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   },
  // },
  // mounted() {
  //   if (process.client) {
  //     this.timeout = setInterval(
  //       () => this.$store.dispatch("pkt-analytics/update_data"),
  //       60 * 1000
  //     );
  //   }
  // },
  // beforeDestroy() {
  //   clearInterval(this.timeout);
  //   this.timeout = null;
  // },
  // async middleware({ store }) {
  //   await store.dispatch('pkt-analytics/load')
  // },
  // async mounted() {
  //   await this.$store.dispatch('pkt-analytics/load')
  // }
};
</script>

<style lang="scss">
.c-analytics {
  padding-bottom:rem(160);
  @include for-width(-tablet) {
    padding-bottom:rem(80);
  }
  @include for-width(-small-lg) {
    padding-bottom:0;
  }
  & .container {
    @extend %df;
    @extend %jcsb;
    @extend %fw;
    @include for-width(-small-lg) {
      display:block;
      padding-bottom:rem(80);
    }
  }
  &_data {
    width:32%;
    border-radius: rem(20);
    padding:rem(30);
    @extend %t-center;
    @include for-width(-tablet-lg) {
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
      @include for-width(-tablet-lg) {
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
</style>
