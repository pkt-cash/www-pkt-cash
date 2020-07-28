<template>
  <div class="c-setup-main">
    <div class="container">
      <div class="c-setup-main__navigation">
        <ul class="c-setup-main__navigation-list">
          <li class="c-setup-main__navigation-item">
            <a href="#" to="#" class="c-setup-main__navigation-link">Setup Packet Crypt</a>
          </li>
          <li class="c-setup-main__navigation-item">
            <a href="#Ubuntu" class="c-setup-main__navigation-link">Ubuntu</a>
          </li>
          <li class="c-setup-main__navigation-item">
            <a
              href="#Alpine-Linux"
              to="#Alpine-Linux"
              class="c-setup-main__navigation-link active"
            >Alpine Linux</a>
          </li>
          <li class="c-setup-main__navigation-item">
            <a href="#Apple-OSX" class="c-setup-main__navigation-link">Apple OSX</a>
          </li>
          <li class="c-setup-main__navigation-item">
            <a href="#Begin-Minning" class="c-setup-main__navigation-link">Begin Minning</a>
          </li>
        </ul>
      </div>
      <div class="c-setup-main__section" id="Ubuntu">
        <h2 class="c-setup-main__title">Ubuntu</h2>
        <p
          class="c-setup-main__text"
        >In order to build on Ubuntu, you will need to enable to universe repository to be able to install autoconf-archive.</p>
        <pre class="c-setup-main__scroll">sudo add-apt-repository universe
sudo apt-get update
sudo apt install pkg-config libsodium-dev autoconf-archive git libssl-dev build-essential</pre>
        <p
          class="c-setup-main__text"
        >Once the requirements are installed, get the source code and build it:</p>
        <pre class="c-setup-main__scroll">git clone https://github.com/cjdelisle/PacketCrypt cd PacketCrypt
./autogen.sh
./configure
make
npm install</pre>
      </div>

      <div class="c-setup-main__section" id="Alpine-Linux">
        <h2 class="c-setup-main__title">Alpine Linux</h2>
        <p class="c-setup-main__text">Make sure you have the community repository enabled.</p>
        <pre class="c-setup-main__scroll">sudo apk update
sudo apk add nodejs npm autoconf automake autoconf-archive build-base git libsodium-dev openssl-dev</pre>
        <p
          class="c-setup-main__text"
        >Once the requirements are installed, get the source code and build it:</p>
        <pre class="c-setup-main__scroll">git clone https://github.com/cjdelisle/PacketCrypt
cd PacketCrypt
./autogen.sh
./configure
make
npm install</pre>
      </div>

      <div class="c-setup-main__section" id="Apple-OSX">
        <h2 class="c-setup-main__title">Apple OSX</h2>
        <p class="c-setup-main__text">Make sure you have homebrew installed first.</p>
        <pre class="c-setup-main__scroll">brew install libsodium pkg-config autoconf-archive openssl</pre>
        <p
          class="c-setup-main__text"
        >Once the requirements are installed, get the source code and build it:</p>
        <pre class="c-setup-main__scroll">git clone https://github.com/cjdelisle/PacketCrypt
cd PacketCrypt
./autogen.sh
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:`echo /usr/local/Cellar/libsodium/*/lib/pkgconfig`"
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:`echo /usr/local/Cellar/openssl/*/lib/pkgconfig/`"
./configure
make
npm install</pre>
        <p class="c-setup-main__more">
          Once you’ve completed building PacketCrypt, you can begin mining.
          <nuxt-link to="/">Learn more</nuxt-link>
        </p>
      </div>

      <div class="c-setup-main__section" id="Begin-Minning">
        <h2 class="c-setup-main__title">Announcement mining:</h2>
        <pre class="c-setup-main__scroll">node ./annmine.js --threads 2 --paymentAddr=pDSxcZunaUSUSxHrL6r8zpGJvoEropJ3Es http://pool.gridfinity.com/master</pre>
        <h2 class="c-setup-main__title">Block mining:</h2>
        <pre class="c-setup-main__scroll">node ./blkmine.js --threads 2 --paymentAddr=pDSxcZunaUSUSxHrL6r8zpGJvoEropJ3Es http://pool.gridfinity.com/master</pre>
        <h2 class="c-setup-main__title">Resources</h2>
        <ul class="c-setup-main__list">
          <li class="c-setup-main__list-item">Telegram: https://t.me/pktproject</li>
          <li class="c-setup-main__list-item">Matrix: #pkt:matrix.org</li>
          <li class="c-setup-main__list-item">IRC: #pkt@freenode.net</li>
          <li class="c-setup-main__list-item">Suggest an edit to this page</li>
          <li class="c-setup-main__list-item">Main</li>
        </ul>
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
    max-width: rem(1100);
    margin: 0 auto;
    padding: 0 rem(15);
    position: relative;
  }

  &__navigation {
    position: absolute;
    top: 0;
    left: rem(-200);

    &-list {
    }

    &-link {
      @extend %light;
      @include font_sizes(16, 35);
      color: $dark_blue;

      &.active {
        @extend %medium;
        padding-left: rem(10);
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
  }

  &__scroll {
    @extend %light;
    color: $dark_blue;
    @include font_sizes(23, 35);
    overflow-x: auto;
    padding: rem(30);
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
      color: $dark_blue;
      text-decoration: underline;
    }
  }

  &__list {
    padding-left: rem(80);

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
}
</style>
