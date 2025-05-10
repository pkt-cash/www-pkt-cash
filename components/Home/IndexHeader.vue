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
      <h3 class="c-index-header_data__title">Total Staked PKT</h3>
      <template>
        <p class="c-index-header_data__value blue" v-if="load_stake">103.40M PKT</p>
        <p class="c-index-header_data__value blue" v-else>{{ lockboxCoinsInMillions }}M PKT</p>
      </template>
    </div>
    <div class="c-index-header_data">
      <h3 class="c-index-header_data__title">{{ $t("home_new.network_3") }}</h3>
      <p class="c-index-header_data__value green">${{ pkt_price | displayed_pkt_price }} / PKT</p>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import axios from 'axios';
export default {
  name: "IndexHeader",
  computed: {
    ...mapFields("pkt-analytics", [
      "pkt_price",
      "pkt_cp_logins",
      "loading",
    ]),
    is_mobile() {
      return process.client && window.innerWidth < 1100;
    }
  },
  data() {
    return {
      timeout: null,
      load_stake: true,
      lockboxCoinsInMillions: null,
    };
  },
  created() {
    this.fetchLockboxCoins();
  },
  methods: {
    async fetchLockboxCoins() {
      try {
        const response = await axios.get('https://app.pkt.cash/api/v1/stats');
        const lockboxCoins = response.data.lockbox_coins / 10 ** 18;
        this.lockboxCoinsInMillions = (lockboxCoins / 10 ** 6).toFixed(2);
        this.load_stake = false;
      } catch (error) {
        console.error('Error fetching lockbox coins:', error);
        this.lockboxCoinsInMillions = '103.47';
      }
    },
  },
  filters: {
    displayed_pkt_price(value) {
      return (value / 10 ** 18).toFixed(4);
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
