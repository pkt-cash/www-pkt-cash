<template>
  <div class="c-origin-compass">
    <div class="container">
      <h1 class="c-origin-compass__title">An Introduction to Compact Source Routing</h1>
      <div class="c-origin-compass__wrap">
        <p
          class="c-origin-compass__text"
        >Most of the Internet is routed using a system called prefix matching. With prefix matching, every packet of data flying across the Internet contains the IP address of its destination, and each router which forwards that packet looks up the destination in its routing table. It’s like every street-corner had a sign pointing the way to everywhere in the world (and everybody had to follow it).</p>
        <p
          class="c-origin-compass__text"
        >Routing tables at the Internet backbone are unsurprisingly big, almost too big to fit in the special high-speed memory used in modern routers. Since every ISP has a different idea of how data should flow through their network, every router has a different routing table. What this all means is that even when an ISP leases bandwidth, they still have to operate their own physical router hardware. Sub-leasing of routers is simply impossible.</p>
        <p
          class="c-origin-compass__text"
        >The way cjdns works is that packets of data flying through the network do not contain the IP address of the destination, but rather the directions to get there. This system is known as source routing. Normally a source route is big, so big that source routing is traditionally only used for experimentation, but cjdns uses a unique representation known as compact source routing which compresses that route down to roughly the size of an IP address.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginStoryCompass",
};
</script>

<style lang="scss">
.c-origin-compass {
  padding: rem(75) rem(25) rem(85);
  @include for-width(-small-lg) {
    padding: rem(50) rem(25) 105vw;
  }
  background-color: $dark_blue;
  background-image: url("/img/origin-story-compass.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  @include for-width(-small-lg) {
    background-image: url("/img/origin-story-compass-mobile.png");
    background-size: contain;
    background-position: bottom center;
  }
  color: $light_blue;

  .container {
    width: 100%;
    max-width: rem(1035);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(40);
    @include for-width(-small-lg) {
      margin-bottom: rem(30);
    }
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(20);
    @include for-width(-small-lg) {
      margin-bottom: rem(10);
    }
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include for-width(-tablet) {
      flex-direction: column;
    }

    & p {
      width: 49%;
      @include for-width(-tablet) {
        width: 100%;
      }
    }
  }
}
</style>