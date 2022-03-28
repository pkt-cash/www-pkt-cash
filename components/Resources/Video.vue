<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal">
      <template>
		<iframe width="700" height="500" :src="'https://www.youtube.com/embed/' + url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </template>
	  <div class="close"  @click="$emit('close-modal')">
		<img class="close-img" src="/img/close-icon.png" alt="Close" />
	  </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Video",
  props: {
	url: String,
	item_id: String
  },
};
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width:100vw;
  height:100vh;
  @extend %df;
  @extend %fdc;
  @extend %jcc;
  @extend %aic;
  background-color: rgba(19,22,55,.45);
  z-index:9;
  & .modal {
	z-index:10;
	position:relative;
	& iframe {
		max-width:70vw;
		max-height:70vh;
	}
	.close {
		position:absolute;
		cursor: pointer;
		top:-25px;
		right:-25px;
		.close-img {
			width: rem(15);
		}
	}
  }
}
</style>
