<template>
  <div class="c-analytics">
    <div class="container">
      <div class="c-analytics_data orange_bg">
        <!-- <p class="c-analytics_data__value">{{ (bitsPerSecond / 1024 / 1024 / 1024).toFixed(2) }}</p> -->
        <p class="c-analytics_data__value">2,229,237</p>
        <hr />
        <h3 class="c-analytics_data__title">Block Height</h3>
      </div>
      <div class="c-analytics_data blue_bg">
        <!-- <p class="c-analytics_data__value">{{ difficulty }}</p> -->
        <p class="c-analytics_data__value">7,977,368</p>
        <hr />
        <h3 class="c-analytics_data__title">Mining Difficulty</h3>
      </div>
      <div class="c-analytics_data green_bg">
        <!-- <p class="c-analytics_data__value">{{ pkt_cp_logins | commafy }}</p> -->
        <p class="c-analytics_data__value">11,627</p>
        <hr />
        <h3 class="c-analytics_data__title">Mining Addresses</h3>
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
  //     "pkt_cp_logins",
  //     "bitsPerSecond",
  //     "difficulty",
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
    width:31%;
    border-radius: rem(20);
    padding:rem(30);
    @extend %t-center;
    @include for-width(-tablet) {
      padding:rem(20) rem(10);
    }
    @include for-width(-small-lg) {
      width:100%;
      margin-bottom:rem(20);
    }
    &__value {
      color:$black_blue;
      @extend %h2-common;
      @include for-width(-tablet) {
        font-size: rem(36);
        line-height: rem(46);
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
