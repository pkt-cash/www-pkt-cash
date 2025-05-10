<template>
  <footer class="c-footer">
    <div class="container">
      <div class="c-footer__wrap">
        <div class="c-footer__logo">
          <a :href="localePath('index')" title="PKT Cash" class="c-footer__logo-img">
            <img src="/img/logo.svg" alt="pkt.cash" />
          </a>
          <ul class="c-footer__logo_social">
            <li v-for="(item, index) of social_links" :key="index" class="c-footer__menu-item">
              <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text"><img :src="item.img" :alt="item.name" width="24" /></span>
              </a>
            </li>
          </ul>
          <p class="c-footer__logo__ca">CA: 0x917f39bb33b2483dd19546b1e8d2f09ce481ee44</p>
          <div class="c-footer__text">
            <span class="c-footer__text-light">
              <a href="https://github.com/cjdelisle/CJDNS-contact" target="_blank" class="c-footer__menu-link">
                ©{{currentYear}} PKT Cash | {{ $t("footer.policy") }}
              </a>
            </span>
          </div>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer_new.menu_1_title") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of learn_links" :key="index" class="c-footer__menu-item">
              <template v-if="item.external === true">
                <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </a>
              </template>
              <template v-else>
                <nuxt-link :to="localePath(item.route_link)" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </nuxt-link>
              </template>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer_new.menu_2_title") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of develop_links" :key="index" class="c-footer__menu-item">
              <template v-if="item.external === true">
                <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </a>
              </template>
              <template v-else>
                <nuxt-link :to="localePath(item.route_link)" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </nuxt-link>
              </template>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer_new.menu_3_title") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of network_links" :key="index" class="c-footer__menu-item">
              <template v-if="item.external === true">
                <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </a>
              </template>
              <template v-else>
                <nuxt-link :to="localePath(item.route_link)" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </nuxt-link>
              </template>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">{{ $t("footer_new.menu_4_title") }}</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of explore_links" :key="index" class="c-footer__menu-item">
              <template v-if="item.external === true">
                <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </a>
              </template>
              <template v-else>
                <nuxt-link :to="localePath(item.route_link)" class="c-footer__menu-link">
                  <span class="c-footer__menu-text">{{ $t(item.name) }} </span>
                </nuxt-link>
              </template>
            </li>
          </ul>
        </div>
        <div class="c-footer__text c-footer__text_mobile_only">
          <span class="c-footer__text-light">
            <a href="https://github.com/cjdelisle/CJDNS-contact" target="_blank" class="c-footer__menu-link">
              ©{{currentYear}} PKT Cash | {{ $t("footer.policy") }}
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
      currentYear: new Date().getFullYear(),
      social_links: [
        {
          name: "pkt.chat",
          route_link: "https://pkt.chat",
          img: "/img/common/icons/pkt-chat.svg",
        },
        {
          name: "Youtube",
          route_link: "https://www.youtube.com/c/PKTCash/",
          img: "/img/common/icons/youtube.svg",
        },
        {
          name: "Instagram",
          route_link: "https://www.instagram.com/pktcash/",
          img: "/img/common/icons/instagram.svg",
        },
        {
          name: "Telegram",
          route_link: "https://telegram.me/pktcash",
          img: "/img/common/icons/telegram.svg",
        },
        {
          name: "Twitter",
          route_link: "https://twitter.com/pktcash",
          img: "/img/common/icons/x.svg",
        },
        {
          name: "Discord",
          route_link: "https://discord.gg/bjJutHm9CN",
          img: "/img/common/icons/discord.svg",
        },
        {
          name: "Github",
          route_link: "https://github.com/pkt-cash/",
          img: "/img/common/icons/github.svg",
        },
        {
          name: "Dextools",
          route_link: "https://www.dextools.io/app/en/base/pair-explorer/0x6183e613dda1fa146c90be6e1757aef15bacad9d",
          img: "/img/common/icons/dextools.svg",
        }
      ],
      learn_links: [
        {
          // name: "header.mine",
          // route_link: "/mine",
          name: "Stake",
          route_link: "/stake",
        },
        {
          name: "header.utility",
          route_link: "/utility",
        },
        {
          name: "home.scroll_section_block_1_title",
          route_link: "/pkt-network",
        },
        {
          name: "header.pkt_cash",
          route_link: "/pkt-cash",
        },
        {
          name: "resources.heading_button_4",
          route_link: "https://docsend.com/view/ayf5d3tz5rymn8fv",
          external: true,
        }
      ],
      develop_links: [
        {
          name: "footer_new.tech_docs",
          route_link: "https://pkt.cash/PacketCrypt-2020-09-04.pdf",
          external: true,
        },
        {
          name: "header.roadmap",
          route_link: "/roadmap",
        },
        {
          name: "header_new.dev_yellowpaper",
          route_link: "https://pkt.cash/PacketCrypt-2020-09-04.pdf",
          external: true,
        },
        {
          name: "header.whitepaper",
          route_link: "https://docsend.com/view/prnv2q3bifzd44rt",
          external: true,
        },
        {
          name: "Terms of Service",
          route_link: "/terms-of-service",
        }
      ],
      network_links: [
        {
          name: "header.explorer",
          route_link: "https://packetscan.io/",
          external: true,
        },
        {
          name: "footer_new.wallets",
          route_link: "/wallet",
        },
        {
          name: "header.network_st",
          route_link: "/network-steward",
        },
        {
          name: "header.ecosystem",
          route_link: "/ecosystem",
        },
        {
          name: "header.cjdns",
          route_link: "/cjdns",
        }
      ],
      explore_links: [
        {
          name: "header.community",
          route_link: "/community",
        },
        {
          name: "header.blog",
          route_link: "https://crypto.pkt.cash",
          external: true,
        },
        // {
        //   name: "FAQ",
        //   route_link: "/faq",
        // },
        {
          name: "footer.trademark",
          route_link: "/trademark",
        },
        {
          name: "Media",
          route_link: "/media",
        },
        {
          name: "footer.brand",
          route_link: "/brand",
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.c-footer {
  background-color: $black_new;
  color: $white_50;
  position:relative;
  z-index:3;
  &__wrap {
    padding: rem(60) 0 rem(65);
    @extend %df;
    @extend %jcsb;
    @extend %ais;
    @extend %fw;
    @include for-width(-small-lg) {
      padding: rem(25) 0;
    }
  }
  &__logo {
    @include for-width(-tablet) {
      width:100%;
      padding-bottom:rem(25);
      text-align:center;
    }
    @include for-width(-small-lg) {
      text-align:left;
    }
    &-img {
      @include for-width(-desktop-medium) {
          max-width:rem(100);
      }
      @include for-width(-laptop_small) {
        max-width:rem(115);
      }
      @include for-width(-tablet) {
        margin:0 auto;
      }
      @include for-width(-small-lg) {
        margin:0;
        max-width:rem(75);
      }
    }
    &_social {
      @extend %df;
      @extend %jcsb;
      @extend %aic;
      padding:rem(45) 0 rem(52);
      @include for-width(-laptop_small) {
        padding-bottom:rem(64);
      }
      @include for-width(-tablet) {
        padding:rem(15) 0 rem(15);
        justify-content: center;
      }
      @include for-width(-small-lg) {
        padding:rem(25) 0 rem(20);
        // justify-content: flex-start;
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 0 rem(7);
        max-width:100%;
      }
      & .c-footer__menu-text {
        width: 40px;
        height: 40px;
        line-height: 40px;
        @extend %db;
        @extend %t-center;
        margin-right:rem(10);
        background-color:rgba(255,255,255,.15);
        border-radius:rem(50);
        @include for-width(-laptop_small) {
          width: rem(36);
          height: rem(36);
          line-height: rem(36);
        }
        @include for-width(-tablet) {
          margin:0 rem(7);
        }
        @include for-width(-small-lg) {
          // width: 40px;
          // height: 40px;
          // line-height: 40px;
          margin:0;
        }
        & img {
          width:24px;
          height: 20px;
          object-fit:contain;
          object-position:center;
          vertical-align:middle;
          @include for-width(-laptop_small) {
            width:20px;
            height:18px;
          }
          @include for-width(-small-lg) {
            width:24px;
            height: 20px;
          }
        }
      }
    }
    &__ca {
      @include for-width(-small-lg)  {
        font-size:rem(13);
        text-align:center;
        margin:rem(5) 0 0;
      }
    }
  }
  &__text {
    @include for-width(-small-lg) {
      display:none;
    }
    & .c-footer__menu-link {
      font-size: rem(16);
      line-height: rem(40);
      @extend %inter_medium;
      color:$white_50;
    }
  }
  &__menu {
    @include for-width(-small-lg) {
      width:50%;
    }
    &-title {
      font-size: rem(16);
      line-height: rem(40);
      @extend %inter_bold;
      color:$white_50;
    }
    &-link {
      font-size: rem(16);
      line-height: rem(40);
      @extend %inter_regular;
      color:$white_50;
      &:hover {
        color:$white;
      }
      &:focus {
        color:$white;
      }
      &:visited {
        color:$white_50;
      }
    }
  }
  &__text_mobile_only {
    @extend %dn;
    @extend %t-center;
    @include for-width(-small-lg) {
      display:block;
      margin-top:rem(25);
    }
  }
}
</style>
