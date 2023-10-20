<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Item 1 -->
        <div class="c-content-anchor" id="install-golang"></div>
        <div class="c-content-main__content">
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">{{ $t("wallet.golang_install_title") }}</h2>
            <p class="c-content-main__text">{{ $t("wallet.golang_install_text") }}</p>
            <p class="c-content-main__text">https://golang.org/doc/install</p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-anchor" id="install-git"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">{{ $t("wallet.git_install_title") }}</h2>
            <p class="c-content-main__text">{{ $t("wallet.git_install_text_01") }}</p>
            <pre class="c-content-main__scroll">{{ $t("wallet.git_install_text_03_link_base") }}</pre>
            <p class="c-content-main__text">
              {{ $t("wallet.git_install_text_02") }}
              <a href="#">“{{ $t("wallet.git_install_text_03_link") }}”</a> {{ $t("wallet.git_install_text_03") }}
              <a href="#">“{{ $t("wallet.git_install_text_04_link") }}”</a> {{ $t("wallet.git_install_text_04") }}
            </p>
            <p class="c-content-main__text">
              {{ $t("wallet.git_install_text_05") }}
              <a href="#">“{{ $t("wallet.git_install_text_06_link") }}”</a> {{ $t("wallet.git_install_text_06") }}
              <a href="#">“{{ $t("wallet.git_install_text_07_link") }}”</a>
            </p>
          </div>
          <!-- //Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-anchor" id="install-the-components"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">{{ $t("wallet.component_install_title") }}</h2>
            <p class="c-content-main__text">{{ $t("wallet.component_install_text") }}</p>
            <pre class="c-content-main__scroll">git clone github.com/pkt-cash/pktd
cd pktd
./do</pre>
          </div>
          <!-- // Item 3 -->

          <!-- Item 4 -->
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">{{ $t("wallet.launch_title") }}</h2>
            <p class="c-content-main__text">{{ $t("wallet.launch_text_01") }}</p>
            <pre class="c-content-main__scroll">./bin/pktd</pre>
            <p class="c-content-main__text">{{ $t("wallet.launch_text_02") }}</p>
            <pre class="c-content-main__scroll">2019-08-16 13:47:56.526 [INF] SYNC: Processed 843 blocks in the last 10.01s (843
transactions, height 843, 2019-08-16 05:56:50 +0000 UTC)</pre>
            <p class="c-content-main__text">{{ $t("wallet.launch_text_03") }}</p>
            <pre class="c-content-main__scroll">./bin/pktctl getinfo</pre>
            <p class="c-content-main__text">{{ $t("wallet.launch_text_04") }}
              <a href="https://explorer.pkt.cash" target="_blank">{{ $t("wallet.launch_text_04_link") }}</a> {{ $t("wallet.launch_text_04_01") }}
            </p>
          </div>
          <!-- // Item 4 -->

          <!-- Item 5 -->
          <div class="c-content-anchor" id="setup-the-wallet"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">{{ $t("wallet.setup_wallet_title") }}</h2>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_01") }}</p>
            <pre class="c-content-main__scroll">./bin/pktwallet --create</pre>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_02") }}</p>
            <pre class="c-content-main__scroll">./bin/pktwallet</pre>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_03") }}:</p>
            <pre class="c-content-main__scroll">./bin/pktctl --wallet getnewaddress</pre>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_04") }}:</p>
            <pre class="c-content-main__scroll">./bin/pktctl --wallet getbalance</pre>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_05") }}</p>
            <pre class="c-content-main__scroll">./bin/pktctl --wallet walletpassphrase &lt;password you used when creating wallet&gt; 60</pre>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_06") }}</p>
            <pre class="c-content-main__scroll">./bin/pktctl --wallet sendtoaddress pP6Vh6GiL4HsMfcPby5xHQTyBUApd7mewg 10</pre>
            <p class="c-content-main__text">{{ $t("wallet.setup_wallet_text_07") }}:</p>
            <pre class="c-content-main__scroll">./bin/pktctl -l</pre>
            <nuxt-link class="c-content-main__btn blue-btn-arrow" :to="localePath('mining')">
              <span>{{ $t("wallet.setup_wallet_button_01") }}</span>
            </nuxt-link>
            <nuxt-link class="c-content-main__btn blue-btn-arrow" :to="localePath('cash')">
              <span>{{ $t("wallet.setup_wallet_button_02") }}</span>
            </nuxt-link>
          </div>
          <!-- // Item 5 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletSetupMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
};
</script>

<style lang="scss" scoped>
.c-content-main {
  & .container {
    width: 100%;
    max-width: rem(1182);
  }

  &__content {
    max-width: calc(100% - 435px);
    margin: 0 auto;
    @include for-width(-tablet) {
      max-width: 100%;
    }
  }
}
</style>
