<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  head() {
    return {
        htmlAttrs: {
            lang: this.$i18n.locale
        },
        bodyAttrs: {
          class: this.$i18n.locale
        },
    }
  },
  components: {
    Header,
    Footer,
  },
  
};
</script>

<style>
</style>
