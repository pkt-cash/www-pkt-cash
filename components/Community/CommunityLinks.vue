<template>
	<div class="container">
	<template v-for="item of list">
		<div class="c-community-links_single">
			<a :href="item.link_url" target="_blank"><img :src="item.link_icon" :alt="item.link_title" class="c-community-links_single__icon" /></a>
			<a :href="item.link_url" target="_blank" class="c-community-links_single__url">{{ item.link_title }}</a>
		</div>
	</template>
	</div>
</template>

<script>
export default {
  name: "CommunityLinks",
  props: {
    list: Array,
  }
};
</script>

<style lang="scss">
.c-community-links_single {
	@extend %t-center;
	&__icon {
		@extend %db;
		width:rem(80);
		height:rem(80);
		@include for-width(-desktop-medium) {
			width:rem(75);
			height:rem(75);
		}
		@include for-width(-small-lg) {
			margin:0 auto;
			width:rem(80);
			height:rem(80);
		}
	}
	&__url {
		@extend %db;
		padding-top:rem(15);
		color:$white_50;
		font-size: rem(16);
		line-height: rem(40);
		@extend %inter_regular;
		&:hover {
			color:$white;
		}
	}
}
</style>
