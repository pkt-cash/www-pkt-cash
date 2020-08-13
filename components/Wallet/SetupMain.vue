<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Item 1 -->
        <div class="c-content-anchor" id="install-golang"></div>
        <div class="c-content-main__content">
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Install golang</h2>
            <p
              class="c-content-main__text"
            >First, you need to install the go programming language, how to do it is mostly outside the scope of this website but you can learn more here:</p>
            <p class="c-content-main__text">https://golang.org/doc/install</p>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-anchor" id="install-git"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Install git</h2>
            <p
              class="c-content-main__text"
            >Next you will need to make sure you have git installed. The first thing to do is check whether you have it installed already:</p>
            <pre class="c-content-main__scroll">git version</pre>
            <p class="c-content-main__text">
              If it prints something like
              <a href="#">“git version 2.21.1”</a> you’re in luck and you can continue. If it prints something more like
              <a
                href="#"
              >“command not found: git”</a> then you’ll need to install it.
            </p>
            <p class="c-content-main__text">
              Installation will depend on your system, for debian/ubuntu like systems you will want
              <a
                href="#"
              >“sudo apt install git”</a> and for OSX with homebrew, you’ll want
              <a href="#">“brew install git”</a>
            </p>
          </div>
          <!-- //Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-anchor" id="install-the-components"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Install the components</h2>
            <p
              class="c-content-main__text"
            >Once you have golang and git fully installed and set up, you can use the following commands to install pktd, wallet and btcctl.</p>
            <pre class="c-content-main__scroll">git clone github.com/pkt-cash/pktd
cd pktd
./do</pre>
          </div>
          <!-- // Item 3 -->

          <!-- Item 4 -->
          <div class="c-content-main__section">
            <h2 class="c-content-main__title">Launch pktd</h2>
            <p class="c-content-main__text">Now, you can launch pktd:</p>
            <pre class="c-content-main__scroll">./pktd</pre>
            <p class="c-content-main__text">This should show some output such as the following:</p>
            <pre class="c-content-main__scroll">2019-08-16 13:47:56.526 [INF] SYNC: Processed 843 blocks in the last 10.01s (843
transactions, height 843, 2019-08-16 05:56:50 +0000 UTC)</pre>
            <p
              class="c-content-main__text"
            >This tells you that it’s properly syncing the chain. In another window, you can check the status of your node.</p>
            <pre class="c-content-main__scroll">./btcctl getinfo</pre>
            <p class="c-content-main__text">
              Check the
              <a href="https://explorer.pkt.cash" target="_blank">Block Explorer</a> to see the most recent block.
            </p>
          </div>
          <!-- // Item 4 -->

          <!-- Item 5 -->
          <div class="c-content-anchor" id="setup-the-wallet"></div>
          <div class="c-content-main__section" >
            <h2 class="c-content-main__title">Setup the wallet</h2>
            <p class="c-content-main__text">First you’ll need to create a wallet</p>
            <pre class="c-content-main__scroll">./wallet --create</pre>
            <p class="c-content-main__text">Then once it is created, launch it</p>
            <pre class="c-content-main__scroll">./wallet</pre>
            <p
              class="c-content-main__text"
            >Now in another window, you can interact with the wallet. First you might want to create for yourself an address:</p>
            <pre class="c-content-main__scroll">./btcctl --wallet getnewaddress</pre>
            <p class="c-content-main__text">Or get your current balance:</p>
            <pre class="c-content-main__scroll">./btcctl --wallet getbalance</pre>
            <p
              class="c-content-main__text"
            >To send PKT to somebody, you need to first unlock your wallet. In this example, we’re keeping the wallet unlocked for only 60 seconds, you can change the number at the end to your liking.</p>
            <pre class="c-content-main__scroll">./btcctl --wallet walletpassphrase &lt;password you used when creating wallet&gt; 60</pre>
            <p class="c-content-main__text">Then send cjd a 10 pkt tip.</p>
            <pre class="c-content-main__scroll">./btcctl --wallet sendtoaddress pP6Vh6GiL4HsMfcPby5xHQTyBUApd7mewg 10</pre>
            <p
              class="c-content-main__text"
            >For an exhaustive list of all the RPC calls you can make, use:</p>
            <pre class="c-content-main__scroll">./btcctl -l</pre>
            <nuxt-link class="c-content-main__btn blue-btn-arrow" to="/mining">
              <span>Begin Mining</span>
            </nuxt-link>
            <nuxt-link class="c-content-main__btn blue-btn-arrow" to="/cash">
              <span>PKT Details</span>
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
