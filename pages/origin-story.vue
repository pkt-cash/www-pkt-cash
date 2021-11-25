<template>
  <div class="v-origin">
    <section class="v-origin-section">
      <SimpleHeader
        :title="this.$t("origin_story.simple_header_title")"
        :subtitle="this.$t("origin_story.simple_header_text")"
        bg="/img/origin-story-header-bg.jpg"
      />
    </section>
    <section class="v-origin-section">
      <OriginStoryFirst />
    </section>
    <section class="v-origin-section">
      <OriginStoryCompass />
    </section>
    <section class="v-origin-section">
      <OriginStoryCar />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import OriginStoryFirst from "~/components/OriginStory/First";
import OriginStoryCompass from "~/components/OriginStory/Compass";
import OriginStoryCar from "~/components/OriginStory/Car";

export default {
  components: {
    SimpleHeader,
    OriginStoryFirst,
    OriginStoryCompass,
    OriginStoryCar,
  },
  head() {
    return {
      title: this.$t("origin_story.meta_title"),
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