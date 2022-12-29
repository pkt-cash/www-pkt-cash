<template>
  <div class="c-index-join">
    <div class="container">
      <h2 class="c-index-join__title">{{ $t('home.join_community_title') }}</h2>
      <p class="c-index-join__text">PKT is a community operated project. There is no company, no investors, no CEO, and no pre-mine. It is supported by people just like YOU. Join the social channels for updates and discussions about how to participate in this fast growing network.</p>
      <SocialLinks :list="social_list" />
      <img src="/img/home-join-map.svg" alt="Map" class="c-index-join__map" />
      <nuxt-link class="c-index-join__link" to="/community">
        <span>{{ $t('home.join_community_label_link') }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import SocialLinks from "~/components/Base/SocialLinks";
export default {
  name: "IndexJoin",
  data() {
    return {
      social_list: [
        {
          key: "discord",
          src: "/img/icons/discord.svg",
          title: "Discord",
          link: "https://discord.gg/bjJutHm9CN",
        },
        {
          key: "twitter",
          src: "/img/icons/twitter.svg",
          title: "Twiter",
          link: "https://twitter.com/pktcash",
        },
        {
          key: "pkt-chat",
          src: "/img/icons/pkt-chat.svg",
          title: "PKT.chat",
          link: "https://pkt.chat/",
        },
        {
          key: "instagram",
          src: "/img/icons/instagram.svg",
          title: "Instagram",
          link: "https://www.instagram.com/pktcash/",
        },
        {
          key: "youtube",
          src: "/img/icons/youtube.svg",
          title: "Youtube",
          link: "https://www.youtube.com/c/PKTCash/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.c-index-join {
  .container {
    @extend %container_new; 
    @extend %t-center;
    padding:rem(75) 0 rem(100);
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25) rem(75);
    }
    @include for-width(-small-lg) {
      width:100%;
      padding:0 rem(20) rem(50);
    }
  }
  &__title {
    @extend %heading-gradient-dark;
    @extend %bold;
    font-size: rem(64);
    line-height:rem(78);
    text-transform: capitalize;
    margin-bottom:rem(20);
    @include for-width(+desktop-lg) {
      font-size: rem(72);
      line-height:rem(86);
    }
    @include for-width(-laptop) {
      font-size: rem(58);
      line-height:rem(72);
    }
    @include for-width(-tablet) {
      font-size: rem(50);
      line-height:rem(60);
    }
    @include for-width(-small-lg) {
      font-size: rem(40);
      line-height: rem(50);
    }
  }
  &__text {
    @extend %pn;
    @extend %regular;
    max-width: 550px;
    margin:0 auto;
  }
  .c-social {
    @extend %df;
		@extend %jcc;
    @extend %aic;
    padding:rem(35) 0 rem(25);
    &__item {
      display: block;
      margin: rem(0) rem(8);
      max-width: rem(46);
      @include for-width(-small-lg) {
        margin: rem(0) rem(10);
        max-width: rem(50);
      }
      &#instagram {
        padding:rem(5);
      }
    }
  }
  .c-social_outstanding {
    padding:rem(20) 0 0;
    &__item {
      max-width: rem(47);
    }
  }
  &__map {
    max-width: 85%;
    margin: 0 auto;
    display: block;
    @include for-width(-small-lg) {
      max-width: 100%;
    }
  }
  &__link {
    @extend %btn-new;
    @extend %btn_blue_new;
    @extend %dib;
    @include for-width(-small-lg) {
      margin-top:rem(25);
      padding:rem(10) rem(35);
      font-family: "Poppins-SemiBold", sans-serif;
    }
    &.desktop {
      margin-bottom:rem(35);
      @include for-width(-small-lg) {
        display:none;
      }
    }
    &.mobile {
      display:none;
      @include for-width(-small-lg) {
        display:inline-block;
      }
    }
  }
}
</style>