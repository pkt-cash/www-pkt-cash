<template>
  <div class="c-block">
    <template v-for="item of list">
		<div class="c-block_top" :id="item.Id" :key="item.Title">
			<div class="c-block_top_left">
				<h2 class="c-block_top_left_title">{{ item.Title }}</h2>
				<h4 class="c-block_top_left_subtitle">{{ item.subTitle }}</h4>
				<p class="c-block_top_left_content">{{ item.content }}</p>
				<p class="c-block_top_left_content c-block_top_left_last">{{ item.content_last }}</p>
				<div class="c-block__links inline_links">
					<a :href="item.button_link_1" class="btn_blue_new button_new" :target="item.blank"><span>{{ item.button_label_1 }}</span></a>
					<a :href="item.button_link_2" class="btn_blue_new button_new"><span>{{ item.button_label_2 }}</span></a>
				</div>
			</div>
			<div class="c-block_top_right">
				<template v-if="item.Id == 'build'">
					<Build/>
					<img src="/img/home-build.svg" class="mobile" />
				</template>
              	<template v-else-if="item.Id == 'mine'">
					<Mine/>
				</template>
              	<template v-else>
					<Utility/>
				</template>	  
			</div>
		</div>
		<div class="c-block_bottom">
			<div class="c-block_bottom_single">
				<h4 class="c-block_bottom_single_title">{{ item.single_1_title }}</h4>
				<p class="c-block_bottom_single_descr">{{ item.single_1_descr }}</p>
			</div>
			<div class="c-block_bottom_single">
				<h4 class="c-block_bottom_single_title">{{ item.single_2_title }}</h4>
				<p class="c-block_bottom_single_descr">{{ item.single_2_descr }}</p>
			</div>
			<div class="c-block_bottom_single">
				<h4 class="c-block_bottom_single_title">{{ item.single_3_title }}</h4>
				<p class="c-block_bottom_single_descr">{{ item.single_3_descr }}</p>
			</div>
		</div>
    </template>
  </div>
</template>

<script>
import Build from "~/components/Index/Build";
import Mine from "~/components/Index/Mine";
import Utility from "~/components/Index/Utility";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
export default {
  name: "Blocks",
  props: {
    list: Array,
	is_build: Boolean,
    is_mine: Boolean,
	is_utility: Boolean,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 767 : false;
    },
  },
//   render: (h) => h(App),
//   mounted() {
//     AOS.init({
//       delay: 0,
//       duration: 600,
//       easing: 'easy',
//       once: true,
//     })
//   },
};
</script>

<style lang="scss">
.c-block {
	@extend %container_new;
	margin-top:rem(50);
	@include for-width(+desktop-hg) {
		margin-top:rem(100);
	}
	@include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25);
    }
	@include for-width(-small-lg) {
      padding:0 rem(20);
    }
	&_top {
		@extend %df;
		@extend %aic;
		@extend %jcsb;
		@include for-width(-tablet) {
			display:block;
		}
		&_left {
			@extend %t-left;
			padding-right: rem(75);
			@include for-width(-small-lg) {
				padding:0;
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
			svg {
				width:rem(600);
    			padding-left: rem(150);
				@include for-width(-desktop-med) {
					width:rem(550);
				}
				@include for-width(-laptop) {
					width:rem(400);
				}
				@include for-width(-tablet) {
					padding:0;
				}
				@include for-width(-small-lg) {
					width:90%;
				}
			}
			#desktop {
				@include for-width(-small-lg) {
					display:none;
				}
			}
			img.mobile {
				display:none;
				@include for-width(-small-lg) {
					display:block;
					margin:0 auto;
				}
			}
		}
	}
	&_bottom {
		@extend %df;
		@extend %fw;
		@extend %jcsb;
		padding:rem(50) 0 rem(50);
		@include for-width(+desktop-hg) {
			padding:rem(50) 0 rem(100);
		}
		@include for-width(-small-lg) {
			display:block;
			padding:rem(50) rem(25) rem(35);
		}
		&_single {
			width: calc(33.333% - 20px);
			flex: 1 1 auto;
			margin:	0 10px;
			background: $light_bg;
			box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
			padding: rem(20) rem(25) rem(20);
			@include for-width(+desktop-lg) {
				padding: rem(30) rem(35) rem(45);
			}
			@include for-width(-tablet) {
				padding: rem(15) rem(20) rem(20);
			}
			@include for-width(-small-lg) {
				width:100%;
				margin:	0 0 rem(25);
			}
			&_title {
				@extend %semibold;
				@extend %heading-small;
				margin-bottom:rem(10);
				@include for-width(-laptop) {
					font-size:rem(16);
				}
			}
			&_descr {
				@extend %pn;
				@extend %light;
				margin:0;
				@include for-width(-small-lg) {
					font-family: "Poppins-Regular", sans-serif;
				}
			}
		}
	}
	&__links {
      margin-top:rem(25);
	  @include for-width(-tablet) {
		  text-align:center;
		  margin-bottom:rem(25);
	  }
	  @include for-width(-small-lg) {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		 -ms-align-items: center;
    	align-items: center;
	  }
      .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display: inline-block;
        margin-right: rem(10);
		@include for-width(-tablet) {
		  margin:0 rem(10);
	  	}
		@include for-width(-small-lg) {
			padding:rem(10) 0;
			width:95%;
			margin:0 rem(5);
			display:block;
			font-family: "Poppins-SemiBold", sans-serif;
		}
		&:last-child {
			margin-right: 0;
		}
      }
    }
}
</style>
