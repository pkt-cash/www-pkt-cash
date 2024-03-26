<template>
  <div class="c-asymetrical-block">
	<div class="first">
		<template v-for="item of listFirst">
			<div class="c-asymetrical-block_inner">
				<h5 class="c-asymetrical-block_inner_single_title" :class="item.color">{{ item.single_title }}</h5>
				<p class="c-asymetrical-block_inner_single_descr">{{ item.single_descr }}</p>
			</div>
		</template>
	</div>
	<div class="second">
		<template v-for="item of listSecond">
			<div class="c-asymetrical-block_inner">
				<h5 class="c-asymetrical-block_inner_single_title" :class="item.color">{{ item.single_title }}</h5>
				<p class="c-asymetrical-block_inner_single_descr">{{ item.single_descr }}</p>
			</div>
		</template>
	</div>
  </div>
</template>

<script>
export default {
  name: "BlocksChessCommon",
  props: {
    listFirst: Array,
	listSecond: Array,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 767 : false;
    },
  }
};
</script>

<style lang="scss">
.c-asymetrical-block {
	@extend %df;
    @extend %jcsb;
    @extend %ais;
	padding-top:rem(15);
	@include for-width(-small-lg) {
		display:block;
		padding-top:0;
	}
	& .first {
		padding-top:rem(100);
		@include for-width(-small-lg) {
			padding-top:0;
		}

	}
	& .second > div {
		padding-left:rem(110);
		@include for-width(-small-lg) {
			padding-left:0;
		}
	}
	&_inner {
		padding-top:rem(45);
		@include for-width(-small-lg) {
			padding-top:rem(20);
		}
		&:first-child {
			padding-top:0;
			@include for-width(-small-lg) {
				padding-top:rem(20);
			}
		}
		&_single_title {
			@extend %p-big-common;
			@extend %inter_semibold;
			padding-bottom:rem(15);
			&:before {
				content:'';
				margin-right:rem(20);
				width:rem(10);
				height:rem(10);
				background-color:$orange;
				display:inline-block;
				border-radius:rem(50);
				vertical-align:middle;
			}
			&.green_dot:before {
				background-color:$green;
			}
			&.blue_dot:before {
				background-color:$main_blue_light;
			}
		}
		&_single_descr {
			@extend %p-common-thick;
			opacity:0.5;
		}
	}
}
</style>
