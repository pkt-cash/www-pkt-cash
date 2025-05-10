<template>
  <div class="video-wrapper" @click="playVideo">
    <img
      v-if="!videoPlaying"
      :src="coverImage"
      alt="Cover"
      class="video-cover"
    />
    <iframe
      v-show="videoPlaying"
      :src="videoSrc"
      frameborder="0"
      allow="autoplay; encrypted-media"
      class="video-frame"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videoPlaying: false,
    };
  },
  computed: {
    videoSrc() {
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
    },
  },
  methods: {
    playVideo() {
      this.videoPlaying = true;
    },
  },
};
</script>

<style lang="scss">
.video-wrapper {
  position: relative;
  width: 100%;
  max-width: rem(800);
  margin: auto;
  cursor: pointer;
}

.video-cover {
  width: 100%;
  display: block;
}

.video-frame {
  width: 100%;
  height: rem(450);
  border-radius:rem(12);
  @include for-width(-small-lg) {
    height: rem(200);
  }
}
</style>