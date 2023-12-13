<template>
	<div class="c-cards">
		<template v-for="item of list">
			<div class="c-cards-single">
				<h4 class="c-cards-single_title">{{ item.single_title }}</h4>
				<p class="c-cards-single_descr">{{ item.single_descr }}</p>
				<nuxt-link class="c-common-button c-common-button__filled" :to="item.single_url">
					<span>{{ item.single_link }}</span>
				</nuxt-link>
			</div>
		</template>
	</div>
</template>

<script>
export default {
  name: "CardsCommon",
  props: {
    list: Array,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 767 : false;
    },
  }
};
</script>

<style lang="scss">
.c-cards {
	@extend %df;
    @extend %jcsb;
    @extend %fw;
	@include for-width(-tablet) {
		justify-content: center;
	}
	@include for-width(-small-lg) {
		display:block;
	}
	&-single {
		width:31%;
		padding:rem(45) rem(30) rem(40);
		border-radius: 20px;
		background-color:$black_blue_light;
		@extend %t-center;
		@include for-width(-laptop) {
			padding:rem(25) rem(25) rem(30);
		}
		@include for-width(-tablet) {
			width:48%;
			margin:1%;
		}
		@include for-width(-small-lg) {
			width:100%;
			margin:rem(20) 0 0;
		}
		&_title {
			@extend %p-big-common;
			@extend %inter_semibold;
		}
		&_descr {
			@extend %p-common-thick;
			opacity:0.5;
			padding:rem(15) 0 rem(50);
		}
	}
}
</style>
