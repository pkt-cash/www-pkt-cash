<template>
  <footer class="c-footer">
    <div class="container">
      <div class="c-footer__wrap">
        <div class="c-footer__logo">
          <figure class="c-footer__logo-img">
            <img src="/img/logo.svg" alt="pkt.cash" />
          </figure>
          <ul class="c-footer__logo_social">
            <li v-for="(item, index) of social_links" :key="index" class="c-footer__menu-item">
              <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                  <span class="c-footer__menu-text"><img :src="item.img" :alt="item.name" width="24" /></span>
              </a>
            </li>
          </ul>
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
        }
      ],
      learn_links: [
        {
          name: "header.mine",
          route_link: "/mine",
        },
        {
          name: "header.utility",
          route_link: "/utility",
        },
        {
          name: "home.scroll_section_block_1_title",
          route_link: "https://pkt.cash/PKT_Network_v1.0_2021.02.01.pdf",
          external: true,
        },
        {
          name: "header.pkt_cash",
          route_link: "/pkt-cash",
        },
        // {
        //   name: "FAQ",
        //   route_link: "/",
        // }
      ],
      develop_links: [
        {
          name: "footer_new.tech_docs",
          route_link: "https://pkt.cash/PacketCrypt-2020-09-04.pdf",
          external: true,
        },
        {
          name: "header.roadmap",
          route_link: "/build#roadmap",
        },
        // {
        //   name: "Yellowpaper",
        //   route_link: "/",
        // },
        {
          name: "header.whitepaper",
          route_link: "https://pkt.cash/PKT_Network_v1.0_2021.02.01.pdf",
          external: true,
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
          name: "Cjdns",
          route_link: "https://github.com/cjdelisle/cjdns",
          external: true,
        }
      ],
      explore_links: [
        {
          name: "header.community",
          route_link: "/resources",
        },
        {
          name: "header.blog",
          route_link: "https://crypto.pkt.cash",
          external: true,
        },
        {
          name: "footer.trademark",
          route_link: "/trademark",
        },
        // {
        //   name: "Press",
        //   route_link: "/",
        // },
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
        justify-content: center;
        padding:rem(15) 0 rem(15);
      }
      @include for-width(-small-lg) {
        justify-content: flex-start;
        padding:rem(25) 0 rem(10);
      }
      & .c-footer__menu-text {
        width: 40px;
        height: 40px;
        line-height: 40px;
        @extend %db;
        @extend %t-center;
        margin-right:rem(20);
        background-color:rgba(255,255,255,.15);
        border-radius:rem(50);
        @include for-width(-laptop_small) {
          width: rem(36);
          height: rem(36);
          line-height: rem(36);
          margin-right:rem(12);
        }
        @include for-width(-small-lg) {
          width: 40px;
          height: 40px;
          line-height: 40px;
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
