<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Navigation -->
        <div class="c-content-main__navigation">
          <ul class="c-content-main__navigation-list">
            <li class="c-content-main__navigation-item">
              <a
                href="#network-steward-charter"
                class="c-content-main__navigation-link"
                @click="itm_link = 'network-steward-charter'"
                :class="{ active: itm_link === 'network-steward-charter' || itm_link === null }"
              >Network Steward Charter</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a
                href="#funding-proposal"
                class="c-content-main__navigation-link"
                @click="itm_link = 'funding-proposal'"
                :class="{ active: itm_link === 'funding-proposal'}"
              >Funding Proposal</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a
                href="#network-steward-projects"
                class="c-content-main__navigation-link"
                @click="itm_link = 'network-steward-projects'"
                :class="{ active: itm_link === 'network-steward-projects'}"
              >Network Steward Projects</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a
                href="#who-is-the-network-steward"
                class="c-content-main__navigation-link"
                @click="itm_link = 'who-is-the-network-steward'"
                :class="{ active: itm_link === 'who-is-the-network-steward'}"
              >Who is the Network Steward</a>
            </li>
          </ul>
        </div>
        <!-- // Navigation -->

        <!-- Item 1 -->
        <div class="c-content-main__content">
          <div class="c-content-anchor" id="network-steward-charter"></div>
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">Network Steward Charter</h2>
            <p
              class="c-content-main__text"
            >The objective of The Network Steward is to reduce barriers of entry to support the PKT Network in the pursuit of increased individual autonomy and privacy.</p>
            <p class="c-content-main__text">Key aspects of this objective include:</p>
            <ul class="c-content-main__list">
              <li
                class="c-content-main__list-item"
              >Financing the development of open source networking software</li>
              <li
                class="c-content-main__list-item"
              >Lobbying for improved regulatory environment for small network operators and more generally, for internet freedom, privacy, and decentralization</li>
              <li
                class="c-content-main__list-item"
              >Purchasing property such as proprietary software or radio frequency spectrum rights in order to put these things in the commons</li>
            </ul>
            <p
              class="c-content-main__text"
            >In order to achieve these goals, The Network Steward will occasionally meet to review funding proposals and choose which projects to grant PKT to.</p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-anchor" id="funding-proposal"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">How to Make a Funding Proposal</h2>
            <p
              class="c-content-main__text"
            >Getting a proposal accepted is much like getting a pull request merged in a project. You start by socializing what you want to do with the community (try the IRC or Matrix chats) and when you have rough consensus, you move that conversation to a formal proposal.</p>
            <p
              class="c-content-main__text"
            >To make a proposal, you must create a pull request to the ns-projects repository which adds a new project markdown file as per the project template and name it according to the naming convention defined in the repository readme.</p>
            <p
              class="c-content-main__text"
            >Periodically The Network Steward will hold a meeting and decide on which proposals should be funded. The minutes of these meetings are published in the the ns-projects repository along with the projects and their status.</p>
            <a
              href="https://github.com/pkt-cash/ns-projects"
              target="_blank"
              class="c-content-main__btn blue-btn-arrow"
            >
              <span>Submit Proposal</span>
            </a>
            <a
              href="https://github.com/pkt-cash/ns-projects/blob/master/projects/template.md"
              target="_blank"
              class="c-content-main__btn blue-btn-arrow"
            >
              <span>Download Template</span>
            </a>
          </div>
          <!-- //Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-anchor" id="network-steward-projects"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Network Steward Projects</h2>
            <p class="c-content-main__text">These are the various projects:</p>
            <a
              href="https://github.com/pkt-cash/ns-projects/tree/master/projects"
              target="_blank"
              class="c-content-main__btn blue-btn-arrow"
            >
              <span>Network Steward Projects</span>
            </a>
          </div>
          <!-- // Item 3 -->

          <!-- Item 4 -->
          <div class="c-content-anchor" id="who-is-the-network-steward"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Who is the Network Steward?</h2>
            <p
              class="c-content-main__text"
            >The Network Steward is a multi-signature wallet which requires 3 o ut of 5 signatures in order to make a payment.</p>
            <p class="c-content-main__text">
              The Network Steward wallet address is:
              <a
                href="#"
              >pkt1q6hqsqhqdgqfd8t3xwgceulu7k9d9w5t2amath0qxyfjlvl3s3u4sjza2g2</a>
            </p>
            <ul class="c-content-main__list">
              <li class="c-content-main__list-item">cjd - cjdns original author</li>
              <li class="c-content-main__list-item">Arceliar - Yggdrasil original author</li>
              <li class="c-content-main__list-item">benhylau - Contributor at Toronto Mesh</li>
              <li class="c-content-main__list-item">NeilAlexander - Yggdrasil release manager</li>
              <li class="c-content-main__list-item">Backupbrain - Creator of NetNinja VPN device</li>
            </ul>
            <p
              class="c-content-main__text"
            >All of the participants have agreed not to enter into any relationships which would affect their ability to act impartially on behalf of the PKT chain.</p>
            <nuxt-link class="c-content-main__btn blue-btn-arrow" to="/network-steward-vote">
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
  name: "NetworkMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
  data() {
    return {
      itm_link: null
    }
  },
};
</script>

<style lang="scss" scoped>
  .c-content-anchor {
    position: absolute;
    margin-top: -70px;
  }
.c-content-main {
  & .container {
    width: 100%;
    max-width: rem(1138);
  }
  &__title {
    @include for-width(-tablet) {
      font-size: rem(38);
      line-height: rem(45);
      padding-right: rem(10);
    }
  }
  &__btn {
    @include for-width(-tablet) {
      display: block;
      margin: 0 auto rem(10);
      max-width: rem(223);
      &.blue-btn-arrow {
        margin-right: auto;
      }
    }
  }

  &__content {
    max-width: calc(100% - 435px);
    @include for-width(-tablet) {
      max-width: 100%;
    }
  }

  &__navigation {
    width: rem(250);
  }
}
</style>
