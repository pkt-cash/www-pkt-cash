<template>
  <nav class="c-navigation">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <nuxt-link tag="figure" to="/">
            <img src="/img/logo.svg" alt />
          </nuxt-link>
        </div>
        <div class="nav__menu" :class="{ active: nav_open }">
          <ul class="nav__menu-list" :class="{ active: nav_open }">

            <li

              v-for="(item, index) of nav_list"
              @click="nav_open = !nav_open"
              :key="index"
              class="nav__menu-item"
            >
              <template v-if="item.name === 'Community'">
                <nuxt-link
                  :to="item.route_link"
                  :class="{ 'link-active': $route.name === 'community' }"
                  class="nav__menu-link btn-nav"
                >
                  <span class="nav__menu-text">{{ item.name }}</span>
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link :to="item.route_link" class="nav__menu-link btn-nav">
                  <span class="nav__menu-text">{{ item.name }}</span>
                </nuxt-link>
              </template>
            </li>

            <li class="nav__menu-item">
              <a href="#" class="nav__menu-link btn-nav">
                <span class="nav__menu-text">
                  PKT
                  <svg
                    class="nav__menu-blue-img"
                    width="11"
                    height="12"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 284.929 284.929"
                    style="enable-background: new 0 0 284.929 284.929"
                    xml:space="preserve"
                    fill="#000"
                  >
                    <g>
                      <path
                        d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
		c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
		c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </span>
              </a>
              <ul class="nested-drop">
                <li>
                  <nuxt-link to="/roadmap">Roadmap</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about">Letter from CJD</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/origin-story">PKT Origin Story</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/cash">Cryptoeconomics</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="nav__menu-item">
              <a
                href="https://docs.pkt.cash/"
                target="_blank"
                class="nav__menu-link btn-nav"
              >
                <span class="nav__menu-text">Docs</span>
              </a>
            </li>
            <li class="nav__menu-item">
              <a
                href="https://crypto.pkt.cash/"
                target="_blank"
                class="nav__menu-link btn-nav"
              >
                <span class="nav__menu-text">Blog</span>
              </a>
            </li>
            <li class="nav__menu-item">
              <a
                href="https://explorer.pkt.cash"
                target="_blank"
                class="nav__menu-link btn-nav"
              >
                <span class="nav__menu-text">Block Explorer</span>
              </a>
            </li>
            <li class="nav__menu-item buy">
              <a
                href="https://pancakeswap.finance/info/token/0x1c25222994531c4ac35e4d94bbf7552c9aa92e32"
                target="_blank"
                class="nav__menu-link btn-nav"
              >
                <span class="nav__menu-text">Buy</span>
              </a>
            </li>
          </ul>
          <div class="nav__menu-blue btn-nav blue-btn center" @click="toggleDropdown">
            <span class="nav__menu-link">
              Whitepaper
              <svg
                class="nav__menu-blue-img"
                width="11"
                height="12"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 284.929 284.929"
                style="enable-background: new 0 0 284.929 284.929"
                xml:space="preserve"
                fill="#fff"
              >
                <g>
                  <path
                    d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
		c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
		c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </span>
            <div class="dropdown" :class="{ active: dropdownOpen }">
              <ul class="dropdown__list">
                <li class="dropdown__list__item">
                  <a
                    href="/PKT_Network_v1.0_2021.02.01.pdf"
                    target="_blank"
                    class="dropdown__list__item__link"
                    >Whitepaper</a
                  >
                </li>
                <li class="dropdown__list__item">
                  <a
                    href="https://docsend.com/view/ayf5d3tz5rymn8fv"
                    target="_blank"
                    class="dropdown__list__item__link"
                    >Deck</a
                  >
                </li>
                <li class="dropdown__list__item">
                  <a
                    href="/PacketCrypt-2020-09-04.pdf"
                    target="_blank"
                    class="dropdown__list__item__link"
                    >PacketCrypt</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- <a
            href="/PacketCrypt-2020-09-04.pdf"
            target="_blank"
            download
            class="nav__menu-blue btn-nav blue-btn"
          >
            <span class="nav__menu-link">
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
          </a> -->
        </div>
        <div
          class="nav__burger"
          @click="nav_open = !nav_open"
          :class="{ active: nav_open }"
        ></div>
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
        // {
        //   name: "PKT",
        //   route_link: "/cash",
        // },
        // {
        //   name: "Roadmap",
        //   route_link: "/roadmap",
        // },
      ],
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<style lang="scss">
.nav__menu-blue {
  position: relative;
  cursor: pointer;
}
.dropdown {
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  height: 0px;
  &.active {
    visibility: visible;
    opacity: 1;
    height: 200px;
    z-index: 9999;
  }
  &__list {
    position: absolute;
    top: 45px;
    left: 0px;
    right: 0;
    background: #fff;
    border-radius: 5px;
    text-align: left;
    box-shadow: 0px 2px 9px -5px rgba(0, 0, 0, 0.75);

    @include for-width(-laptop) {
      top: auto;
      bottom: 55px;
    }

    &__item {
      &__link {
        display: block;
        padding: 20px;
        color: #000;
        font-size: 16px;
        &:hover {
          color: $hard_blue;
        }
      }
    }
  }
}
.c-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  z-index: 100;
  @include for-width(-small-lg) {
    height:auto;
  }
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
  @include for-width(-laptop) {
    height: rem(45);
  }

  &__logo {
    cursor: pointer;

    & img {
      @include for-width(-laptop) {
        height: rem(21);
        margin-top: 10px;
      }
      @include for-width(-small-lg) {
        height: rem(30);
      }
    }
  }

  &__menu {
    display: flex;
    flex: 1;
    @include for-width(-laptop) {
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
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-link {
      &.link-active {
        color: $hard_blue;
      }
      &.btn-nav {
        font-size: rem(16);
      }
    }

    @include for-width(-laptop) {
      &.active {
        transform: scaleX(1);
      }
    }

    @include for-width(-laptop, + small-lg) {
      margin: 0 0 0 auto;
    }

    @include for-width(-small-lg) {
      margin: 0;
    }

    @include for-width(-laptop) {
      top: 0;
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

      .nested-drop {
        display: none;
        position: absolute;
        top: 60px;
        background-color: #fff;
        border-radius: 5px;

        li {
          padding: 15px;
          a {
            font-size: rem(16);
            color: #000;
            &:hover {
              color: $hard_blue;
            }
          }
        }
        @include for-width(-laptop) {
          position: relative;
          top: 0;
        }
      }

      &:hover {
        .nested-drop {
          display: block;
          box-shadow: 0px 2px 9px -5px rgba(0, 0, 0, 0.75);
        }
      }
    }

    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: rem(14);
      margin-right: auto;
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

      @include for-width(-laptop) {
        top: rem(45);
      }

      @include for-width(-laptop) {
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
          //margin-top: -190px;
        }
      }
    }

    &-text {
      display: flex;
      align-items: center;
    }

    &-blue {
      &.btn-nav {
        color: $white;
        font-size: rem(14);
        height: rem(45);
        margin-left: 1rem;
        //width: rem(197);
        min-width: auto;

        @media (max-width: 1130px) {
          padding-left: 1.4rem;
          padding-right: 1.4rem;
        }

        > span {
          display: flex;
          align-items: center;
        }

        svg {
          @include for-width(- laptop) {
            transform: rotate(180deg);
          }
        }
      }
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
    @include for-width(-laptop) {
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
      @include for-width(-laptop) {
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
      @include for-width(-laptop) {
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
