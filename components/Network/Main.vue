<template>
  <div class="c-setup-main">
    <div class="container">
      <div class="c-setup-main__wrap">
        <!-- Navigation -->
        <div class="c-setup-main__navigation">
          <ul class="c-setup-main__navigation-list">
            <li class="c-setup-main__navigation-item">
              <a
                href="#network-steward-charter"
                class="c-setup-main__navigation-link"
              >Network Steward Charter</a>
            </li>
            <li class="c-setup-main__navigation-item">
              <a
                href="#funding-proposal"
                class="c-setup-main__navigation-link active"
              >Funding Proposal</a>
            </li>
            <li class="c-setup-main__navigation-item">
              <a
                href="#network-steward-projects"
                class="c-setup-main__navigation-link"
              >Network Steward Projects</a>
            </li>
            <li class="c-setup-main__navigation-item">
              <a
                href="#who-is-the-network-steward"
                class="c-setup-main__navigation-link"
              >Who is the Network Steward</a>
            </li>
          </ul>
        </div>
        <!-- // Navigation -->

        <!-- Item 1 -->
        <div class="c-setup-main__content">
          <div class="c-setup-main__section" id="network-steward-charter">
            <h2 class="c-setup-main__title">Network Steward Charter</h2>
            <p
              class="c-setup-main__text"
            >The objective of The Network Steward is to reduce barriers of entry to support the PKT Network in the pursuit of increased individual autonomy and privacy.</p>
            <p class="c-setup-main__text">Key aspects of this objective include:</p>
            <ul class="c-setup-main__list">
              <li
                class="c-setup-main__list-item"
              >Financing the development of open source networking software</li>
              <li
                class="c-setup-main__list-item"
              >Lobbying for improved regulatory environment for small network operators and more generally, for internet freedom, privacy, and decentralization</li>
              <li
                class="c-setup-main__list-item"
              >Purchasing property such as proprietary software or radio frequency spectrum rights in order to put these things in the commons</li>
            </ul>
            <p
              class="c-setup-main__text"
            >In order to achieve these goals, The Network Steward will occasionally meet to review funding proposals and choose which projects to grant PKT to.</p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-setup-main__section" id="funding-proposal">
            <h2 class="c-setup-main__title">How to Make a Funding Proposal</h2>
            <p
              class="c-setup-main__text"
            >Getting a proposal accepted is much like getting a pull request merged in a project. You start by socializing what you want to do with the community (try the IRC or Matrix chats) and when you have rough consensus, you move that conversation to a formal proposal.</p>
            <p
              class="c-setup-main__text"
            >To make a proposal, you must create a pull request to the ns-projects repository which adds a new project markdown file as per the project template and name it according to the naming convention defined in the repository readme.</p>
            <p
              class="c-setup-main__text"
            >Periodically The Network Steward will hold a meeting and decide on which proposals should be funded. The minutes of these meetings are published in the the ns-projects repository along with the projects and their status.</p>
            <nuxt-link class="c-setup-main__btn blue-btn-arrow" to="/">
              <span>Submit Proposal</span>
            </nuxt-link>
            <nuxt-link class="c-setup-main__btn blue-btn-arrow" to="/">
              <span>Download Template</span>
            </nuxt-link>
          </div>
          <!-- //Item 2 -->

          <!-- Item 3 -->
          <div class="c-setup-main__section" id="network-steward-projects">
            <h2 class="c-setup-main__title">Network Steward Projects</h2>
            <p class="c-setup-main__text">These are the various projects:</p>
            <nuxt-link class="c-setup-main__btn blue-btn-arrow" to="/">
              <span>Network Steward Projects</span>
            </nuxt-link>
          </div>
          <!-- // Item 3 -->

          <!-- Item 4 -->
          <div class="c-setup-main__section" id="who-is-the-network-steward">
            <h2 class="c-setup-main__title">Who is the Network Steward?</h2>
            <p
              class="c-setup-main__text"
            >The Network Steward is a multi-signature wallet which requires 3 o ut of 5 signatures in order to make a payment.</p>
            <p class="c-setup-main__text">
              The Network Steward wallet address is:
              <a
                href="#"
              >pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2</a>
            </p>
            <ul class="c-setup-main__list">
              <li class="c-setup-main__list-item">cjd - cjdns original author</li>
              <li class="c-setup-main__list-item">Arceliar - Yggdrasil original author</li>
              <li class="c-setup-main__list-item">benhylau - Contributor at Toronto Mesh</li>
              <li class="c-setup-main__list-item">NeilAlexander - Yggdrasil release manager</li>
              <li class="c-setup-main__list-item">Backupbrain - Creator of NetNinja VPN device</li>
            </ul>
            <p
              class="c-setup-main__text"
            >All of the participants have agreed not to enter into any relationships which would affect their ability to act impartially on behalf of the PKT chain.</p>
            <nuxt-link class="c-setup-main__btn blue-btn-arrow" to="/">
              <span>Voting Details</span>
            </nuxt-link>
          </div>
          <!-- // Item 4 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetupMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.c-setup-main {
  padding: rem(80) 0 rem(50);

  & .container {
    width: 100%;
    max-width: rem(1182);
    margin: 0 auto;
    padding: 0 rem(15);
  }

  &__section {
    padding-top: rem(30);

    & > *:last-child {
      margin-bottom: rem(20);
    }
  }

  &__wrap {
    display: flex;
  }

  &__content {
    max-width: calc(100% - 435px);
  }

  &__navigation {
    padding-top: rem(30);
    flex: 0 0 auto;
    margin-right: rem(50);

    &-list {
      position: sticky;
      top: rem(30);
    }

    &-link {
      @extend %light;
      @include font_sizes(16, 35);
      color: $dark_blue;

      &.active {
        @extend %medium;
        padding-left: rem(13);
        position: relative;

        &::after {
          position: absolute;
          content: "";
          top: 0%;
          left: 0;
          width: 1px;
          height: 100%;
          background-color: $hard_blue;
        }
      }
    }
  }

  &__title {
    @extend %h2-title;
    color: $dark_blue;
    margin-bottom: rem(50);
  }

  &__text {
    @extend %text-main;
    color: $dark_blue;
    margin-bottom: rem(30);

    & a {
      color: $hard_blue;
    }
  }

  &__scroll {
    @extend %light;
    color: $dark_blue;
    @include font_sizes(23, 40);
    overflow-x: auto;
    padding: rem(30) rem(30) rem(47);
    margin-bottom: rem(50);
    background-color: $light_blue;
    box-shadow: rem(4) rem(4) rem(10) rgba(25, 25, 68, 0.1);
    scrollbar-width: thin;
    scrollbar-color: $dark_blue $white;

    &::-webkit-scrollbar {
      height: 20px;
      background-color: #143861;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $dark_blue;
      height: 20px;
    }
    &::-webkit-scrollbar-button {
      height: 10px;
    }

    &::-webkit-resizer {
      height: 20px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar {
      height: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-button:vertical:start:decrement {
      display: none;
    }
    &::-webkit-scrollbar-button:vertical:end:increment {
      display: none;
    }
  }

  &__more {
    @extend %medium;
    @include font_sizes(25, 40);
    @include for-width(-tablet-lg) {
      @include font_sizes(23, 35);
    }
    @include for-width(-tablet) {
      @include font_sizes(20, 32);
    }
    @include for-width(-small-lg) {
      @include font_sizes(17, 27);
    }
    margin-bottom: rem(50);

    & a {
      color: $hard_blue;
      text-decoration: underline;
    }
  }

  &__list {
    padding-left: rem(40);
    margin-bottom: rem(40);

    &-item {
      @extend %text-main;
      margin-bottom: rem(20);
      color: $dark_blue;
      position: relative;

      &::after {
        position: absolute;
        top: rem(20);
        left: rem(-40);
        transform: translateY(-50%);
        display: block;
        content: "";
        width: rem(10);
        height: rem(10);
        background-color: $hard_blue;
        border-radius: 50%;
      }
    }
  }

  &__list--small {
    padding-left: rem(80);
    margin-bottom: rem(40);

    &-item {
      @extend %text-main;
      color: $dark_blue;
      position: relative;

      &::after {
        position: absolute;
        top: 50%;
        left: rem(-25);
        transform: translateY(-50%);
        display: block;
        content: "";
        width: rem(10);
        height: rem(10);
        background-color: $hard_blue;
        border-radius: 50%;
      }
    }
  }

  &__btn {
    margin-right: rem(50);
    margin-top: rem(20);
  }
}
</style>
