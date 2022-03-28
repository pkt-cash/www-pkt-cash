<template>
  <div class="c-eco">
    <template v-for="item of list">
		<div class="c-eco_inner" data-aos="fade-up">
		 <a :href="item.link" target="_blank" class="c-eco_inner__link">
			<img :src="item.img_link" :alt="item.title" class="c-eco_inner__img" :style="{ 'background-color': item.bg }" />
			<div class="c-eco_inner__content">
        <h2 class="c-eco_inner__content__title">{{ item.title }}</h2>
			  <p class="c-eco_inner__content__descr">{{ item.content }}</p>
      </div>
		 </a>
		</div>
    </template>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: "Eco",
  props: {
    list: Array,
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
.c-eco {
	@extend %container_new;
  @extend %df;
	@extend %fw;
	@extend %jcsb;
  padding-top:rem(125);
	@include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:rem(100) rem(25) 0;
    }
	@include for-width(-small-lg) {
      padding:0 rem(20);
  }
  &_inner {
    width: calc(33.333% - 22px);
		flex: 1 1 auto;
    margin:	0 rem(11) rem(50);
    background: #222450;
    border-radius: rem(20);
    @include for-width(-desktop-lg) {
      margin-bottom:rem(22);
    }
    @include for-width(-tablet) {
      width: calc(50% - 22px);
      margin:	0 rem(11) rem(22);
    }
    @include for-width(-small-lg) {
      width: calc(50% - 10px);
      margin:	0 rem(5) rem(30);
    }
    &__img {
      object-fit: cover;
      object-position: center;
      @extend %db;
      width:100%;
      border-top-left-radius:rem(20);
      border-top-right-radius:rem(20);
      @include for-width(-small-lg) {
        height:rem(85);
      }
    }
    &__content {
      padding:rem(25) rem(35);
      @include for-width(-tablet-lg) {
        padding:rem(20) rem(30);
      }
      @include for-width(-small-lg) {
        padding:rem(15);
      }
      &__title {
        @extend %heading-super-small;
        color: $white;
      }
      &__descr {
        @extend %pn;
				color: $white;
        @include for-width(-small-lg) {
          font-size:rem(12);
          line-height:rem(18);
        }
      }
    }
  }
}
</style>
