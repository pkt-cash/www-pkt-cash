<template>
  <div class="v-origin">
    <section class="v-origin-section">
      <SimpleHeader
        title="PKT Origin Story"
        subtitle="Cjdns and humble beginnings"
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
};
</script>

<style lang="scss">
.test {
  @extend %h1-title;
  height: calc(100vh - 100px);
  background-color: grey;
}
</style>
