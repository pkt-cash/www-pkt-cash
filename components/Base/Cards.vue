<template>
  <div class="v-cards">
    <template v-for="item of list">
		<div class="v-cards__card">
			<img :src="item.image" :alt="item.title" v-if="item.image" class="v-cards__card__image" />
			<h4 class="v-cards__card__title">{{ item.title }}</h4>
			<p class="v-cards__card__descr">{{ item.descr }}</p>
		</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    list: Array,
	image: String,
  }
};
</script>

<style lang="scss">
.v-cards {
	@extend %df;
    @extend %ais;
    @extend %jcsb;
	&__card {
		&__image {
			object-fit: contain;
			object-position: center center;
		}
		&__title {
			margin-bottom:rem(10);
			@include for-width(-laptop) {
				margin-bottom:rem(3);
			}
		}
		&__descr {
			@extend %pn;
		}
	}
}
</style>
