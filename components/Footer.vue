<template>
  <footer class="c-footer">
    <div class="container">
      <div class="c-footer__wrap">
        <div class="c-footer__logo">
          <figure class="c-footer__logo-img">
            <img src="/img/logo.svg" alt="pkt.cash" />
          </figure>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer.quicklink") }}</h5>
          <ul class="c-footer__menu-list">
            <li class="c-footer__menu-item">
              <a href="https://docs.pkt.cash/en/latest/mining/" class="c-footer__menu-link">
                <span class="c-footer__menu-text">{{ $t("footer.setup_pktcrypt") }}</span>
              </a>
            </li>
            <li v-for="(item, index) of quick_links" :key="index" class="c-footer__menu-item">
              <template v-if="item.name === 'Blog'">
                <a href="https://crypto.pkt.cash" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ item.name }}</span>
                </a>
              </template>
              <template v-else>
                <nuxt-link :to="item.route_link" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ item.name }}</span>
                </nuxt-link>
              </template>
            </li>
            <li class="c-footer__menu-item">
              <a href="https://coinmarketcap.com/currencies/pkt/" target="_blank" class="c-footer__menu-link">
                <span class="c-footer__menu-text">Coinmarketcap</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer.about") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of about_links" :key="index" class="c-footer__menu-item">
              <template v-if="item.name === 'About'">
                <a
                  :href="item.route_link"
                  :class="{ 'link-active' : $route.name === 'letter'}"
                  class="c-footer__menu-link"
                >
                  <span class="c-footer__menu-text">{{ item.name }}</span>
                </a>
              </template>
              <template v-else>
                <nuxt-link :to="item.route_link" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ item.name }}</span>
                </nuxt-link>
              </template>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer.git") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of github_links" :key="index" class="c-footer__menu-item">
              <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                <span class="c-footer__menu-text">{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("home.join_community_title") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of join_community" :key="index" class="c-footer__menu-item">
              <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-footer__text">
          <span class="c-footer__text-light">
            <a href="https://github.com/cjdelisle/CJDNS-contact" target="_blank" class="c-footer__menu-link">
              ©2022 PKT Cash | {{ $t("footer.policy") }}
            </a>
          </span>
        </div>
      </div>
    </div>
    <a href="https://pkt.cash/sitemap.xml"></a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      nav_open: false,
      quick_links: [
        {
          name: this.$t("header.mine"),
          route_link: "/mine",
        },
        {
          name: this.$t("header.network_st"),
          route_link: "/network-steward",
        },
        {
          name: this.$t("header.wallet"),
          route_link: "/wallet",
        },
        {
          name: this.$t("header.blog"),
          route_link: "https://crypto.pkt.cash/",
        }
      ],
      about_links: [
        {
          name: "PKT",
          route_link: "/cash",
        },
        {
          name: "About",
          route_link: "/letter",
        },
        {
          name: "Roadmap",
          route_link: "/build#roadmap",
        },
        {
          name: "Origin Story",
          route_link: "/origin-story",
        },
        {
          name: "Resources",
          route_link: "/resources",
        },
		{
          name: "Trademark",
          route_link: "/trademark",
        },
		{
          name: "Brand",
          route_link: "/brand",
        },
      ],
      github_links: [
        {
          name: "pkt.cash",
          route_link: "https://github.com/pkt-cash/",
        },
        {
          name: "cjdns",
          route_link: "https://github.com/cjdelisle/cjdns",
        },
        {
          name: "PacketCrypt",
          route_link: "https://github.com/cjdelisle/PacketCrypt",
        },
      ],
      join_community: [
        {
          name: "pkt.chat",
          route_link: "https://pkt.chat",
        },
        {
          name: "Twitter",
          route_link: "https://twitter.com/pktcash",
        },
        {
          name: "Discord",
          route_link: "https://discord.com/invite/pktcash",
        },
        {
          name: "Instagram",
          route_link: "https://www.instagram.com/pktcash/",
        },
        {
          name: "Facebook",
          route_link: "https://www.facebook.com/pktcash/",
        }
      ],
    };
  },
};
</script>

<style lang="scss">
.c-footer {
  background-color: $dark_blue_new;
  color: $white;

  & .container {
    width: 100%;
    max-width: rem(1300);
    padding: rem(76) rem(60);
    @include for-width(-tablet) {
      padding: rem(30) rem(25);
    }
    margin: 0 auto;
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  &__logo {
    margin-right: rem(104);
    @include for-width(-tablet-lg) {
      margin-right: rem(35);
      margin-bottom: rem(35);
    }
    @include for-width(-tablet) {
      width: 60%;
      margin-right: 0;
      order: 4;
    }
    & img {
      height: rem(40);
    }
  }

  &__menu {
    margin-right: rem(85);

    @include for-width(-desktop-med) {
      margin-right: rem(55);
      margin-bottom: rem(35);
    }
    @include for-width(-tablet-lg) {
      margin-right: rem(32);
      margin-bottom: rem(35);
    }
    @include for-width(-tablet) {
      width: 50%;
      margin-right: 0;
      margin-bottom: 0;
    }
    @include for-width(-small-lg) {
      margin-bottom: rem(25);
    }
    @include for-width(-tablet) {
      &:nth-child(5) {
        position: static;
        margin-bottom: rem(45);

        &::after {
          content: "";
          left: 0;
          position: absolute;
          width: 100%;
          height: rem(1);
          background-color: $white;
          opacity: 0.1;
          margin-top: rem(14);
        }
      }
    }

    &-title {
      @extend %medium;
      letter-spacing: 1.1px;
      @include font_sizes(15, 20);
      margin-bottom: rem(23);
    }

    &-item {
      margin-bottom: rem(20);
      @include for-width(-tablet) {
        margin-bottom: rem(8);
      }

      &:last-child {
        margin-bottom: rem(4);
        @include for-width(-tablet) {
          margin-bottom: rem(12);
        }
      }
    }

    &-link {
      letter-spacing: 0.85px;
      @extend %light;
      @include font_sizes(15, 20);
      @include for-width(-small-lg) {
        @include font_sizes(14, 16);
      }
      color: $white;
    }

    &-text {
      position: relative;

      display: flex;
      align-items: center;

      &-with-social {
        padding-left: rem(37);
        @include for-width(-tablet) {
          padding-left: rem(28);
        }
      }
    }

    &-img {
      position: absolute;
      top: 50%;
      left: rem(8);
      transform: translate(-33%, -50%);

      display: flex;
      align-items: center;

      @include for-width(-tablet) {
        transform: translate(-33%, -50%) scale(0.65);
      }
    }
  }

  &__text {
    width: 100%;
	text-align: center;
	padding-top: rem(50);
    @include for-width(-tablet) {
      width: 40%;
      order: 5;
      padding-top: 0;
	    text-align: left;
    }
    .c-footer__menu-link {
      @include font_sizes(15, 20);
      color: $light_grey_new;
    }

    &-light {
      @include font_sizes(18, 20);
    }
  }
}
</style>
