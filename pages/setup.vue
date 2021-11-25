<template>
  <div class="v-setup">
    <section class="v-setup-section">
      <SimpleHeader
        mobile_img="/img/setup-mobile.jpg"
        :title="this.$t('footer.setup_pktcrypt')"
        :text="this.$t('setup.simple_header_text')"
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
      title: this.$t('setup.meta_title'),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
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
