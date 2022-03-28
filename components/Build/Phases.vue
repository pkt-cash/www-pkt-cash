<template>
  <div class="c-phase">
    <template v-for="item of list">
	<div :class="{ 'grey_bg': item.bg, 'utilize': item.utilize }">
		<div class="c-phase_top" :key="item.Title">
			<div class="c-phase_top_left">
				<h2 class="c-phase_top_left_title">{{ item.Title }}</h2>
				<h4 class="c-phase_top_left_subtitle">{{ item.subTitle }}</h4>
				<p class="c-phase_top_left_content">{{ item.content }}</p>
			</div>
			<div class="c-phase_top_right">
				<img :src="item.illustration" :alt="item.Title" />
			</div>
		</div>
	</div>
    </template>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: "Phases",
  props: {
    list: Array,
	bg: Boolean,
	utilize: Boolean
  },
  render: (h) => h(App),
  mounted() {
    AOS.init({
      delay: 0,
      duration: 600,
      easing: 'easy',
      once: true,
    })
  },
};
</script>

<style lang="scss">
.c-phase {
	margin-top:rem(50);
	@include for-width(+desktop-hg) {
		margin-top:rem(100);
	}
	@include for-width(-tablet) {
      max-width:100%;
      width:100%;
    }
	@include for-width(-small-lg) {
      padding:0;
    }
	&_top {
		@extend %container_new;
		@extend %df;
		@extend %aic;
		@extend %jcsb;
		padding:rem(100) 0;
		@include for-width(-small-lg) {
			display:block;
		}
		&_left {
			@extend %t-left;
			width:50%;
			padding-right:rem(55);
			@include for-width(-tablet) {
				width:60%;
				padding-right:rem(55);
			}
			@include for-width(-small-lg) {
				width:100%;
				padding-right:0;
			}
			&_title {
				@extend %heading-xlarge;
				@extend %heading-gradient-dark;
			}
			&_subtitle {
				@extend %subheading;
				margin-bottom:rem(15);
				color: $black_new;
			}
			&_content {
				@extend %pn;
			}
		}
		&_right {
			@include for-width(-tablet) {
				text-align:center;
			}
			img {
				width:rem(450);
				@include for-width(-laptop) {
					width:rem(400);
				}
				@include for-width(-tablet) {
					width:rem(350);
				}
				@include for-width(-small-lg) {
					width:90%;
					margin-top:rem(15);
				}
			}
		}
	}
	.grey_bg {
		background-color:$light_bg;
		position:relative;
		padding:rem(75) 0;
		@include for-width(-tablet) {
			padding:rem(75) 0;
		}
		@include for-width(-small-lg) {
			padding:rem(50) 0;
		}
		&:before {
			background-color:$light_bg;
			content:'';
			transform: skewY(-4deg);
			position: absolute;
			top: -50px;
			width: 100%;
			height: rem(100);
			left: 0;
			@include for-width(-laptop) {
				height: rem(75);
				transform: skewY(-3deg);
				top:-25px;
			}
		}
		&:after {
			background-color:$light_bg;
			content:'';
			transform: skewY(4deg);
			position:absolute;
			bottom:-50px;
			width: 100%;
			height: rem(100);
			left: 0;
			@include for-width(-laptop) {
				height: rem(75);
				transform: skewY(3deg);
				bottom:-25px;
			}
		}
		.c-phase_top {
			padding:0;
		}
	}
	.utilize {
		padding:rem(75) 0;
		@include for-width(-small-lg) {
			padding:0;
		}
	}
}
</style>
