<template>
  <div class="v-setup">
    <section class="v-setup-section">
      <SimpleHeader
        mobile_img="/img/setup-mobile.jpg"
        title="Setup PacketCrypt"
        text="If you’re using Windows, please install Ubuntu from the app store, native windows support is not here yet. In order to use PacketCrypt, you will need a compiler, libcrypto, libsodium and a recent version of nodejs. For nodejs we recommend using nvm.sh to install."
        bg="/img/setup-header-bg.jpg"
      />
    </section>
    <section class="v-setup-section">
      <SetupMain />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import SetupMain from "~/components/Setup/Main";

export default {
  components: {
    SimpleHeader,
    SetupMain,
  },
  head() {
    return {
      title: "Setup - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>

<style lang="scss">
.test {
  @extend %h1-title;
  height: calc(100vh - 100px);
  background-color: grey;
}
</style>
