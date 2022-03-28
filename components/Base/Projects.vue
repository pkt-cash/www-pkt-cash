<template>
  <div class="v-lines">
    <template v-for="item of list">
		<div class="v-lines__line">
			<img src="/img/network-steward-projects-icon.svg" alt="icon-calendar" />
			<span class="v-lines__line__file">{{ item.file }}</span>
			<span class="v-lines__line__date">{{ item.date }}</span>
		</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    list: Array,
	image: String,
  }
};
</script>

<style lang="scss">
.v-lines {
	&__line {
		@extend %df;
		@extend %jcs;
		@extend %aic;
		width:100%;
		& img {
			object-fit: contain;
			object-position: center center;
			width:rem(45);
			height:rem(45);
			display:block;
			@include for-width(-tablet) {
				width:rem(35);
				height:rem(35);
			}
		}
	}
}
</style>
