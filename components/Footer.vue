<template>
  <footer class="c-footer">
    <div class="container">
      <div class="c-footer__wrap">
        <div class="c-footer__logo">
          <figure class="c-footer__logo-img">
            <img src="/img/footer-logo.svg" alt />
          </figure>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">Quicklink</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of quick_links" :key="index" class="c-footer__menu-item">
              <nuxt-link :to="item.route_link" class="c-footer__menu-link">
                <span class="c-footer__menu-text">{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">Github</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of github_links" :key="index" class="c-footer__menu-item">
              <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                <span class="c-footer__menu-text">{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-footer__menu">
          <h5 class="c-footer__menu-title">Join the community</h5>
          <ul class="c-footer__menu-list">
            <li v-for="(item, index) of join_community" :key="index" class="c-footer__menu-item">
              <a :href="item.route_link" target="_blank" class="c-footer__menu-link">
                <span class="c-footer__menu-text">
                  <figure class="c-footer__menu-img">
                    <img :src="item.icon" alt />
                  </figure>
                  {{ item.name }}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="c-footer__text">
          <span class="c-footer__text-light">@ PKT cash, 2020</span>
        </div>
      </div>
    </div>
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
          name: "PKT",
          route_link: "/cash",
        },
        {
          name: "Mining",
          route_link: "/mining",
        },
        {
          name: "Network Steward",
          route_link: "/network-steward",
        },
        {
          name: "Roadmap",
          route_link: "/Roadmap",
        },
        {
          name: "Community",
          route_link: "/community",
        },
        {
          name: "About",
          route_link: "/about",
        },
      ],
      github_links: [
        {
          name: "pkt.cash",
          route_link: "https://pkt.cash",
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
          name: "Telegram",
          route_link: "https://t.me/pktproject ",
          icon: "/img/icon/telegram.svg",
        },
        {
          name: "Matrix",
          route_link: "https://riot.im/app/#/room/#pkt:m.trnsz.com",
          icon: "/img/icon/matrix.svg",
        },
        {
          name: "Instagram",
          route_link: "https://www.instagram.com/pktcash/",
          icon: "/img/icon/instagram.svg",
        },
        {
          name: "Facebook",
          route_link: "https://www.facebook.com/PKT-110041354126488",
          icon: "/img/icon/facebook.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.c-footer {
  background-color: $black;
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

      & img {
        height: rem(35);
      }
    }
  }

  &__menu {
    margin-right: rem(85);
    @include for-width(-tablet-lg) {
      margin-right: rem(32);
      margin-bottom: rem(35);
    }
    @include for-width(-tablet) {
      width: 50%;
      margin-right: 0;
      margin-bottom: 0;
    }

    @include for-width(-tablet) {
      &:nth-child(2) {
        order: 1;
      }

      &:nth-child(3) {
        width: 100%;
        order: 3;
        position: relative;
        margin-bottom: rem(45);

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: rem(1);
          background-color: $white;
          opacity: 0.1;
          margin-top: rem(14);
        }
      }

      &:nth-child(4) {
        order: 2;
      }
    }

    &-title {
      @extend %norms-bold;
      @include font_sizes(15, 20);
      margin-bottom: rem(23);
      @include for-width(-tablet) {
        @include font_sizes(11, 19);
        margin-bottom: rem(8);
      }
      @include for-width(-tablet) {
        opacity: 0.5;
      }
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
      @extend %norms-light;
      @include font_sizes(15, 20);
      @include for-width(-small-lg) {
        @include font_sizes(11, 16);
      }
      color: $white;
    }

    &-text {
      display: flex;
      align-items: center;
    }

    &-img {
      display: flex;
      align-items: center;
      margin-right: rem(10);
    }
  }

  &__text {
    width: 100%;
    @include for-width(-tablet) {
      width: 40%;
      order: 5;
      padding-top: rem(6);
    }

    &-light {
      opacity: 0.4;
      @extend %norms-regular;
      @include font_sizes(15, 20);
      @include for-width(-tablet) {
        @include font_sizes(11, 19);
      }
    }
  }
}
</style>
