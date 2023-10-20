<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Navigation -->
        <div class="c-content-main__navigation">
          <ul class="c-content-main__navigation-list">
            <li class="c-content-main__navigation-item">
              <a
                href="#network-steward-charter"
                class="c-content-main__navigation-link"
                @click="itm_link = 'network-steward-charter'"
                :class="{ active: itm_link === 'network-steward-charter' || itm_link === null }"
              >{{ $t("steward.network_nav_01") }}</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a
                href="#funding-proposal"
                class="c-content-main__navigation-link"
                @click="itm_link = 'funding-proposal'"
                :class="{ active: itm_link === 'funding-proposal'}"
              >{{ $t("steward.network_nav_02") }}</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a
                href="#network-steward-projects"
                class="c-content-main__navigation-link"
                @click="itm_link = 'network-steward-projects'"
                :class="{ active: itm_link === 'network-steward-projects'}"
              >{{ $t("steward.network_nav_03") }}</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a
                href="#who-is-the-network-steward"
                class="c-content-main__navigation-link"
                @click="itm_link = 'who-is-the-network-steward'"
                :class="{ active: itm_link === 'who-is-the-network-steward'}"
              >{{ $t("steward.network_nav_04") }}</a>
            </li>
          </ul>
        </div>
        <!-- // Navigation -->

        <!-- Item 1 -->
        <div class="c-content-main__content">
          <div class="c-content-anchor" id="network-steward-charter"></div>
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">{{ $t("steward.network_nav_01") }}</h2>
            <p class="c-content-main__text">{{ $t("steward.network_01_content_01") }}</p>
            <p class="c-content-main__text">{{ $t("steward.network_01_content_02") }}</p>
            <ul class="c-content-main__list">
              <li class="c-content-main__list-item">{{ $t("steward.network_01_content_03") }}</li>
              <li class="c-content-main__list-item">{{ $t("steward.network_01_content_04") }}</li>
              <li class="c-content-main__list-item">{{ $t("steward.network_01_content_05") }}</li>
            </ul>
            <p class="c-content-main__text">{{ $t("steward.network_01_content_06") }}</p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-anchor" id="funding-proposal"></div>
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">{{ $t("steward.network_02_content_01") }}</h2>
            <p class="c-content-main__text">{{ $t("steward.network_02_content_02") }}</p>
            <p class="c-content-main__text">{{ $t("steward.network_02_content_03") }}</p>
            <p class="c-content-main__text">{{ $t("steward.network_02_content_04") }}</p>
            <a href="https://github.com/pkt-cash/ns-projects" target="_blank" class="c-content-main__btn blue-btn-arrow">
              <span>{{ $t("steward.network_02_content_05") }}</span>
            </a>
            <a href="https://github.com/pkt-cash/ns-projects/blob/master/projects/template.md" target="_blank" class="c-content-main__btn blue-btn-arrow">
              <span>{{ $t("steward.network_02_content_06") }}</span>
            </a>
          </div>
          <!-- //Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-anchor" id="network-steward-projects"></div>
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">{{ $t("steward.network_nav_03") }}</h2>
            <p class="c-content-main__text">{{ $t("steward.network_03_content_01") }}</p>
            <a href="https://github.com/pkt-cash/ns-projects/tree/master/projects" target="_blank" class="c-content-main__btn blue-btn-arrow">
              <span>{{ $t("steward.network_nav_03") }}</span>
            </a>
          </div>
          <!-- // Item 3 -->

          <!-- Item 4 -->
          <div class="c-content-anchor" id="who-is-the-network-steward"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">{{ $t("steward.network_nav_04") }}?</h2>
            <p class="c-content-main__text">{{ $t("steward.network_04_content_01") }}</p>
            <p class="c-content-main__text">
              {{ $t("steward.network_04_content_02") }}
              <a href="https://explorer.pkt.cash/address/pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2" target="_blank">
                https://explorer.pkt.cash/address/pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2
              </a>
            </p>
            <ul class="c-content-main__list">
              <li class="c-content-main__list-item">{{ $t("steward.network_04_content_03") }}</li>
              <li class="c-content-main__list-item">{{ $t("steward.network_04_content_04") }}</li>
              <li class="c-content-main__list-item">{{ $t("steward.network_04_content_05") }}</li>
              <li class="c-content-main__list-item">{{ $t("steward.network_04_content_06") }}</li>
              <li class="c-content-main__list-item">{{ $t("steward.network_04_content_07") }}</li>
            </ul>
            <p class="c-content-main__text">{{ $t("steward.network_04_content_08") }}</p>
            <nuxt-link class="c-content-main__btn blue-btn-arrow" :to="localePath('network-steward-vote')">
              <span>{{ $t("steward.network_04_content_09") }}</span>
            </nuxt-link>
          </div>
          <!-- // Item 4 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworkMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
  data() {
    return {
      itm_link: null
    }
  },
  methods: {
    getCoords(name) {
      const box = document.querySelector(name).getBoundingClientRect()
      //
      return box.top + pageYOffset;
    }
  },
  mounted() {
    if(process.client) {
      document.addEventListener('scroll', () => {
        const condition = window.innerWidth > 1100 ? 80 : 60;
        const section_0 = this.getCoords('#network-steward-charter') - condition;
        const section_1 = this.getCoords('#funding-proposal') - condition;
        const section_2 = this.getCoords('#network-steward-projects') - condition;
        const section_3 = this.getCoords('#who-is-the-network-steward') - condition;
        let scroll_y = window.innerWidth > 1100 ? window.scrollY : window.scrollY + 30;
        if(scroll_y < section_0) {
          this.itm_link = null
        }
        if(scroll_y >= section_0) {
          this.itm_link = 'network-steward-charter'
        }
        if(scroll_y >= section_1) {
          this.itm_link = 'funding-proposal'
        }
        if(scroll_y >= section_2) {
          this.itm_link = 'network-steward-projects'
        }
        if(scroll_y >= section_3) {
          this.itm_link = 'who-is-the-network-steward'
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.c-content-main {
  & .container {
    width: 100%;
    max-width: rem(1138);
  }
  &__title {
    @include for-width(-tablet) {
      font-size: rem(38);
      line-height: rem(45);
      padding-right: rem(10);
    }
  }
  &__btn {
    @include for-width(-tablet) {
      display: block;
      margin: 0 auto rem(10);
      max-width: rem(223);
      &.blue-btn-arrow {
        margin-right: auto;
      }
    }
  }

  &__content {
    max-width: calc(100% - 435px);
    @include for-width(-tablet) {
      max-width: 100%;
    }
  }

  &__navigation {
    width: rem(250);
  }
}
</style>
