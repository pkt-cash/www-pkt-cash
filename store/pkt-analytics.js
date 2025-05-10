import { Map as immutableMap } from 'immutable';
import { getField, updateField } from 'vuex-map-fields';

const STATE = immutableMap({
  date: Date.now(),
  pkt_price: null,
  pkt_cp_logins: null,
  loading: true,
});

export const state = () => STATE.toJS();

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  clean(state) {
    Object.assign(state, {
      ...STATE.toJS(),
      date: Date.now(),
    });
  },
};

export const actions = {
  async load({ commit }) {
    try {
      const pkt_price_fetch = await this.$axios.$get("https://app.pkt.cash/api/v1/price")
      const pkt_cp_logins_fetch = await this.$axios.$get("https://pkt.cash/api/community-stats/pktpal")
      console.log('load function')
      
      commit('updateField', { path: 'pkt_price', value: pkt_price_fetch.price_usdc })
      commit('updateField', { path: 'pkt_cp_logins', value: pkt_cp_logins_fetch[0].all_cp_logins })
      this.loading = false;

    } catch (e) {
      console.log(e)
      // commit('updateField', { path: 'status', value: 'error' })
      this.loading = false;
    }
  },
  async update_data({ commit }) {
    try {
      const pkt_price_fetch = await this.$axios.$get("https://app.pkt.cash/api/v1/price")
      const pkt_cp_logins_fetch = await this.$axios.$get("https://pkt.cash/api/community-stats/pktpal")
      
      commit('updateField', { path: 'pkt_price', value: pkt_price_fetch.price_usdc })
      commit('updateField', { path: 'pkt_cp_logins', value: pkt_cp_logins_fetch[0].all_cp_logins })
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }
}
