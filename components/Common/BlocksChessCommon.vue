<template>
  <div class="c-chess-block">
	<div class="container">
    <template v-for="item of list">
		<div class="c-chess-block_inner" :class="item.text_direction">
			<div class="c-chess-block_inner_single">
				<h4 class="c-chess-block_inner_single_title">{{ item.single_title }}</h4>
				<p class="c-chess-block_inner_single_descr">{{ item.single_descr }}</p>
				<nuxt-link class="c-common-button c-common-button__filled" :to="item.single_url">
					<span>{{ item.single_link }}</span>
				</nuxt-link>
			</div>
			<div class="c-chess-block_inner_single_img">
				<img :src="item.single_img" :alt="item.single_title" />
			</div>
		</div>
    </template>
	</div>
  </div>
</template>

<script>
export default {
  name: "BlocksChessCommon",
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
.c-chess-block {
	&_inner {
		@extend %df;
		@extend %jcsb;
		@extend %aic;
		padding-top:rem(150);
		@include for-width(-tablet) {
			padding-top:rem(100);
			-webkit-flex-direction: column;
			-moz-flex-direction: column;
			-ms-flex-direction: column;
			-o-flex-direction: column;
			flex-direction: column;
		}
		&:first-child {
			padding-top:0;
		}
		&_single {
			width:50%;
			@include for-width(-tablet) {
				width:100%;
			}
			&_title {
				@extend %h2-common;
    			color:$white;
			}
			&_descr {
				@extend %p-big-common;
				margin:rem(20) 0 rem(25);
				color:$white;	
			}
		}
		&_single_img {
			width:50%;
			@include for-width(-tablet) {
				width:100%;
			}
			& img {
				width:80%;
				@include for-width(-tablet) {
					width:100%;
					margin-top:rem(40);
				}
			}
		}
	}
	& .text_right {
		& .c-chess-block_inner_single {
			@extend %t-left;
			order:2;
			padding-left:rem(50);
			@include for-width(-tablet) {
				order:1;
				padding-left:0;
			}
		}
		& .c-chess-block_inner_single_img {
			@extend %t-left;
			order:1;
		}
	}
	& .text_left {
		& .c-chess-block_inner_single {
			@extend %t-left;
			padding-right:rem(50);
			@include for-width(-tablet) {
				padding-right:0;
			}
		}
		& .c-chess-block_inner_single_img {
			@extend %t-right;
			@include for-width(-tablet) {
				text-align:left;
			}
		}
	}
}
</style>
