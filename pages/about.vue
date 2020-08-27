<template>
  <div class="v-about">
    <section class="v-about-section">
      <SimpleHeader mobile_img="/img/about-mobile.jpg" title="Letter from CJD"
                    subtitle=""
                    bg="/img/about-header-bg.jpg" />
    </section>
    <section class="v-about-section">
      <AboutMain />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import AboutMain from "~/components/About/Main";

export default {
  components: {
    SimpleHeader,
    AboutMain,
  },
  // async mounted() {
  //   // console.log(process)
  //   if(process.client) {
  //     await setTimeout(() => {
  //       let test = document.querySelector('.needsclick');
  //       if(!test) location.reload();
  //     }, 500)
  //     //
  //   }
  // },
};
</script>

<style lang="scss">
.test {
  @extend %h1-title;
  height: calc(100vh - 100px);
  background-color: grey;
}
</style>
