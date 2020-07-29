<template>
  <div class="c-content-main">
    <div class="container">
      <div class="c-content-main__wrap">
        <!-- Navigation -->
        <div class="c-content-main__navigation">
          <ul class="c-content-main__navigation-list">
            <li class="c-content-main__navigation-item">
              <a href="#" class="c-content-main__navigation-link">Setup Packet Crypt</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#Ubuntu" class="c-content-main__navigation-link active">Ubuntu</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#Alpine-Linux" class="c-content-main__navigation-link">Alpine Linux</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#Apple-OSX" class="c-content-main__navigation-link">Apple OSX</a>
            </li>
            <li class="c-content-main__navigation-item">
              <a href="#Begin-Minning" class="c-content-main__navigation-link">Begin Minning</a>
            </li>
          </ul>
        </div>
        <!-- // Navigation -->

        <!-- Item 1 -->
        <div class="c-content-main__content">
          <div class="c-content-main__section" id="Ubuntu">
            <h2 class="c-content-main__title">Ubuntu</h2>
            <p
              class="c-content-main__text"
            >In order to build on Ubuntu, you will need to enable to universe repository to be able to install autoconf-archive.</p>
            <pre class="c-content-main__scroll">sudo add-apt-repository universe
sudo apt-get update
sudo apt install pkg-config libsodium-dev autoconf-archive git libssl-dev build-essential</pre>
            <p
              class="c-content-main__text"
            >Once the requirements are installed, get the source code and build it:</p>
            <pre class="c-content-main__scroll">git clone https://github.com/cjdelisle/PacketCrypt cd PacketCrypt
./autogen.sh
./configure
make
npm install</pre>
          </div>
          <!-- // Item 1 -->

          <!-- Item 2 -->
          <div class="c-content-main__section" id="Alpine-Linux">
            <h2 class="c-content-main__title">Alpine Linux</h2>
            <p class="c-content-main__text">Make sure you have the community repository enabled.</p>
            <pre class="c-content-main__scroll">sudo apk update
sudo apk add nodejs npm autoconf automake autoconf-archive build-base git libsodium-dev
openssl-dev</pre>
            <p
              class="c-content-main__text"
            >Once the requirements are installed, get the source code and build it:</p>
            <pre class="c-content-main__scroll">git clone https://github.com/cjdelisle/PacketCrypt
cd PacketCrypt
./autogen.sh
./configure
make
npm install</pre>
          </div>
          <!-- // Item 2 -->

          <!-- Item 3 -->
          <div class="c-content-main__section" id="Apple-OSX">
            <h2 class="c-content-main__title">Apple OSX</h2>
            <p class="c-content-main__text">Make sure you have homebrew installed first.</p>
            <pre class="c-content-main__scroll">brew install libsodium pkg-config autoconf-archive openssl</pre>
            <p
              class="c-content-main__text"
            >Once the requirements are installed, get the source code and build it:</p>
            <pre class="c-content-main__scroll">git clone https://github.com/cjdelisle/PacketCrypt
cd PacketCrypt
./autogen.sh
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:`echo /usr/local/Cellar/libsodium/*/lib/pkgconfig`"
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:`echo /usr/local/Cellar/openssl/*/lib/pkgconfig/`"
./configure
make
npm install</pre>
            <p class="c-content-main__more">
              Once you’ve completed building PacketCrypt, you can begin mining.
              <nuxt-link to="/">Learn More</nuxt-link>
            </p>
          </div>
          <!-- // Item 3 -->

          <!-- Item 4 -->
          <div class="c-content-main__section" id="Begin-Minning">
            <h2 class="c-content-main__title">Announcement mining:</h2>
            <pre class="c-content-main__scroll">node ./annmine.js --threads 2 --paymentAddr=pDSxcZunaUSUSxHrL6r8zpGJvoEropJ3Es http://pool.gridfinity.com/master</pre>
            <h2 class="c-content-main__title">Block mining:</h2>
            <pre class="c-content-main__scroll">node ./blkmine.js --threads 2 --paymentAddr=pDSxcZunaUSUSxHrL6r8zpGJvoEropJ3Es http://pool.gridfinity.com/master</pre>
            <h2 class="c-content-main__title">Resources</h2>
            <ul class="c-content-main__list--small">
              <li class="c-content-main__list--small-item">Telegram: https://t.me/pktproject</li>
              <li class="c-content-main__list--small-item">Matrix: #pkt:matrix.org</li>
              <li class="c-content-main__list--small-item">IRC: #pkt@freenode.net</li>
              <li class="c-content-main__list--small-item">Suggest an edit to this page</li>
              <li class="c-content-main__list--small-item">Main</li>
            </ul>
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
</style>
