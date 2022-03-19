<template>
  <nav class="c-navigation">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <nuxt-link tag="figure" :to="localePath('index')">
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
              <template v-if="item.name === 'Blog'">
                <a href="https://crypto.pkt.cash" target="_blank" class="nav__menu-link btn-nav">
                  <span class="nav__menu-text">{{ item.name }}</span>
                </a>
              </template>
              <template v-else-if="item.name === 'Docs'">
                <a href="https://docs.pkt.cash" target="_blank" class="nav__menu-link btn-nav">
                  <span class="nav__menu-text">{{ item.name }}</span>
                </a>
              </template>
              <template v-else-if="item.name === 'PKT'">
                <a class="nav__menu-link btn-nav" :class="mClass">
                  <span class="nav__menu-text">{{ item.name }} 
                    <svg class="" width="10" height="10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 284.929 284.929" style="enable-background: new 0 0 284.929 284.929" xml:space="preserve" fill="#fff">
                      <g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                      L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                      c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                      c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /> 
                      </g>
                    </svg>
                  </span>
                </a>
                <ul class="nested-drop">
                  <li>
                    <nuxt-link to="/about">{{ $t("header.letter") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/origin-story">{{ $t("header.origin_story") }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/pkt">{{ $t("header.cryptoeconomics") }}</nuxt-link>
                  </li>
                </ul>
              </template>
              <template v-else>
                <nuxt-link :to="item.route_link" class="nav__menu-link btn-nav">
                  <span class="nav__menu-text">{{ item.name }}</span>
                </nuxt-link>
              </template>
            </li>
            <li class="nav__menu-item">
              <a href="https://explorer.pkt.cash" target="_blank" class="nav__menu-link btn-nav">
                <span class="nav__menu-text">{{ $t("header.explorer") }}</span>
              </a>
            </li>
            <li class="nav__menu-lang_switch">
              <button v-on:click="isHidden = !isHidden" class="nav__menu-lang_switch_trigger">{{ $i18n.locale }}
                <svg class="" width="10" height="10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 284.929 284.929" style="enable-background: new 0 0 284.929 284.929" xml:space="preserve" fill="#fff">
                  <g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /> 
                  </g>
                </svg>
              </button>
              <div class="nav__menu-lang_switch_drop_down" v-if="isHidden" v-model="$i18n.locale">
                <p v-on:click="isHidden = !isHidden">
                  <nuxt-link :click="$i18n.setLocaleCookie(locale)" v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
                </p>
              </div>
            </li>
            <li class="mobile_button">
              <div class="nav__menu-blue btn-nav blue-btn" @click="toggleDropdown">
                <span class="nav__menu-link">Whitepaper
                  <svg class="" width="10" height="10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 284.929 284.929" style="enable-background: new 0 0 284.929 284.929" xml:space="preserve" fill="#fff">
                    <g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                    L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                    c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                    c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /> 
                    </g>
                  </svg>
                </span>
                <div class="dropdown" :class="{ active: dropdownOpen }">
                  <ul :id="$i18n.locale" class="dropdown__list">
                    <li class="dropdown__list__item whitepaper">
                      <a href="/PKT_Network_v1.0_2021.02.01.pdf" target="_blank" class="dropdown__list__item__link" id="en">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ja.pdf" target="_blank" class="dropdown__list__item__link" id="ja">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ch.pdf" target="_blank" class="dropdown__list__item__link" id="zh">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ko.pdf" target="_blank" class="dropdown__list__item__link" id="ko">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ru.pdf" target="_blank" class="dropdown__list__item__link" id="ru">{{ $t("header.whitepaper") }}</a>
                    </li>
                    <li class="dropdown__list__item">
                      <a
                        href="https://docsend.com/view/ayf5d3tz5rymn8fv"
                        target="_blank"
                        class="dropdown__list__item__link"
                        >{{ $t("header.deck") }}</a
                      >
                    </li>
                    <li class="dropdown__list__item">
                      <a
                        href="/PacketCrypt-2020-09-04.pdf"
                        target="_blank"
                        class="dropdown__list__item__link"
                        >{{ $t("header.packetcrypt") }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- <li class="nav__menu-item buy">
              <a href="https://pancakeswap.finance/info/token/0x1c25222994531c4ac35e4d94bbf7552c9aa92e32" target="_blank" class="nav__menu-link btn-nav">
                <span class="nav__menu-text">{{ $t("header.buy") }}</span>
              </a>
            </li> -->
          </ul>
          <div class="nav__menu-blue btn-nav blue-btn desktop_button" @click="toggleDropdown">
            <span class="nav__menu-link">Whitepaper
              <svg class="" width="10" height="10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 284.929 284.929" style="enable-background: new 0 0 284.929 284.929" xml:space="preserve" fill="#fff">
                  <g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /> 
                  </g>
                </svg>
            </span>
            <div class="dropdown" :class="{ active: dropdownOpen }">
                  <ul :id="$i18n.locale" class="dropdown__list">
                    <li class="dropdown__list__item whitepaper">
                      <a href="/PKT_Network_v1.0_2021.02.01.pdf" target="_blank" class="dropdown__list__item__link" id="en">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ja.pdf" target="_blank" class="dropdown__list__item__link" id="ja">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ch.pdf" target="_blank" class="dropdown__list__item__link" id="zh">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ko.pdf" target="_blank" class="dropdown__list__item__link" id="ko">{{ $t("header.whitepaper") }}</a>
                      <a href="/PKT_Network_v1.0_2021.02.01-ru.pdf" target="_blank" class="dropdown__list__item__link" id="ru">{{ $t("header.whitepaper") }}</a>
                    </li>
                    <li class="dropdown__list__item">
                      <a
                        href="https://docsend.com/view/ayf5d3tz5rymn8fv"
                        target="_blank"
                        class="dropdown__list__item__link"
                        >{{ $t("header.deck") }}</a
                      >
                    </li>
                    <li class="dropdown__list__item">
                      <a
                        href="/PacketCrypt-2020-09-04.pdf"
                        target="_blank"
                        class="dropdown__list__item__link"
                        >{{ $t("header.packetcrypt") }}</a
                      >
                    </li>
                  </ul>
                </div>
          </div>
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
import { isMobile } from 'mobile-device-detect';
export default {
  name: "Header",
  data() {
    return {
      isHidden: false,
      nav_open: false,
      nav_list: [
        // {
        //   name:this.$t("header.build"),
        //   route_link: "build",
        // },
        {
          name: this.$t("header.mine"),
          route_link: "/mine",
        },
        {
          name: this.$t("home.roadmap_link"),
          route_link: "/roadmap",
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
          name: "PKT",
          route_link: "cash",
        },
        // {
        //   name: this.$t("header.tech"),
        //   route_link: "tech",
        // },
        // {
        //   name: this.$t("header.ecosystem"),
        //   route_link: "ecosystem",
        // },
        {
          name: this.$t("header.docs"),
          route_link: "/",
        },
        {
          name: this.$t("header.blog"),
          route_link: "/",
        }
      ],
      dropdownOpen: false,
      mClass: isMobile ? 'mobile_block' : ''
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    onOver() {
        this.$refs.dropdown.visible = true;
      },
      onLeave() {
        this.$refs.dropdown.visible = false;
      }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
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
  transition: all .3s ease-in-out;
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
    box-shadow: 0px 2px 9px -5px rgba(0,0,0,0.75);
    @include for-width(-tablet) {
      background: none;
      border-radius: 0;
      text-align: center;
      box-shadow:none;
      top: rem(50);
    }
    &__item {
      &__link {
        display: block;
        padding: 20px;
        color: #000;
        font-size: 16px;
        @include for-width(-tablet) {
          font-size: rem(14);
          padding:rem(10) 0;
          color: $white;
        }
        &:hover {
          color: $hard_blue;
          @include for-width(-tablet) {
            color: $light_blue_new;
          }
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
  background-color: $dark_blue_new;
  z-index: 100;
  @include for-width(-tablet) {
    width:100%;
  }
  & .container {
    width: 100%;
    max-width: rem(1360);
    margin: 0 auto;
    padding: rem(25) rem(30);
    @include for-width(+desktop-hg) {
      padding: rem(20) 0;
    }
    @include for-width(-tablet) {
      padding: rem(20) rem(25);
    }
    @include for-width(-small-lg) {
      padding: rem(20);
    }
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  @include for-width(-tablet) {
    justify-content: space-between;
  }
  &__logo {
    cursor: pointer;
    margin-right:rem(40);
    & img {
      height: rem(40);
      @include for-width(-tablet) {
        height: rem(30);
      }
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    @include for-width(-tablet) {
      position: fixed;
      transform: scaleX(0);
      transform-origin: right;
      transition: 0.3s all ease;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: rem(25) rem(35);
      background-color:$dark_blue_new;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-link {
      &.btn-nav {
        font-size: rem(16);
        color: $white;
        @extend %semibold;
        @include for-width(-laptop) {
          font-size: rem(14);
        }
        @include for-width(-tablet) {
          font-size: rem(20);
          padding:rem(10) 0;
          display:block;
        }
        & svg {
            margin-left: rem(5);
            display:inline-block;
            vertical-align:middle;
          }
      }
      &.link-active {
        color: $light_blue_new;
      }
      &.mobile_block {
        text-align:center;
        & .nav__menu-text {
          display:block;
        }
      }
    }

    @include for-width(-tablet) {
      &.active {
        transform: scaleX(1);
      }
    }

    &-item {
      @include for-width(-laptop) {
        margin: 0 rem(10);
      }
      @include for-width(+ laptop) {
        margin:0 rem(12);
      }
      @include for-width(+ desktop-medium) {
        margin-left: rem(20);
      }

      &--blue {
        margin-left: rem(125);
      }

      .nested-drop {
        display: none;
        position: absolute;
        top: rem(63);
        margin-left:-25px;
        background-color: #fff;
        border-radius: 5px;
        padding: 0 0 rem(15);
        & li {
          padding:rem(15) rem(20) 0;
          & a {
            font-size: rem(14);
            color: #000;
            @extend %medium;
            @include for-width(-laptop) {
              font-size: rem(14);
            }
            &:hover {
              color: $light_blue_new;
            }
          }
        }
        @include for-width(-tablet) {
          position: relative;
          top: 0;
          margin-left:0;
        }
      }

      &:hover {
        .nested-drop {
          display: block;
          box-shadow: 0px 2px 9px -5px rgba(0,0,0,0.75);
        }
      }
    }

    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: rem(14);
      @include for-width(-tablet) {
        position: fixed;
        transform: scaleX(0);
        transform-origin: right;
        transition: 0.3s all ease;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        &.active {
          transform: scaleX(1);
          width:100%;
          overflow:auto;
          &::-webkit-scrollbar {
            display:none;
          }
          &::-webkit-scrollbar-track {
            display:none;
          }
          &::-webkit-scrollbar-thumb {
            display:none;
          }
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
        width: rem(197);
        min-width: auto;
        margin-left: rem(40);
        @extend %semibold;
        .nav__menu-link {
          color: $white;
        }
      }
      &-text {
        display: flex;
        align-items: center;
      }

      & svg {
        margin-left: rem(3);
        display:inline-block;
        vertical-align:middle;
      }
    }
    &-lang_switch {
      margin-left:rem(15);
      position: relative;
      @include for-width(-tablet) {
        margin-left:0;
      }
      &_trigger {
        font-size: rem(16);
        color: $white;
        @extend %semibold;
        width:auto;
        @include for-width(-laptop) {
          font-size: rem(14);
        }
        @include for-width(-tablet) {
          font-size: rem(20);
          padding:rem(10) 0;
          display:block;
          margin: 0 auto;
        }
        text-transform:capitalize;
        & svg {
          vertical-align:middle;
          margin-left:rem(3);
        }
      }
      &_drop_down {
        position:absolute;
        z-index:5;
        top: 100%;
        background-color: #fff;
        border-radius: 5px;
        padding: 0 0 rem(15);
        margin-left:-35px;
        margin-top:rem(5);
        @include for-width(-tablet) {
          position:relative;
          top: 0;
          margin-left:0;
          background: none;
          text-align:center;
        }
        & a {
          display:block;
          padding:rem(15) rem(20) 0;
          color: $white;
          @extend %semibold;
          text-transform:capitalize;
          color: #000;
          @extend %medium;
            @include for-width(-laptop) {
              font-size: rem(14);
            }
            @include for-width(-tablet) {
              color: $white;
            }
            &:hover {
              color: $light_blue_new;
            }
        }
      }
    }
    & .mobile_button {
      display:none;
      @include for-width(-tablet) {
        display:block;
        & .nav__menu-blue {
          margin: 35px 0 0;
        }
      }
      .nav__menu-link {
        @extend %medium;
      }
    }
    & .desktop_button {
      @include for-width(-tablet) {
        display:none;
      }
    }
  }

  &__burger {
    display: none;
    width: rem(25);
    height: rem(25);
    @include for-width(-tablet) {
      display: block;
    }
    // @include for-width(-tablet) {
    //   width: rem(24);
    //   height: rem(24);
    // }
    position: relative;
    cursor: pointer;
    border-top:rem(2) solid $white;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: rem(25);
      height: rem(2);
      background-color: $white;
      top: 50%;
      left: 50%;
      transition: 0.3s all ease;
    }

    &::after {
      transform: translate(-50%, -7px);
      // @include for-width(-tablet) {
      //   transform: translate(-50%, -3px);
      // }
    }

    &::before {
      transform: translate(-50%, 0);
      // @include for-width(-tablet) {
      //   transform: translate(-50%, 3px);
      // }
    }

    &.active {
      border-top:0;
      &::after {
        transform: translateX(-50%) rotate(-45deg);
      }

      &::before {
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
ul .whitepaper .dropdown__list__item__link {
  display:none;
}
ul#en .whitepaper #en {
  display:block;
}
ul#ja .whitepaper #ja {
  display:block;
}
ul#zh .whitepaper #zh {
  display:block;
}
ul#ko .whitepaper #ko {
  display:block;
}
ul#ru .whitepaper #ru {
  display:block;
}
</style>
