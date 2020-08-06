<template>
  <div class="c-index-header">
    <div class="container">
      <div class="c-index-header__wrap">
        <h1 class="c-index-header__title">The world’s first bandwidth-hard blockchain</h1>
        <figure class="c-index-header__img">
          <img src="/img/pkt-gif.gif" alt />
        </figure>
        <div class="c-index-header__list">
<!--          <pre>-->
<!--                {{ already_mined}}-->
<!--                {{reward}}-->
<!--                {{ remaining}}-->
<!--                {{ difficulty }}-->
<!--          </pre>-->
          <ul class="c-index-header__list-list">
            <li class="c-index-header__list-item">
              <h4 class="c-index-header__list-title">Network Bandwidth</h4>
              <span class="c-index-header__list-text">64.41 Mb/s</span>
            </li>
            <li class="c-index-header__list-item">
              <h4 class="c-index-header__list-title">Difficulty</h4>
              <span class="c-index-header__list-text">{{ difficulty | commafy }}</span>
            </li>
            <li class="c-index-header__list-item">
              <h4 class="c-index-header__list-title">Mined to Date</h4>
              <span class="c-index-header__list-text">1,645,817,539.55 PKT</span>
            </li>
            <li class="c-index-header__list-item">
              <h4 class="c-index-header__list-title">Encryptions / Sec</h4>
              <span class="c-index-header__list-text">6,925,200</span>
            </li>
            <li class="c-index-header__list-item">
              <h4 class="c-index-header__list-title">Current Block Reward</h4>
              <span class="c-index-header__list-text">3,037.01 PKT</span>
            </li>
            <li class="c-index-header__list-item">
              <h4 class="c-index-header__list-title">Coins Remaining</h4>
              <span class="c-index-header__list-text">4,353,219,423.41 PKT</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vuex-map-fields'
export default {
  name: "IndexHeader",
  computed: {
    ...mapFields('pkt-analytics', [
      'already_mined',
      'reward',
      'remaining',
      'difficulty',
      'bitsPerSecond',
      'encryptionsPerSecond'
    ])
  },
  filters: {
    displayed_stats_data(value) {
      return Number(value) / 0x40000000
    },
    displayed_kb(value) {
      if (value > (1 << 30)) return `${parseFloat(value / 1073741824).toFixed(2)} Gb/s`
      if (value > (1 << 20)) return `${parseFloat(value / 1048576).toFixed(2)} Mb/s`
      if (value > (1 << 10)) return `${parseFloat(value / 1048576).toFixed(2)} Kb/s`
      return `${value} bits/s`
    },
    commafy(value) {
      return ('' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
};
</script>

<style lang="scss">
.c-index-header {
  @extend %bg-reset;
  background-image: url('/img/main-header-bg.png');
  background-size: cover;
  padding: rem(136) rem(96) rem(66);
  @include for-width(-tablet) {
    padding: rem(73) rem(25) rem(25);
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
    padding-top: rem(90);
    @include for-width(-tablet-lg) {
      flex: 0 0 100%;
      margin-bottom: rem(6);
      padding-top: 0;
    }
  }

  &__img {
    flex: 0 0 40%;
    @include for-width(-tablet-lg) {
      flex: 0 0 100%;
      margin-bottom: rem(100);
    }
  }

  &__list {
    flex: 0 0 100%;

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      flex: 0 0 30%;
      @include for-width(-tablet-lg) {
        flex: 0 0 50%;
      }
      @include for-width(-tablet) {
        flex: 0 0 100%;
        text-align: center;
      }
      margin-bottom: rem(20);
      @include for-width(-tablet) {
        margin-bottom: rem(25);
      }
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
</style>
