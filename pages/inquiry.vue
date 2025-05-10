<template>
  <div class="v-inquiry">
    <section id="inquiry" class="v-form-section">
      <div class="container">
        <iframe
          id="JotFormIFrame-242325523108044"
          title="PKT Airdrop Inquiry Form"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242325523108044"
          frameborder="0"
          style="min-width:100%;max-width:100%;height:539px;border:none;"
          scrolling="no"
        >
        </iframe>
        <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
        <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-242325523108044']", "https://form.jotform.com/")</script>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'PKT Airdrop Inquiry Form',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'PKT Airdrop Inquiry Form | PKT Cash'
        }
      ],
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
.v-inquiry {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/ecosystem-top.webp);
  background-size:rem(900);
  background-position:top -65px right;
  background-repeat:no-repeat;
  & > section {
    z-index:3;
    position:relative;
  }
  & .v-form-section {
    padding:rem(160) 0 rem(140);
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(80);
    }
    & iframe {
      overflow:auto !important;
      height:rem(2100) !important;
    }
  }
}
</style>