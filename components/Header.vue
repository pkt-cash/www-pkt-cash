<template>
  <nav class="c-navigation">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <nuxt-link tag="figure" to="/">
            <img src="/img/main-logo.png" alt />
          </nuxt-link>
        </div>
        <div class="nav__menu" :class="{ 'active': nav_open }">
          <ul class="nav__menu-list" :class="{ 'active': nav_open }">
            <li v-for="(item, index) of nav_list" :key="index" class="nav__menu-item">
              <nuxt-link :to="item.route_link" class="nav__menu-link btn-nav">
                <span class="nav__menu-text">{{ item.name }}</span>
              </nuxt-link>
            </li>
            <li class="nav__menu-item">
              <a href="https://explorer.pkt.cash" target="_blank" class="nav__menu-link btn-nav">
                <span class="nav__menu-text">Block Explorer</span>
              </a>
            </li>
          </ul>
          <a
            href="https://explorer.pkt.cash"
            target="_blank"
            class="nav__menu-blue btn-nav blue-btn"
          >
            <span class="nav__menu-blue-text">
              Whitepaper
              <svg
                class="nav__menu-blue-img"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 0L5.5 12" stroke="white" />
                <line x1="5.56051" y1="11.6464" x2="10.526" y2="6.68093" stroke="white" />
                <line
                  y1="-0.5"
                  x2="7.0223"
                  y2="-0.5"
                  transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 5.08594 12)"
                  stroke="white"
                />
              </svg>
            </span>
          </a>
        </div>
        <div class="nav__burger" @click="nav_open = !nav_open" :class="{ 'active': nav_open }"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nav_open: false,
      nav_list: [
        {
          name: "Mining",
          route_link: "/mining",
        },
        {
          name: "Network Steward",
          route_link: "/network-steward",
        },
        {
          name: "Wallet",
          route_link: "/wallet",
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
    };
  },
};
</script>

<style lang="scss">
.c-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  z-index: 100;

  & .container {
    width: 100%;
    max-width: rem(1315);
    margin: 0 auto;
    padding: 0 rem(30);
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: rem(100);
  @include for-width(-tablet) {
    height: rem(45);
  }

  &__logo {
    cursor: pointer;

    & img {
      @include for-width(-tablet) {
        height: rem(21);
      }
    }
  }

  &__menu {
    display: flex;
    @include for-width(-tablet) {
      position: fixed;
      transform: scaleX(0);
      transform-origin: right;
      transition: 0.3s all ease;
      top: rem(45);
      left: 0;
      bottom: 0;
      right: 0;
      padding: rem(25);
      background-color: $white;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    @include for-width(-tablet) {
      &.active {
        transform: scaleX(1);
      }
    }

    @include for-width(-laptop, + small-lg) {
      margin: 0 rem(30) 0 auto;
    }

    @include for-width(-small-lg) {
      margin: 0;
    }

    @include for-width(-tablet) {
      top: rem(44);
    }

    &-item {
      @include for-width(-laptop) {
        margin-bottom: rem(20);
      }
      @include for-width(+ laptop) {
        margin-left: rem(22);
      }
      @include for-width(+ desktop-medium) {
        margin-left: rem(36);
      }

      &--blue {
        margin-left: rem(125);
      }
    }

    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include for-width(-laptop) {
        position: fixed;
        transform: scaleX(0);
        transform-origin: right;
        transition: 0.3s all ease;
        top: rem(100);
        left: 0;
        bottom: 0;
        right: 0;
        padding: rem(25);
        background-color: $white;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      @include for-width(-tablet) {
        top: rem(45);
      }

      @include for-width(-tablet) {
        position: static;
        top: rem(0);
      }

      @include for-width(-small-lg) {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      @include for-width(-laptop) {
        &.active {
          transform: scaleX(1);
        }
      }
    }

    &-text {
      display: flex;
      align-items: center;
    }

    &-blue {
      @include for-width(+ laptop) {
        margin-left: rem(35);
      }
      @include for-width(+ desktop-medium) {
        margin-left: rem(120);
      }

      &-text {
        display: flex;
        align-items: center;
      }

      &-img {
        margin-left: rem(18);
      }
    }
  }

  &__burger {
    display: none;
    @include for-width(-laptop) {
      display: block;
    }
    width: rem(45);
    height: rem(45);
    @include for-width(-tablet) {
      width: rem(24);
      height: rem(24);
    }
    border-radius: 50%;
    border: 1px solid rgba($hard_blue, 0.2);
    position: relative;
    cursor: pointer;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: rem(22);
      @include for-width(-tablet) {
        width: rem(12);
      }
      height: rem(1);
      background-color: $black;
      top: 50%;
      left: 50%;
      transition: 0.3s all ease;
    }

    &::after {
      transform: translate(-50%, -5px);
      @include for-width(-tablet) {
        transform: translate(-50%, -3px);
      }
    }

    &::before {
      transform: translate(-50%, 5px);
      @include for-width(-tablet) {
        transform: translate(-50%, 3px);
      }
    }

    &.active {
      &::after {
        transform: translateX(-50%) rotate(-45deg);
      }

      &::before {
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
</style>