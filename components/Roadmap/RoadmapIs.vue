<template>
  <div class="c-roadmap-is">
    <div class="container">
      <h1 class="c-roadmap-is__title">The PKT Roadmap</h1>
      <ul class="c-roadmap-is__list">
        <li class="c-roadmap-is__item">
          <a href="#VPN Marketplace">Phase 1</a> - Launch the PKT blockchain and begin bandwidth-hard mining using PacketCrypt.
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Support Internet Sharing">Phase 2</a> - Utilize technology use cases including VPN bandwidth leasing, tokenized bandwidth, DeFi, and connecting PKT to cjdns.
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Tokenized Bandwidth Leases">Phase 3</a> - Scale low cost internet sharing, introduce first Cloud ISPs, and enable high speed transactions in and out of PKT using Lightning Network.
        </li>
        <li class="c-roadmap-is__item" id="letter_from_cjd">
          <a href="#Support Next Gen Networking Hardware">Phase 4</a> - Innovate on Cloud ISP commercialization, getting on the internet without a traditional ISP, and selling tokenize bandwidth into a bandwidth trading marketplace.
        </li>
      </ul>
      <div class="d">
        <nuxt-link to="/about" class="c-roadmap-is__btn blue-btn">
          <span>Letter from CJD</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapIs",
};
</script>

<style lang="scss">
.c-roadmap-is {
  padding: rem(100) rem(25) rem(82);
  @include for-width(-small-lg) {
    padding: rem(25) rem(25) rem(21);
  }

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    color: $dark_blue;
    margin-bottom: rem(39);
    @include for-width(+ small-lg) {
      text-align: center;
      margin-bottom: rem(50);
    }
  }

  &__item {
    @extend %text-main;
    margin-bottom: rem(20);

    & a {
      color: $hard_blue;
    }
  }
  .d {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: rem(96);
    @include for-width(-tablet) {
      margin-top: rem(30);
    }
  }
  &__btn {
    display: block;
    width: rem(231);
  }
}
</style>
