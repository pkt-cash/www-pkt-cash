<template>
  <div class="v-trademark">
    <section class="v-trademark-section-top">
      <SimpleHeader mobile_img="" :title="this.$t("trademark.heading")" subtitle="" bg="" />
    </section>
    <section class="v-trademark-section">
		<div class="container">
			<p class="v-trademark-section__text">{{ $t("trademark.subtitle_1") }} <a href="/brand">{{ $t("trademark.subtitle_2") }}</a> {{ $t("trademark.subtitle_3") }}:</p>
			<ol>
				<li>{{ $t("trademark.free_use_list_item_1") }}</li>
				<li>{{ $t("trademark.free_use_list_item_2") }}</li>
				<li>{{ $t("trademark.free_use_list_item_3") }}</li>
				<li>{{ $t("trademark.free_use_list_item_4") }}</li>
			</ol>
			<p class="v-trademark-section__text">{{ $t("trademark.notices") }}:</p>
			<ul>
				<li>{{ $t("trademark.notices_list_item_1") }}</li>
				<li>{{ $t("trademark.notices_list_item_2") }}</li>
				<li>{{ $t("trademark.notices_list_item_3") }} <a href="https://pkt.chat" target="_blank">http://pkt.chat</a></li>
			</ul>

			<h4 class="v-trademark-section__list-title">{{ $t("trademark.uses") }}</h4>
			<p class="v-trademark-section__text">{{ $t("trademark.you_may") }}:</p>
			<ul>
				<li>{{ $t("trademark.you_may_text") }}</li>
			</ul>
			
			<h4 class="v-trademark-section__list-title">{{ $t("trademark.unacceptable_uses") }}</h4>
			<p class="v-trademark-section__text">{{ $t("trademark.specific_things") }}:</p>
			<ul>
				<li>{{ $t("trademark.specific_item_1") }}</li>
				<li>{{ $t("trademark.specific_item_2") }}</li>
			</ul>
		</div>
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";

export default {
  components: {
    SimpleHeader,
  },
  head() {
    return {
      title: this.$t("trademark.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>

<style lang="scss">
.v-trademark-section-top {
	& .c-simple-header {
		padding: rem(150) 0 rem(50);
		min-height: 1px;
		@include for-width(-tablet-lg) {
			padding: rem(75) 0 rem(50);
		}
		@include for-width(-small-lg) {
			padding: rem(60) 0 rem(25);
			height: auto;
		}
		& .container {
			max-width: rem(1217);
			padding: 0;
			@include for-width(-tablet-lg) {
			  padding: 0 rem(30);
			}
		}
		&__title {
			color: #191944;
			text-align: center;
			max-width: rem(865);
			margin: 0 auto;
		}
	}
}
.v-trademark-section {
	& .container {
		width: 100%;
		max-width: rem(1217);
		margin: 0 auto rem(100);
		@include for-width(-tablet-lg) {
			padding: 0 rem(30);
		}
	}
	&__text {
		@extend %text-main;
		color: $dark_blue;
		margin-bottom: rem(20);
		@include for-width(-tablet) {
		  margin-bottom: rem(10);
		}
	}
	&__list-title {
		@extend %h2-title;
		  margin-bottom: rem(30);
		  @include for-width(-tablet) {
			margin-bottom: rem(15);
			@include font_sizes(16, 26);
		  }
	}
	&__list-subtitle {
		@extend %h3-title;
		  margin-bottom: rem(10);
		  @include for-width(-tablet) {
			margin-bottom: rem(5);
			@include font_sizes(16, 26);
		  }
	}
	& ol,& ul {
		padding-left: rem(50);
		@extend %text-main;
		color: $dark_blue;
		margin-bottom: rem(20);
	}
	& ol li {
		display:list-item;
		list-style-type: decimal;
	}
	& ul li {
		display:list-item;
		list-style-type: disc;
	}
	& ul ul li {
		list-style-type: circle;
	}
}
</style>
