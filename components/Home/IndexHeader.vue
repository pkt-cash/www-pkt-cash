<template>
  <div class="c-index-header">
    <div class="c-index-header_data">
      <h3 class="c-index-header_data__title">{{ $t("home_new.network_1") }}</h3>
      <template>
        <p class="c-index-header_data__value orange" v-if="loading">Loading...</p>
        <p class="c-index-header_data__value orange" v-else>{{ pkt_cp_logins | commafy }}</p>
      </template>
    </div>
    <div class="c-index-header_data">
      <h3 class="c-index-header_data__title">{{ $t("home_new.network_2") }}</h3>
      <p class="c-index-header_data__value blue">{{ (bitsPerSecond / 1024 / 1024 / 1024).toFixed(2) }}Gb</p>
    </div>
    <div class="c-index-header_data">
      <h3 class="c-index-header_data__title">{{ $t("home_new.network_3") }}</h3>
      <p class="c-index-header_data__value green">${{ pkt_price | displayed_pkt_price }} / PKT</p>
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
      "bitsPerSecond",
      "encryptionsPerSecond",
      "pkt_price",
      "pkt_cp_logins",
      "loading"
    ]),
    is_mobile() {
      return process.client && window.innerWidth < 1100;
    }
  },
  data() {
    return {
      timeout: null,
    };
  },
  filters: {
    displayed_pkt_price(value) {
      if (value > 0.01)
        return (Number(value)).toFixed(2);
      return (Number(value)).toFixed(4);
    },
    displayed_stats_data(value) {
      return (Number(value) / 0x40000000).toFixed(0);
    },
    displayed_enc(value) {
      return Math.round(value * 100) / 100;
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
      this.loading = false;
    }
  },
  beforeDestroy() {
    clearInterval(this.timeout);
    this.timeout = null;
  }
};
</script>

<style lang="scss">
.c-index-header {
  &_data {
    margin-top:rem(55);
    @include for-width(-tablet) {
      margin-top:rem(25);
    }
    &:first-child {
      margin-top:0;
    }
    &__title {
      @extend %p-common;
    }
    &__value {
      @extend %inter_regular;
      font-size:rem(100);
      line-height:1;
      @include for-width(-laptop) {
        font-size:rem(80);
      }
      @include for-width(-tablet) {
        font-size:rem(70);
      }
      @include for-width(-small-lg) {
        font-size:rem(50);
      }
    }
  }
}
</style>
