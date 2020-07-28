<template>
  <div class="c-cash-main">
    <div class="container">
      <p class="c-cash-main__text">
        PKT is a native blockchain based on bitcoin code. It has a 1 minute
        block time, uses PacketCrypt proof of work and has a Network Steward
        address which receives 20% of every coinbase payout. There are a total
        of 6 billion PKT which will be mined and rather than an abrupt halving
        of the payouts every 4 years, PKT uses a steady decay of 10% every 100
        days.
      </p>
      <figure class="c-cash-main__grafic">
        <img src="/img/cash-grafic.png" alt class="c-cash-main__grafic-img" />
        <figcaption
          class="c-cash-main__grafic-caption"
        >Payout of PKT vs. BTC as percent of total coins</figcaption>
      </figure>
      <p class="c-cash-main__text">
        Because PKT is designed for microtransactions, there will be a total of
        6 billion PKT mined whereas bitcoin will max out at 21 million.
        Furthermore, each PKT is subdividable into 1,073,741,824 units (2 to the
        30th power) whereas there are only 100 million satoshis per bitcoin.
        When Bitcoin price peaked in 2018 at almost $20,000, the price of a
        satoshi was almost two 100ths of a penny, approaching a range where it
        would become impractical for microtransactions, even with nearly free
        transacting over the Lightning Network.
        <br />
        <br />PKT is designed around the
        idea of small denominations, fast cheap transacting, using the Network
        Steward for funding the build-out of decentralized internet
        infrastructure and PacketCrypt creating artificial demand for bandwidth.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
};
</script>

<style lang="scss">
.c-cash-main {
  padding: rem(100) 0 rem(50);

  & .container {
    width: 100%;
    max-width: rem(1100);
    margin: 0 auto;
    padding: 0 rem(15);
  }

  &__text {
    @extend %text-main;
    color: $dark_blue;

    &:not(:last-child) {
      margin-bottom: rem(75);
    }

    & br {
      height: rem(50);
    }
  }

  &__grafic {
    margin-bottom: rem(100);
    width: 100%;

    &-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &-caption {
      width: 100%;
      margin-top: rem(40);
      text-align: center;
      @extend %light;
      @include font_sizes(24, 35);
    }
  }
}
</style>
