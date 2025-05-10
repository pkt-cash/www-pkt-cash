<template>
  <div class="c-img_text-block">
	<div class="container">
    <template v-for="item of list">
		<div class="c-img_text-block_inner" :class="item.unique_class" :style="item.bg_color">
      <div class="c-img_text-block_inner_single_img">
				<img :src="item.single_img" :alt="item.single_title" />
			</div>
			<div class="c-img_text-block_inner_single">
        <img :src="item.logo_img" :alt="item.logo_title" />
				<h4 class="c-img_text-block_inner_single_title">{{ item.single_title }}</h4>
				<p class="c-img_text-block_inner_single_descr">{{ item.single_descr }}</p>
				<a :href="item.single_url" target="_blank" class="c-common-button c-common-button__filled" v-if="item.external === true"><span>{{ item.single_link }}</span></a>
				<nuxt-link class="c-common-button c-common-button__filled" :to="item.single_url" v-if="item.single_link && item.external === false">
					<span>{{ item.single_link }}</span>
				</nuxt-link>
			</div>
		</div>
    </template>
	</div>
  </div>
</template>

<script>
export default {
  name: "ImgSection",
  props: {
    list: Array,
	  external: Boolean,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 767 : false;
    },
  }
};
</script>

<style lang="scss">
.c-img_text-block {
	&_inner {
		@extend %df;
		@extend %jcsb;
		@extend %aic;
		margin-top:rem(80);
		padding:rem(60);
		border-radius:rem(20);
		@include for-width(-tablet) {
			padding-top:rem(100);
			-webkit-flex-direction: column;
			-moz-flex-direction: column;
			-ms-flex-direction: column;
			-o-flex-direction: column;
			flex-direction: column;
		}
		@include for-width(-small-lg) {
			padding:rem(25) rem(20) rem(35);
		}
		&:first-child {
			margin-top:0;
		}
		&_single {
			width:50%;
			@include for-width(-tablet) {
				width:100%;
			}
			@include for-width(-small-lg) {
				padding-top:rem(15);
			}
			&_title {
				@extend %p-big-common-bold;
    			color:$white;
				margin:rem(18) 0 rem(8);
			}
			&_descr {
				@extend %p-big-common;
				margin-bottom:rem(25);
				color:$white;	
			}
		}
		&_single_img {
			width:50%;
      		position:relative;
			@include for-width(-tablet) {
				width:100%;
			}
			& img {
				width:100%;
			}
		}
	}
	& .c-chess-block_inner_single {
		@extend %t-left;
		order:2;
		padding-left:rem(45);
		@include for-width(-laptop) {
			padding-left:rem(25);
		}
		@include for-width(-tablet) {
			order:1;
			padding-left:0;
		}
		@include for-width(-small-lg) {
			padding-top:rem(15);
		}
  }
  & .c-chess-block_inner_single_img {
    @extend %t-left;
    order:1;
  }
}
</style>
